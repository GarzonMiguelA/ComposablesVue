<script setup>
  /* Importamos los componentes, guardamos en variables y por ultimo mostramos TODOS los posts */
  import PostCard from "../components/PostCard.vue";
  import llegirPost from "../composables/llegirPost";

  const {posts, leerTodos} = llegirPost();
  leerTodos();
</script>


<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" /><!-- Se muestran lso posts con for, recorriendolos uno a uno -->
  </div>
</template>



<style scoped>
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-grow {
  flex-grow: 1;
}
</style>