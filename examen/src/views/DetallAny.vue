<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const anyAux = ref(parseInt(route.params.any));
const centres = ref([]);
const centresFiltrats = new Set();

const datos = ref([]); 

onMounted(async () => {
  try {
    const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json');
    datos.value = response.data;


    datos.value.forEach(element => {
        if(!centresFiltrats.has(element.tipus_de_centres)){
            centresFiltrats.add(element.tipus_de_centres);
            centres.value.push(element);
        }
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
});
</script>

<template>
    <button @click="$router.back()">Tornar</button>
  <h2>Any seleccionat: {{ anyAux }}</h2>
  <h3>Tipus de Centres</h3>
  <ul>
    <li v-for="centre in centres" :key="centre">
        <router-link :to="`/centre/${encodeURIComponent(centre)}`">{{ centre.tipus_de_centres }}
        </router-link>
    </li>
    
  </ul>
</template>
