import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const response = context.switchToHttp().getResponse();
    
    return next.handle().pipe(
      map((data) => ({
        success: true,
        statusCode: response.statusCode,
        data,
      })),
      catchError((err) => {
        const statusCode = err instanceof HttpException ? err.getStatus() : 500;
        const res: any = err instanceof HttpException ? err.getResponse() : 'Internal server error';

        let message = 'Internal server error';

        if (typeof res === 'string') {
          message = res;
        } else if (!!res.message) {
          if (typeof res.message === 'string') {
            message = res.message;
          } else if (Array.isArray(res.message) && res.message.length > 0) {
            message = res.message[0];
          }
        }

        return throwError(() => new HttpException({
          success: false,
          statusCode,
          error: message,
        }, statusCode));
      }),
    );
  }
}
