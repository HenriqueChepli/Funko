<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { useFunkotore } from '@/stores/funko';

const funkoStore = useFunkotore();
const funkos = funkoStore.funkos;
</script>
<template>
  <header>
    <nav>
      <div class="nav">
        <img src="#" alt="Titulo" />
        <img src="#" alt="Carrinho" />
      </div>
      <div class="funkos">
        <ul>
          <li v-for="funko in funkos" :key="funko.id">
            <img :src="funko.image" alt="Image Funko" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
}

header nav .nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  border-bottom: solid 1px #0d0d0d;
}

header nav .funkos ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  max-width: 1480px;
  border-bottom: solid 1px #0d0d0d;
}

header nav .funkos ul li img {
  width: 250px;
  border-bottom: solid 0 1px #0d0d0d;
}
</style>