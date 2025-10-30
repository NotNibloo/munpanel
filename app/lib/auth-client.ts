import { createAuthClient } from 'better-auth/vue';
import { jwtClient, usernameClient, adminClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,

  plugins: [
    jwtClient(),
    usernameClient(),
    adminClient()
  ]
});
