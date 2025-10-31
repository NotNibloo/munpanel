export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event) as HeadersInit;

  const data = await auth.api.setRole({
    body: {
      userId: "user-id",
      role: "admin",
    },
    headers,
  });

  return data;
});
