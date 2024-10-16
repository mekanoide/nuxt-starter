<script lang="ts" setup>
const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <button
      id="language-switcher"
      popovertarget="language-options"
      class="block relative"
    >
      {{ locale }}
    </button>
    <div popover id="language-options">
      <div class="grid gap-2 p-2">
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :disabled="locale.code === locale.current"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
#language-switcher {
  anchor-name: --switcher;
}

#language-options {
  position-anchor: --switcher;
  top: anchor(--switcher bottom);
  left: anchor(--switcher left);
  margin: 0;
  padding: 0;
  border: none;
}
</style>
