<script setup>
import usePokemonStore from "@/stores/pokemon";
import EvolutionLink from "@/components/EvolutionLink.vue";
import { ref } from "vue";

const pokemonStore = usePokemonStore();
const tglMoveSet = ref(true);

function upperCase(str) {
  console.log(showMoveSet);
  const sentence = str.split("-");

  sentence.map((el) => {
    return el[0].toUpperCase() + el.substr(1);
  });

  sentence.join(" ");
  return sentence;
}
</script>
<template>
  <main v-if="pokemonStore.success === true" class="pokemon">
    <section class="pokemon__info">
      <section class="pokemon__images">
        <figure class="pokemon__img">
          <img
            :src="pokemonStore.pokemon.sprites.front_default"
            alt="front view"
          />
          <figcaption>Front View</figcaption>
        </figure>
        <figure class="pokemon__img">
          <img
            :src="pokemonStore.pokemon.sprites.back_default"
            alt="back view"
          />
          <figcaption>Back View</figcaption>
        </figure>
      </section>

      <section class="pokemon__detail">
        <dl>
          <div class="row">
            <div class="definition">
              <dt>Name:</dt>
              <dd>
                {{
                  pokemonStore.pokemon.name[0].toUpperCase() +
                  pokemonStore.pokemon.name.substr(1)
                }}
              </dd>
            </div>
            <div class="definition-number">
              <em>{{ pokemonStore.pokemon.id }}</em>
            </div>
          </div>
          <div class="definition-column">
            <dt>Types:</dt>
            <dd>
              <ul class="inline">
                <li
                  v-for="types in pokemonStore.pokemon.types"
                  class="inline__pill"
                >
                  {{
                    types.type.name[0].toUpperCase() + types.type.name.substr(1)
                  }}
                </li>
              </ul>
            </dd>
          </div>
          <div class="definition-column">
            <dt>Stats:</dt>
            <dd>
              <ul class="stats">
                <li v-for="stats in pokemonStore.pokemon.stats" class="stat">
                  {{
                    stats.stat.name
                      .split("-")
                      .map((el) => el[0].toUpperCase() + el.substr(1))
                      .join(" ")
                  }}
                  : {{ stats.base_stat }}
                </li>
              </ul>
            </dd>
          </div>
          <div class="definition">
            <dt>Weight:</dt>
            <dd>{{ pokemonStore.pokemon.weight / 10 }}Kg</dd>
          </div>
          <div class="definition">
            <dt>Height:</dt>
            <dd>{{ pokemonStore.pokemon.height / 10 }}m</dd>
          </div>
          <div class="definition-column">
            <dt class="dt-button">
              Aquirable Skills:
              <button @click="tglMoveSet = !tglMoveSet">
                Show {{ tglMoveSet ? "More" : "Less" }}
              </button>
            </dt>
            <dd>
              <ul class="inline inline-moveset" :class="{ hidden: tglMoveSet }">
                <li
                  v-for="moves in pokemonStore.pokemon.moves"
                  class="inline__pill inline__pill-move"
                >
                  {{
                    moves.move.name
                      .split("-")
                      .map((el) => el[0].toUpperCase() + el.substr(1))
                      .join(" ")
                  }}
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </section>
    </section>
    <section class="pokemon__evolution">
      <h2>Evolution Chart</h2>
      <ul v-for="link in pokemonStore.evolution_chain" class="list">
        <li class="list__link">
          <EvolutionLink :link="link" />
        </li>
      </ul>
    </section>
  </main>
  <main v-else class="message">
    <h3>{{ pokemonStore.message }}</h3>
  </main>
</template>
<style lang="scss">
.message {
  h3 {
    text-align: center;
  }
}
.pokemon {
  display: flex;
  flex-direction: column;
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__images {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 3rem;
  }
  &__img {
    padding: 0.2rem;
    background-color: white;
    border-radius: 15px;
    border: 0.8rem solid white;
    position: relative;
    z-index: 1;
    &::after {
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      background-color: v-bind("pokemonStore.pokemon.color");
      filter: opacity(20%);
      border-radius: 15px;
    }
    figcaption {
      text-align: center;
      color: #2c3e50;
    }
  }
  &__detail {
    padding: 1rem;
    border-radius: 25px;
    border: 1rem solid white;
    background-color: #2c3e50;
    color: white;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .definition {
      display: flex;
      margin-bottom: 0.2rem;
      dt {
        margin-right: 0.5rem;
      }
      &-number {
        background-color: #41b883;
        box-shadow: #1a252fba 4px 3px 2px 0px;
        width: 4rem;
        height: 4rem;
        display: flex;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        em {
          font-size: 2rem;
          font-weight: bold;
        }
      }
      &-column {
        display: flex;
        flex-direction: column;
        dt {
          margin-bottom: 0.5rem;
        }
        .dt-button {
          display: flex;
          justify-content: space-between;
          button {
            padding: 0.4rem 0.6rem;
            border: 0px;
            border-radius: 10px;
            background-color: #41b883;
            box-shadow: #1a252fba 4px 3px 2px 0px;
            cursor: pointer;
            font-weight: 600;
          }
        }
      }
    }
  }
  &__evolution {
    margin-bottom: 3rem;
    > .list {
      display: flex;
      padding: 0;
      flex-direction: row;
      justify-content: center;
    }
  }
  .inline {
    padding: 0;
    &-moveset {
      position: relative;
      max-height: 10000vw;
      transition: max-height 0.5s;
      &.hidden {
        max-height: 5rem;
        &::before {
          content: "";
          background: linear-gradient(
            0deg,
            rgba(44, 62, 80, 1) 0%,
            rgba(44, 62, 80, 0) 100%
          );
          height: 0.2rem;
          width: 100%;
          position: absolute;
          bottom: 0;
          z-index: 10;
        }
      }
      overflow: hidden;
    }
    &__pill {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      background-color: darken(#2c3e50, 10%);
      box-shadow: #1a252fba 4px 3px 2px 0px;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }
    }
  }
  .list {
    align-items: center;

    &__link {
      display: flex;
      flex-direction: row;
      align-items: center;
      .link__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
      }
    }
  }
}
</style>
