<script setup> 
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const anyAux = ref(parseInt(route.params.any));
const centreRebut = ref(route.params.centre);
</script>

<template>

    <button @click="$router.back()">⬅ Tornar</button>
    <h1>Centre: {{ centreRebut }} </h1>
    <h2>Any seleccionat: {{ anyAux }}</h2>
</template>