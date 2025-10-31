import { auth } from '@@/server/utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    email?: string
    password?: string
    name?: string
    username?: string
    displayUsername?: string
  }>(event)

  if (!body?.email || !body?.password || !body?.name || !body?.username) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  try {
    const data = await auth.api.signUpEmail({
      body: {
        email: body.email,
        password: body.password,
        name: body.name,
        username: body.username,
        displayUsername: body.displayUsername ?? body.username,
      },
    })

    return data
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error instanceof Error ? error.message : 'Unable to sign up',
    })
  }
})
