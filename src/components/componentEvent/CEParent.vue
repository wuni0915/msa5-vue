<script setup>
import CEChild from './CEChild.vue';
import {ref} from 'vue'

const count = ref(0);

const addCount = () => {
  count.value++;
}
// 함수 표현식을 많이 사용한다 중복 선언이 불가 하기 때문에
//컴포넌트 이벤트- 부모가 요청을 받아 자식한테 전달하는것. 이벤트 함수를 받는 방법


const multiCount = (value) => {
  count.value *= value;
  // 산술 대입 연산자

}
</script>
<template>
  <h2>CE Parent</h2>
  <p>카운트: {{ count }}</p>
  <CEChild @addCount = "addCount" @multiCount = "multiCount"/>
  <!-- 보통 동일하게 쓴다. -->
</template>
<style scoped>
</style>