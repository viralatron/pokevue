<template>
  <div class="credits">
    <div class="credit__attr">
      <p>
        <a href="https://github.com/viralatron/pokevue">PokéVue</a> criado por
        <a href="https://www.danielamaral.dev.br/" target="_blank"
          >Daniel Amaral</a
        >
      </p>
    </div>
    <div class="credit__attr">
      <p>
        <a href="https://pokeapi.co/">PokéApi</a> por
        <a href="https://github.com/PokeAPI/pokeapi#contributing"
          >Paul Hallett e cia</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.credits {
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 2rem);
  p {
    font-size: 0.8rem;
    font-family: monospace;
    text-align: center;
  }
}
</style>
