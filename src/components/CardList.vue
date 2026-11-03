<script setup>
import {onBeforeMount, ref} from 'vue';
import axios from 'axios';

const cards = ref([]);
const page = ref(1);
const limit = 3;
// 레프 객체로 만드는거 html에서 반응형 할 때

const getNextPage = (async()=>{
    try{
    const url = 'https://picsum.photos/v2/list'

    const config = {
      params:{
        page: page.value,
        limit
      }
    };

    const response = await axios.get(url, config);
    cards.value.push(...response.data)
    // 동적 파라미터: 여러개 받을수 있는것.
    page.value++;
  }catch(error){
    console.error(error)
  }
}
);

const reset = () => {
  // cards.value = [];
  // page.value = 1;

  cards.value = cards.value.splice(limit, cards.value.length - limit);
  page.value = 2;
}
//라이프 사이클 훅스
onBeforeMount(getNextPage);

</script>
<template>
  <button @click="getNextPage">다음 페이지</button>
  <button @click="reset">리셋</button>
 <div class="card-container">
  <div v-for="item in cards" :key="item.id" class="card">
    <div class="card-img" :style="{backgroundImage: `url(${item.download_url})`}"></div>
    <div class="card-text">{{ item.id }}: {{ item.author }}</div>
  </div>
 </div>
</template>
<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;

}
.card-img {
  aspect-ratio: 4/3;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>