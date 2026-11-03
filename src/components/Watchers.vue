<script setup>
import {ref, watch} from 'vue';

const test = ref('');
// 초기값 빈 문자열
//데이터 바운딩 된 객체를 스태이트 라고 한다.
//이 스태이트의 변화를 체크하는 기능 = watchers 인풋의 변화가 아닌 데이터 바운딩 객체를 인지.특정 스태이트의 값을 추적. 값이 변할때마다 내가 실행 하고 싶은 연산처리를 이어간다. 양방향 디바운딩이 가능해서 watchers가 가능한것이다.
const testErrorMsg = ref('');
const testColor = ref('');

watch(test, (val)=>{
  // 파라미터-감시할 대상의 값을 받음
  const pattern = /^[a-zA-Z]+$/; // 리젝스 객체다.
  // const pattern = /[a-zA-Z]+/; 일부만 이 패턴이어도 통과임
  //new키워드는 객체를 인스턴스 하기 위한 키워드입니다.
  if( val === ''){
    testErrorMsg.value = '';
  }else if ( pattern.test(val)){
    testErrorMsg.value = 'O';
    testColor.value = 'color: green;';
  }else {
    testErrorMsg.value = 'X';
    testColor.value = 'color: red;';
  }
});
//입력 값의 유효성 체크 만들기
//자동으로 임포트에 왓치 추가됨. 추가 돼야 사용 가능. 두개의 파라미터 요구(소스[감시하고싶은 스태이트], 콜백함수)
</script>

<template>
  <h2>Watchers: 감시자</h2>
<!-- 인풋의  -->
  <input type="text" v-model="test">
  <p :style="testColor">{{ testErrorMsg }}</p>
</template>

<style>

</style>