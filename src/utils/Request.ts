interface Request {
  body: object;
  success(attr?: any): void;
  error(attr?: any): void;
  finally(attr?: any): void;
}

class Request {
  constructor(attrs: Request) {
    this.body = attrs.body || {};
    this.success = attrs.success || (() => {});
    this.error = attrs.error || (() => {});
    this.finally = attrs.finally || (() => {});
  }
}

export default Request;
