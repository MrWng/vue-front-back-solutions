<template>
  <div
    v-if="isExternal"
    class="svg-icon svg-external-icon"
    :class="className"
    :style="styleExternalIcon"
  ></div>
  <svg v-else :class="className" class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
import { defineProps, computed } from 'vue'
import { isExternal as external } from '@/utils/validate.js'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})
const isExternal = computed(() => external(props.icon))
const styleExternalIcon = computed(
  () =>
    `mask: url(${props.icon}) no-repeat 50% 50%; -webkit-mask: url(${props.icon}) no-repeat 50% 50%;`
)
const iconName = computed(() => `#icon-${props.icon}`)
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
