<script setup>
import SlotChild from './SlotChild.vue';

</script>
<template>
  <div class="slot-child-container">
    <h2>Slot Parent</h2>
    <SlotChild> 부모에서 보낸 버튼</SlotChild>
  <!-- 부모에서 작성한 템플릿 정보를 자식 컴포넌트한테 전달하기 위한 기능- 슬롯/ 프롶스 자바스크립트에서 작성한 ... 전달하는 정보의 종류가 다름-->
   <SlotChild>전송</SlotChild>
   <SlotChild></SlotChild>
<!-- 최상위 요소의 부모 스타일 영향 받기 방지는 새 태그로 감싸 회피 하는 것이다. -->
  </div>
</template>
<style scoped>
/* <style scoped> scoped는 다른 컴포넌트에 영향을 주지않는다. 영향을 주는경우 스타일 전파라고 한다.*/
</style>