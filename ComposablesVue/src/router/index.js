import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import User from "../views/User.vue"; 


const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: Home 
  },
  { path: "/post/:id", 
    name: "Post", 
    component: Post 
  },
  /* Creamos la nueva ruta para ver el usuario que escribe la frase */
  { 
    path: "/user/:id", 
    name: "User", 
    component: User 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
