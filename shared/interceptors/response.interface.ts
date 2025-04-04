export type ResponseInterface = {
  readonly statusCode: number;
} & (ResponseInterceptorSuccess | ResponseInterceptorError);

interface ResponseInterceptorSuccess {
  readonly success: true;
  readonly data: any;
}

interface ResponseInterceptorError {
  readonly success: false;
  readonly error: string;
}
