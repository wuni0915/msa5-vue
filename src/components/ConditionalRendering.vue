<!-- 조건부 렌더링  -->
<script setup>
import {ref} from 'vue';

const num = ref(0);
const flg =ref(true);
</script>

<template>
  <input type="number" v-model="num">
  <!-- 컴포넌트라 해도 같은 뷰인데 왜 이걸 로컬 호스트로 뜨지 않을까? -->
   <p v-if="num === 0">0 입니다.</p>
   <p v-else-if="num % 2 === 0">짝수 입니다.</p>
   <p v-else>홀수 입니다.</p>
   <!-- 111111111111111111같이 큰 숫자는 컴퓨터가 담질 못해 값이 제대로 나오지 않는다. -->
    <hr>
    <button :class="{ 'btn-toggle': flg === false}" @click="flg = !flg">토글</button>
    <p v-if="flg">v-if</p>
    <!-- v-if는 돔에서 사라짐 -->
    <p v-show="flg">v-show</p>
    <!-- v-if는 돔에 계속 있음 -->
     <!-- 디스플레이 논했다 키는것과 요소 자체를 없앴다 켜는거는 리소스(데이터) 양이 다르다. 요소커껐이 리소스양이 크다. v-show는 요소 유지되고 display로 상태가 바뀐다. -->
      <!-- 자바스크립트는 빈문자열, 언디파인드, 널, 0 은 false이고 빈배열은 true이이다. 빈 배열도 객체이며 변수명에 담겨져있을때. === 이거는 데이터 타입까지 체크, == 이거는 형태만 본다. '1' == 1 은 트루. -->
</template>

<style>
.btn-toggle {
  background-color: #5f9ea0;
}
</style>