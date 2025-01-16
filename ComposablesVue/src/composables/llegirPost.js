import { ref } from "vue";

const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";//Al igual que sacamos la infromacion con URL de posts, hacemos los mismos pasos para los users

/* Igual que declarammos variables reactivas y leemos, seguimos los mismos pasos para usuarios */
export default function llegirPost() {
    /* Creamos variables reactivas */
    const posts = ref([]);
    const post = ref(null);
    const user = ref(null);

    /* Leemos todas las URL de posts */
    const leerTodos = async () => {
        const response = await fetch(URL_POSTS);
        posts.value = await response.json();
    };

    /* Leemos un post en concreto (con id) */
    const leerPost = async (id) => {
        const response = await fetch(`${URL_POSTS}/${id}`);
        post.value = await response.json();
    };

    /* Seguimos los mismos pasos para leerUsuario (en este caso leer todos los usuarios no es necesario ya que no vamos a mostrar a todos, si no uno x uno) */
    const leerUsuario = async (id) => {
        const response = await fetch(`${URL_USERS}/${id}`);
        user.value = await response.json();
    };

    /* Devolvemos todo lo trabajado */
    return {
        posts, post, leerTodos, leerPost, user, leerUsuario
    };
}