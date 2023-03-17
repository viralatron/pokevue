import { createRouter, createWebHistory } from "vue-router";
import usePokemonStore from "../stores/pokemon";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: async (to, from) => {
        const pokemonStore = usePokemonStore();

        pokemonStore.listPokemon();
      },
    },
    {
      path: "/pokemon/:pokeid",
      name: "pokemon",
      component: () => import("../views/PokeView.vue"),
      beforeEnter: async (to, from) => {
        const pokemonStore = usePokemonStore();

        pokemonStore.search(to.params.pokeid);
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: HomeView,
    },
  ],
});

export default router;
