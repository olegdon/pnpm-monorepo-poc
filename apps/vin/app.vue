<template>
  <div>
    <h1 class="text-3xl underline">
      Hello world!
    </h1>

    <UiButton label="VIN" primary class="m-4"/>

    <cc-button
        label="VIN VIN"
        text-color="white"
        background-color="orange"
        class="m-2"
    />
  </div>
</template>

<script setup>
import UiButton from 'cc-ui/components/Button'
</script>