<template>
  <div>
    <h1 class="text-3xl underline text-cta-500 m-4">
      Index page VIN!
    </h1>

    <UiButton
        v-for="color in ['dark', 'light', 'system']"
        :key="color"
        class="mx-2"
    >
      {{ color }}
    </UiButton>
  </div>
</template>