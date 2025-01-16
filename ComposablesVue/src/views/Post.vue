<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import llegirPost from "../composables/llegirPost";

const route = useRoute();
const { post, leerPost, user, leerUsuario } = llegirPost();

const fetchPostAndUser = async (postId) => {
  await leerPost(postId);
  await leerUsuario(post.value.userId);
};

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchPostAndUser(newId);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <!-- Con uso de routerlink conseguimos poder navegar hasta la pagina de usuario -->
    <div class="text-gray-500 mb-10">
      <router-link :to="{ name: 'User', params: { id: user.id } }" class="text-blue-500">{{ user.name }}</router-link>
    </div>
    <div>{{ post.body }}</div>
  </div>
</template>