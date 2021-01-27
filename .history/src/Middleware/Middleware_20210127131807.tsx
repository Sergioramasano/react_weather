export const loggerMiddleware = (store: { getState: () => any }) => (
  next: (arg0: any) => any
) => (action: any) => {
  const result = next(action);
  console.log("Middleware", store.getState());
  return result;
};
