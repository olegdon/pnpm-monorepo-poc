<template>
  <div>
    <h1 class="text-3xl underline mb-4 text-brand-main">
      Hello SPIEGEL!
    </h1>

    <UiButton
        v-for="color in ['dark', 'light', 'system']"
        :key="color"
    >
      {{ color }}
    </UiButton>

    <cc-button
        v-for="color in ['dark', 'light', 'system']"
        :key="color"
    >
      {{ color }}
    </cc-button>
  </div>
</template>

<script setup>
import UiButton from '@olegdon/pnpm-monorepo-poc-ui/components/ui/Button'
</script>