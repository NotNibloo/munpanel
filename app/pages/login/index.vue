<script setup lang="ts">
import { authClient } from '@@/lib/auth-client'

const email = ref('')
const password = ref('')
const session = authClient.useSession()

async function login() {
  await authClient.signIn.email({ email: email.value, password: password.value })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div v-if="!session.data">
      <input v-model="email" placeholder="Email" class="border p-2 mb-2">
      <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-2">
      <button class="bg-blue-500 text-white px-4 py-2 not-last:cursor-pointer" @click="login">Sign In</button>
    </div>

    <div v-else>
      <p>Vítej, {{ session.data?.user.email }}</p>
      <button  class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" @click="authClient.signOut()">Sign Out</button>
    </div>
  </div>
</template>
