<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const anyAux = ref(parseInt(route.params.any));
const centreAux = ref(decodeURIComponent(route.params.centre));

const centreSeleccionat = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json');
    
    const filteredData = response.data.find(item => 
      item.any === anyAux.value && item.tipus_de_centres === centreAux.value
    );// Capturamos el año de la URL

    if (filteredData) {
      centreSeleccionat.value = filteredData;
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
});
</script>

<template>
  <router-link to="/beques">⬅ Tornar</router-link>
  <h2>Detall del Centre</h2>

  <div v-if="centreSeleccionat">
    <p><strong>Any:</strong> {{ anyAux }}</p>
    <p><strong>Tipus de Centre:</strong> {{ centreAux }}</p>
  </div>

  <div v-else>
    <p>No s'ha trobat informació per a aquest centre en aquest any.</p>
  </div>
</template>
