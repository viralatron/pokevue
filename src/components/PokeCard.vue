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
    <router-link :to="{ name: 'pokemon', params: { pokeid: cardData.name } }">
      <div class="poke-card__data">
        <img :src="cardData.sprite" :alt="cardData.name" class="data__sprite" />
        <p>{{ cardData.name }}</p>
        <p>#{{ cardData.id }}</p>
        <ul class="data__type">
          <li v-for="types in cardData.types">{{ types.type.name }}</li>
        </ul>
      </div>
      <div class="poke-card__color"></div>
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
  padding: 1rem;

  &__data {
    z-index: 2;
    color: #181818;
    display: flex;
    flex-direction: column;
  }
  &__color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: v-bind("cardData?.color");
    filter: opacity(20%);
    border-radius: 15px;
  }
}
</style>
