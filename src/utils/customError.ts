export class CustomError extends Error {
  public status: any;

  constructor(message: string, status: any) {
    super(message);
    this.status = status;
  }
}