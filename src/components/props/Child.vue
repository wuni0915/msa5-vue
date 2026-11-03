<script setup>
// import {defineProps} from 'vue'; 이거 안해도 이제는 바로 쓸 수 있다.

const props = defineProps({
  'item':Object,
  'str':String
});
// const {item, str} = defineProps({}) 구조분해로 받아오는거는 문제가 생길수 있는데 가능은 한 거 같다.
</script>
<template>
  <h2>Child</h2>
  <p>{{ props.item.name }}</p>
</template>
<style>
</style>