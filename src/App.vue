<style scoped>
@font-face {
  font-family: 'ceraPro';
  font-style: normal;
  font-weight: normal;
  src: url('~/assets/fonts/ceraPro/CeraProRegular.woff') format('woff');
}
.ts-font {
  font-family: 'ceraPro';
}
::v-deep .v-application--wrap {
  min-height: unset !important;
}
.v-application {
  line-height: unset !important;
}
.theme--light.v-application {
  background: transparent !important;
}
</style>

<template>
  <v-app class="ts-font">
    <SearchBox />
  </v-app>
</template>

<script>
import SearchBox from '../components/SearchBox/index.vue';
export default {
  components: {
    SearchBox,
  },
};
</script>
