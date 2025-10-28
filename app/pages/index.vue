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
    <h1 class="font-bold">
      Sup
    </h1>
    <div>
      <button class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>