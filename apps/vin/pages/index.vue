<template>
  <div>
    <h1 class="text-3xl underline text-cta-500 m-4">
      Index page VIN!
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
import UiButton from "cc-ui/components/ui/Button.vue"
</script>