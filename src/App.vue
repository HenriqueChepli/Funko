<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponente from './components/FooterComponente.vue';
import HeaderComponente from './components/HeaderComponente.vue';
</script>

<template>
  <HeaderComponente />
  <RouterView />
  <FooterComponente />
</template>

<style scoped>
</style>
