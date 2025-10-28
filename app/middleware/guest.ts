import { authClient } from '@@/lib/auth-client'

type SessionPayload = Awaited<ReturnType<typeof authClient.getSession>>

export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) {
    const session = await authClient.getSession()
    if (session?.data) return navigateTo('/')
    return
  }

  const headers = useRequestHeaders(['cookie'])
  const session = await $fetch<SessionPayload>('/api/auth/get-session', { headers })
  if (session?.data) return navigateTo('/')
})
