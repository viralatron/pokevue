<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h3>(Pode ser tanto o nome quanto o número do pokémon)</h3>
    <form class="greetings__form">
      <input type="text" placeholder="" /><button
        type="button"
        @click="console.log('teste')"
      >
        Buscar
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h2,
.greetings h3 {
  text-align: center;
}
.greetings {
  display: flex;
  flex-direction: column;
  &__form {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .greetings h2,
  .greetings h3 {
    text-align: left;
  }
}
</style>
