<script setup>

</script>
<template>
  <h2>CE Child</h2>
  <button @click="$emit('addCount')">add</button>
  <!-- 뷰에서 자동으로 생성해주는 글로벌 변수이다 $  -->
  <!-- 프롶스 자식쪽에서 값을 바꿀수없으나 바꾸려면 컴포넌트 이벤트를 해야한다. -->
  <button @click="$emit('multiCount', 2)">multi</button>
  <!-- 파라미터가 있는 컴포넌트 이벤트다 그러면 에밋 프로파티 (호출하굇ㅍ은 컴포넌트명, 전달할 파라미터를 순서대로 작성) -->
</template>
<style scoped>
</style>