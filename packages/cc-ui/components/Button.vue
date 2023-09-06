<template>
  <button :class="classes" :style="style" @click="onClick">{{ label }}</button>
</template>

<script setup>
import '../assets/button.css'

import { computed, defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].indexOf(value) !== -1,
  },
  backgroundColor: {
    default: '',
    type: String,
  },
  textColor: {
    default: '',
    type: String,
  },
})

const emit = defineEmits(['click'])

const classes = computed(() => ({
  'ui-button': true,
  'ui-button--primary': props.primary,
  'ui-button--secondary': !props.primary,
  [`ui-button--${props.size || 'medium'}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
}))

const onClick = () => {
  emit('click')
}
</script>

<style lang="sass">
.ui-button
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif
  font-weight: 700
  border: 0
  border-radius: 3em
  cursor: pointer
  display: inline-block
  line-height: 1
  &--primary
    color: white
    background-color: #1ea7fd
  &--secondary
    color: #333
    background-color: transparent
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset
  &--small
    font-size: 12px
    padding: 10px 16px
  &--medium
    font-size: 14px
    padding: 11px 20px
  &--large
    font-size: 16px
    padding: 12px 24px
</style>