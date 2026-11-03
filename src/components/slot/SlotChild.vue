<script setup>

</script>
<template>
  <h2>Slot Child</h2>
  <button type="button">
    <slot>기본 버튼</slot>
    <!-- 자식쪽에서 슬롯 태그 안 컨텐츠를 넣으면 부모에서 템플릿 정보를 안보낼 경우 디폴트 값이 된다. -->
  </button>
</template>
<style>
</style>