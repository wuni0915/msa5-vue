<!-- <script setup>
 import {ref} from 'vue';

 const btn1 = ref(false)
 const btn2 = ref(false)
 const btn3 = ref(false)

</script>

<template>
  <h2>TabUI</h2>
  <div class="table">
    <p :class="{'btn-toggle': btn1 === true }" @click="btn1 = !btn1; btn2 = false; btn3 = false;"  class="profile">프로필</p>
    <p :class="{'btn-toggle': btn2 === true }" @click="btn2 = !btn2; btn1 = false; btn3 = false;" class="setting">설정</p>
    <p :class="{'btn-toggle': btn3 === true }" @click="btn3 = !btn3; btn1 = false; btn2 = false;" class="post">게시판</p>
  </div>
  <p v-show="btn1">프로필 페이지 입니다</p>
  <p v-show="btn2">설정 페이지 입니다</p>
  <p v-show="btn3">게시판 페이지 입니다</p>
</template>

<style>
.table {
  /* width: 200px; */
  background-color: aliceblue;
  display: flex;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #d3d3d3;
  overflow: hidden;
}
.table p {
  padding: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
.table .btn-toggle {
  background-color: #fff;
  color: blue;
  border-bottom: 3px solid blue;
  /* border-radius: 10px; */
  padding: 20px 20px 17px 20px;
  
}
/* .table .btn-toggle::after {
  content: '';
  height: 1px;
  background-color: blue;
} */
</style> -->

<script setup>

 import {ref} from 'vue';

 const btns = ref([
   {
   id:1,
   menu: '프로필',
  },
   {
   id:2,
   menu: '설정',
  },
   {
   id:3,
   menu: '게시글',
  },
 ]
);

 const current = ref(1);
</script>

<template>
  <h2>TapUI</h2>
  <!-- 출력 -->
   <div class="menu">
    <div class="btn" v-for="btn in btns" :key="btn.id" @click="current = btn.id" :class="{ 'btn-toggle': current === btn.id }">
      <p>{{ btn.menu }}</p>
    </div>
   </div>
   <p v-if="current === 1"> 프로필 페이지 입니다</p>
   <p v-else-if="current === 2"> 설정 페이지 입니다</p>
   <p v-else-if="current === 3"> 게시글 페이지 입니다</p>
</template>

<style>
.menu {
  display: flex;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: aliceblue;
  box-shadow: 1px 1px 5px #d3d3d3;
}
.btn {
  padding: 20px;
  cursor: pointer;
  color: black;
  font-weight: bold;
}

.btn-toggle {
  background-color: #fff;
  color: blue;
  position: relative;
}
.btn-toggle::after {
  content: '';
  position: absolute;
  height: 3px;
  background-color: blue;
  z-index: 1;
  width: 100%;
  left: 0;
  bottom: 0;

}

</style>