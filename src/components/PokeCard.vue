<script setup>
import { onMounted, ref } from "vue";
import { getCardPoke } from "@/services/fetch";

const props = defineProps(["pokemon"]);
const cardData = ref("");

onMounted(async () => {
  cardData.value = await getCardPoke(props.pokemon.url);
});
</script>
<template>
  <li v-if="cardData" class="poke-card">
    <router-link
      :to="{ name: 'pokemon', params: { pokeid: cardData.name } }"
      class="poke-card__data"
    >
      <img :src="cardData.sprite" :alt="cardData.name" class="data__sprite" />
      <p>{{ cardData.name }}</p>
      <p>#{{ cardData.id }}</p>
      <ul class="data__type">
        <li v-for="types in cardData.types">{{ types.type.name }}</li>
      </ul>
      <!-- <div class="poke-card__color"></div> -->
    </router-link>
  </li>
</template>
<style scoped lang="scss">
.poke-card {
  background-color: white;
  position: relative;
  width: 12rem;
  margin-bottom: 1rem;
  border-radius: 15px;

  &__data {
    z-index: 2;
    color: #181818;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    border-radius: 15px;
    border: 1rem solid white;
    &:hover,
    &:active {
      background-color: white;
    }

    .data__type {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding: 0;
      li {
        font-size: 0.8rem;
        display: inline-block;
        padding: 0.2rem 0.5rem;
        border: 1px solid #2c3e50;
        background-color: #ffffcc;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        box-shadow: hsl(0deg 0% 9.41% / 54%) 1px 1px 2px 1px;
        &:not(:last-of-type) {
          margin-right: 0.5rem;
        }
      }
    }
    &::after {
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      background-color: v-bind("cardData?.color");
      filter: opacity(20%);
      border-radius: 15px;
    }
  }
}
</style>
