<script setup>
// 뷰가 3버전 컴포지션 어쩌고를 쓸 때 꼭 셋업을 써야 사용이 가능하다.
import { ref } from 'vue';


const count = ref(0);
// 데이터 바운딩은 ref를 쓰면 된다.

</script>

<template>
<!-- 버츄얼 돔알기, 브라우저 환경이 아니기때문에 돔 생성을 안함 -->
 <!-- 데이터 바인딩 읽기 -->
  <!-- 로컬호스트와 로컬호스트 5174는 다르다... 80포트와 내장서버 어쩌고...-->
<!-- 태그명 다 같음/ 속성명은 특수하게 해줘야됨/  -->
 <div @click="count++" class="btn-cnt">Count is {{ count }}</div>
 <button @click="count=0">Count Reset</button>
 <!-- <div @click이벤트="콜백함수" class="btn-cnt">Count is {{ count }}</div> -->
 <!-- 저장 안해도 자동으로 반영됨 -->
</template>

<style>
.btn-cnt {
  width: 100px;
  height: 100px;
  background-color: cadetblue;
}
</style>
