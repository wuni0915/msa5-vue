<script setup>
import {ref} from 'vue'
import Child from './Child.vue'
// 이때 부모자식 관계로 이루어진다.

const user = ref({
  id:1,
  name: '홍길동',
  age: 20
});
const str = ref('전달 문자열');

//부모가 가진 데이터를 자식들이 읽기 전용으로 내려서 전달 해줄수 있는 기능 - props
</script>

<template>
  <h2>Parent</h2>
  <Child :item = "user" :str="str"/>
  <!-- 전달할때의 키를 적는다. 키명은 내가 짓는다.item 연속 전달 나열 가능 :str="" -->
</template>
<style>
</style>