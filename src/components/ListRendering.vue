<script setup>
import {ref} from 'vue';

const items = ref([
  {
    id: 1,
    kinds: '중식',
    food: '짜장면'
  },
  {
    id: 2,
    kinds: '한식',
    food: '비빔밥'
  },
  {
    id: 3,
    kinds: '일식',
    food: '돈까스'
  }
]);
</script>

<template>
  <h2>List Rendering</h2>
  <div class="container">
    <div v-for="item in items" :key="item.id" class="card">
      <!-- <div v-for="매개변수 in 돌리고싶은 원본" class="card"> -->
        <!-- <div v-for="item in items" 관습적으로 단수형 in 복수형 class="card"> -->
        <!-- 내부적으로 뷰가 제어를 해주지만 이 요소를 인식할 수 있는 뭔가를 줘야됨 그게 :key이다 -->
        <p>{{ item.kinds }}</p>
        <p>{{ item.food }}</p>
    </div>
    <!-- 이 div를 루프 돌리는것이다. -->
     <!-- 실습 컴포넌트 명 TabUI -->
  </div>
</template>

<style>

</style>