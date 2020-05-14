export interface RESTful {
  code: number,
  success: boolean,
  message: string,
  data: Record<string, any> | null,
}
