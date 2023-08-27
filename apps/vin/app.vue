<template>
  <div>
    <UiButton label="Click me" primary class="d-block"/>
    <cc-button
        label="And me"
        text-color="white"
        background-color="green"
        class="mt-2 d-block"
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

<style lang="sass">
.d-block
  display: block

.mt-2
  margin-top: 2rem
</style>