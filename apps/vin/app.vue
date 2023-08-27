<template>
  <div>
    <UiButton label="Test" primary/>
    <cc-button label="VIN" text-color="white" background-color="green"/>
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