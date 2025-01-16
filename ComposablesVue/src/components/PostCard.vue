<script setup>
const props = defineProps({
  post: Object,
});
</script>



<template>
  <div class="flex m-2 gap-2 items-center shadow-md w-1/4 flex-grow rounded overflow-hidden" style="border: 1px solid #eee">
    <img src="https://via.placeholder.com/150" style="background: #cccccc" width="150" height="150"/>
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      {{ post.title }}
    </router-link>
  </div>
</template>


<style scoped>
.flex {
  display: flex;
}
.m-2 {
  margin: 0.5rem;
}
.gap-2 {
  gap: 0.5rem;
}
.items-center {
  align-items: center;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.flex-grow {
  flex-grow: 1;
}
.rounded {
  border-radius: 0.25rem;
}
.overflow-hidden {
  overflow: hidden;
}
</style>