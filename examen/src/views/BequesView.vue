<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const anys = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json');
    
    const anysUnics = new Set();
    response.data.forEach(item => {
      if (item.any >= 2020 && item.any <= 2025) {
        anysUnics.add(item.any);
      }
    });

    anys.value = Array.from(anysUnics).sort((a, b) => a - b);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
});
</script>

<template>
    <h1>Beques</h1>
    <h2>Anys</h2>
    <ul>
        <li v-for="any in anys" :key="any">
            <router-link :to="`/detall-any/${encodeURIComponent(any)}`">{{ any }}</router-link>
        </li>
    </ul>
</template>