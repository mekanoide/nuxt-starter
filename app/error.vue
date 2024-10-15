<script setup lang="ts">
const error = useError()

const localePath = useLocalePath()

useHead({
  title: `Error ${error.value?.statusCode}`
})
</script>

<template>
  <div class="p-4 grid justify-center gap-4 pt-[25dvh]">
    <h1 class="text-6xl font-black">
      {{ $t('error.error') }} {{ error?.statusCode }}
    </h1>
    <p>{{ error?.message }}</p>
    <NuxtLink :to="localePath('/')">{{ $t('error.go-back-home') }}</NuxtLink>
  </div>
</template>
