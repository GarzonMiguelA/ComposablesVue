<!-- Creamos la vista usuario para mostrar los datos -->

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  
  const route = useRoute();//Obtenemos informacion de la ruta actual
  const user = ref(null); // Creamos varaible reactiva para guardar datos del user
  
  const fetchUser = async (userId) => { // Creamos función asíncrona para coger datos del user por ID.
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    user.value = await response.json();// Y asignamos datos del user a la const.
  };
  
  onMounted(() => { //Ejecutamos la linea 17 cuando se monta
    fetchUser(route.params.id); //Obtenemos ID de usuario desde la URL y llamamos a la fucion para coger datos
  });

</script>

<template>
    <div v-if="user">
      <h1 class="text-3xl">{{ user.name }}</h1>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
      <p><strong>Geo:</strong> Lat: {{ user.address.geo.lat }}, Lng: {{ user.address.geo.lng }}</p>
    </div>
</template>


<style scoped>
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
p {
  margin: 0.5rem 0;
}
strong {
  font-weight: bold;
}
</style>