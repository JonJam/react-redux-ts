export default class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}
