<script setup>
import { onBeforeMount, onMounted } from 'vue';

// 라이프 사이클, 컴포넌트가 동작하고 사라지는 이 과정의 특정 시점에서 뭔가를 처리하고싶을때 갈고리 걸듯 처리 코드 작성 가능
// 마운트 기준으로 실행하고싶은거는 비포 마운트, 마운티드 이런식으로 된다. 규칙성이 있음

onBeforeMount(()=>{
  alert('마운트 전에 실행 됩니다');

});
onMounted(()=>{
  alert('마운트 후에 실행 됩니다');
})
//마운트- 돔 생성 단계, 버츄얼 돔, 돔, 뷰 까지 와야 눈에 보이는데 마운트단계는 돔까지이다.

</script>

<template>
  <h2>Life Cycle</h2>
</template>

<style scoped>

</style>