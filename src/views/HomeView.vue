<template>
  <div>
    <div class="container pt-5">
      <h1 class="text-info fw-bold text-center mx-auto">Juegos disponibles 🎮</h1>
      <div class="row justify-content-center align-items-top py-5 ">
        <div class="col-12 col-sm-10 col-md-6 col-lg-4 mb-3" v-for="game in games" :key="game.id">
          <CardComponent
            :gameProps="game"
            @heartClick="heartLike"
            :heartRed="heartRed"
            class="mx-auto"
          />
        </div>
      </div>

      <div class="text-center mx-auto">
        <button
          @click="loadGames(next)"
          v-if="next != ''"
          class="btn btn-dark mb-5"
        >
          Ver mas juegos disponibles
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import Vue from "vue";
export default Vue.extend({
  name: "HomeView",
  components: {
    CardComponent,
  },
  data() {
    return {
      games: [],
      next: null,
      likeGame: [],
      heartRed: {},
    };
  },
  methods: {
    loadGames(url) {
      this.$axios
        .get(url)
        .then((response) => {
          console.log(response.data.results);
          this.games = [...this.games, ...response.data.results];
          this.next = response.data.next;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    heartLike(game) {
      const wasRed = this.heartRed[game.id];
      // Cambiar el estado del corazón
      this.$set(this.heartRed, game.id, !wasRed);
      if (!wasRed) {
        // Si el corazón pasa a rojo, agregar a favoritos
        this.likeGame.push({ id: game.id, name: game.name });
        console.log(this.likeGame);
      } else {
        // Si el corazón se desactiva, eliminar de favoritos
        this.likeGame = this.likeGame.filter((item) => item.id !== game.id);
      }
      localStorage.setItem("heartClick", JSON.stringify(this.heartRed));
      localStorage.setItem("likeGame", JSON.stringify(this.likeGame));
    },
  },
  created() {
    this.loadGames("");
  },
  mounted() {
    // Cargar datos de localStorage al montar el componente
    const savedState = localStorage.getItem("heartClick");
    const savedGame = localStorage.getItem("likeGame");

    if (savedState) {
      this.heartRed = JSON.parse(savedState);
    }
    if (savedGame) {
      this.likeGame = JSON.parse(savedGame);
    }
  },
});
</script>

<style>

</style>