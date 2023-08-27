<template>
  <div>
    <UiButton label="Click me" primary />
    <cc-button
        label="And me"
        text-color="white"
        background-color="green"
        class="flex justify-center items-center h-12 w-32 rounded-md"
    />
  </div>
</template>

<script>
import UiButton from 'cc-ui/lib/components/Button'

export default defineComponent({
  components: {
    UiButton
  },
})
</script>