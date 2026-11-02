<script setup>
// 뷰가 3버전 컴포지션 어쩌고를 쓸 때 꼭 셋업을 써야 사용이 가능하다.
import { ref } from 'vue';


const count = ref(0);
// 데이터 바운딩은 ref를 쓰면 된다.
//뷰에서 뭔가를 조작하고싶으면 데이터 디바운딩? 하면 된다.
const email = ref('');
const bgColor = ref('')
const toggleBgcolor = ()=>{
  if(bgColor.value === '') {
    // 레프 객체가 들어가있다. 레프객체에 접근하고싶으면 .value로 접근해야한다. 레프 객체의 특징이다. 템플릿 영역에서는 해당 변수명만 적어도 접근이 된다.
    bgColor.value = "bg-red";
  }else{
    bgColor.value = '';
    
  }
}

</script>

<template>
<!-- 버츄얼 돔알기, 브라우저 환경이 아니기때문에 돔 생성을 안함 -->
 <!-- 데이터 바인딩 읽기 -->
  <!-- 로컬호스트와 로컬호스트 5174는 다르다... 80포트와 내장서버 어쩌고...-->
<!-- 태그명 다 같음/ 속성명은 특수하게 해줘야됨/  -->
 <div @click="count++" class="btn-cnt" :class="bgColor">Count is {{ count }}</div>
 //:class="bgColor - 디렉티브 프로퍼티라고 한다. 스타일을 동적으로 만들고싶으면 디렉티브 속성을 이용하면 된다.
 <button @click="count=0">Count Reset</button>
 <!-- <div @click이벤트="콜백함수" class="btn-cnt">Count is {{ count }}</div> -->
 <!-- 저장 안해도 자동으로 반영됨 -->
  <!-- 왜 화면이 하얘지냐? 화면을 만드는 -->
  <button @click="count--" class="down-btn">Count Down</button>
  <button @click="bgColor = 'bg-red'">Red</button>
  <button @click="bgColor = '' ">cadetblue</button>
  <!-- 쌍따옴표, 홑따옴표구분, 오인식 하지않게끔 구분 하는것. 홑따옴표로도 문자를 인식함. -->
   <!-- <button @click="bgColor()">Toggle</button> -->
   <button @click="toggleBgcolor()">Toggle</button>
   <!-- 토글했을때만 실행하는게 가능하다. -->

    <!-- 양방향 데이터 바운딩. 스크립트, 템플릿 둘 어느쪽에서든 값이 바뀌면 반대에도 적용된다. -->
     <br><br>
     <!-- <input type="text" name="email" id="email" :value="email">{{ email }} -->
     <!-- 단방향 데이터 바운딩, 자바에서 변경시 ui로 변경 되는것. -->
     <input type="text" name="email" id="email" v-model="email">{{ email }}
     <!-- //v-model -->
</template>

<style>
.btn-cnt {
  width: 100px;
  height: 100px;
  background-color: cadetblue;
}
.bg-red {
  background-color: #ff0000;
}
/* 밑에 있는게 덮어써버리기떄문에 안된다. 캐스캐이딩 */
</style>
