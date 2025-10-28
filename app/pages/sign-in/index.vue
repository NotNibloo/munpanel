<script setup lang="ts">
import { authClient } from '@@/lib/auth-client'

const email = ref('')
const password = ref('')
const session = authClient.useSession()

definePageMeta({ middleware: 'guest' })

const router = useRouter()

async function signIn() {
  try {
    await authClient.signIn.email({ email: email.value, password: password.value })
    await router.push('/')
  } catch (error) {
    console.error('Failed to sign in', error)
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div v-if="!session.data">
      <input v-model="email" placeholder="Email" class="border p-2 mb-2">
      <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-2">
      <button class="bg-blue-500 text-white px-4 py-2 cursor-pointer" @click="signIn">Sign In</button>
    </div>
  </div>
</template>
