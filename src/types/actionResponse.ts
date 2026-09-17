// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionResponse<TBody = Record<string, any>> = {
  status: "success" | "error";
  body: TBody;
};