<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import '../assets/button.css'
import { reactive, computed } from 'vue'

export default {
  name: 'ui-button',

  props: {
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
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'ui-button': true,
        'ui-button--primary': props.primary,
        'ui-button--secondary': !props.primary,
        [`ui-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.textColor,
      })),
      onClick() {
        emit('click')
      },
    }
  },
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