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


<style scoped>
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-gray-500 {
  color: #6b7280;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.text-blue-500 {
  color: #3b82f6;
}
</style>