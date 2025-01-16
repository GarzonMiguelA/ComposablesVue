<!-- Creamos la vista usuario para mostrar los datos -->

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const user = ref(null);
  
  const fetchUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    user.value = await response.json();
  };
  
  onMounted(() => {
    fetchUser(route.params.id);
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