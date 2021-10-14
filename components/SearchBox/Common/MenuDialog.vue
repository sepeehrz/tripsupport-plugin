<style scoped>
.ts-menu {
  border: 1px solid rgba(102, 103, 143, 0.2);
  box-shadow: 0px 2px 6px rgba(102, 103, 143, 0.1);
  border-radius: 8px;
  position: absolute;
  top: 92px;
  z-index: 9999;
  max-height: 300px;
  overflow: auto;
}
@media only screen and (max-width: 768px) {
  .ts-menu {
    top: 60px;
  }
}
</style>

<template>
  <section
    v-if="showMenu"
    class="ts-menu"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot name="data"></slot>
  </section>
</template>

<script>
export default {
  props: {
    showMenu: {
      default: false,
    },
    backgroundColor: {
      default: '#fff',
    },
  },
};
</script>
