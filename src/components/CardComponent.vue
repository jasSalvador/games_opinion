<template>
  <b-card
    :title="gameProps.name"
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <template v-if="showOpinions">
      <!-- Bloque de opiniones y formulario -->
      <div class="d-flex flex-column gap-2">
        <p class="fw-bold">Opiniones:</p>

        <ul v-if="opinions.length" class="ps-3">
          <li v-for="op in opinions" :key="op.id">
            <strong><span class="text-info">{{ op.name }}:</span> </strong> {{ op.description }}
          </li>
        </ul>
        <p v-else>Aún no hay opiniones.</p>

        <b-form @submit="onSubmit">
          <b-form-input v-model="form.name" placeholder="Tu nombre" required class="mb-2" />
          <b-form-textarea v-model="form.opinion" placeholder="Tu opinión..." rows="3" required class="mb-2" />
          <b-button type="submit" variant="success" class="w-100">Agregar opinión</b-button>
        </b-form>

        <b-button @click="toggleOpinions" variant="secondary" class="mt-1">
          ← Volver
        </b-button>
      </div>
    </template>

    <template v-else>
      <!-- Contenido original del juego -->
      <b-card-img :src="gameProps.background_image" alt="Juego" top />
      <b-card-text class="mt-2">
        <p>Rating: {{ gameProps.rating }}</p>
        <p>Released: {{ gameProps.released }}</p>
        <p>Update: {{ gameProps.updated }}</p>
      </b-card-text>

      <div class="d-flex justify-content-between mt-3">
        <b-button @click="toggleOpinions" variant="info">💬 Opiniones</b-button>
        <b-button @click="heartLike(gameProps.id, gameProps.name)" variant="secondary">
          <i :class="['bi', 'bi-heart-fill', heartRed[gameProps.id] ? 'text-danger' : 'text-light']"></i>
        </b-button>
      </div>
    </template>
  </b-card>
</template>


<script>
export default {
  name: "cardComponent",
  props: {
    gameProps: {
      type: Object,
      required: true,
    },
    heartRed: {
      type: Object,
    },
  },
  data() {
    return {
      showOpinions: false,
      form: {
        name: "",
        opinion: "",
      },
      opinions: [],
      opinionsLoaded: false,
    };
  },
  methods: {
    toggleOpinions() {
      this.showOpinions = !this.showOpinions;
      if (this.showOpinions && !this.opinionsLoaded) {
        const all = JSON.parse(localStorage.getItem("opinions")) || {};
        this.opinions = all[this.gameProps.id] || [];
        this.opinionsLoaded = true;
      }
    },
    onSubmit(e) {
      e.preventDefault();
      const newOpinion = {
        id: Date.now(),
        name: this.form.name,
        description: this.form.opinion,
      };
      const all = JSON.parse(localStorage.getItem("opinions")) || {};
      if (!all[this.gameProps.id]) all[this.gameProps.id] = [];

      all[this.gameProps.id].unshift(newOpinion);
      localStorage.setItem("opinions", JSON.stringify(all));
      this.opinions = all[this.gameProps.id];

      this.form.name = "";
      this.form.opinion = "";
    },
    heartLike(id, name) {
      this.$emit("heartClick", { id, name });
    },
  },
};
</script>

<style scoped>
.card {
  background-color: black;
  color: rgb(212, 212, 212);
}
.card-img-top {
  height: 200px;
}
</style>
