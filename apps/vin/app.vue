<template>
  <div>
    <h1 class="text-3xl underline text-cta-500 m-4">
      Hello VIN!
    </h1>

    <UiButton label="VIN" primary class="m-4"/>

    <cc-button
        label="VIN VIN"
        text-color="white"
        background-color="orange"
    />
  </div>
</template>

<script setup>
import UiButton from 'cc-ui/components/Button'
</script>