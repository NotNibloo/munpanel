<script setup lang="ts">
import { authClient } from '~/lib/auth-client'

definePageMeta({ middleware: 'auth' })

async function signOut() {
  try {
    await authClient.signOut()
    await navigateTo('/sign-in')
  } catch (error) {
    console.error('Failed to sign out', error)
  }
}
</script>

<template>
  <div>
    <h1 class="font-bold m-5">
      Sup
    </h1>
    <div>
      <button class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer m-5" @click="signOut">Sign Out</button>
    </div>
    <NuxtLink class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer m-5" to="/users">
      Manage Users
    </NuxtLink>
  </div>
</template>