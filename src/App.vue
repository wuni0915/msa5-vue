<script setup>
import DataBinding from './components/DataBinding.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import ListRendering from './components/ListRendering.vue';
import TapUI from './components/TapUI.vue';
import Watchers from './components/Watchers.vue';
import Parent from './components/props/Parent.vue';
import SlotParent from './components/slot/SlotParent.vue';
import CEParent from './components/componentEvent/CEParent.vue';
import LifeCycle from './components/LifeCycle.vue';
import CardList from './components/CardList.vue';
</script>

<template>
  <h1>APP component</h1>
  <!-- <DataBinding></DataBinding> -->
  <!-- <ConditionalRendering></ConditionalRendering>
  <ListRendering></ListRendering>
  <TapUI></TapUI>
  <Watchers></Watchers>
  <Parent></Parent>
  <SlotParent></SlotParent>
  <CEParent></CEParent>
  <LifeCycle></LifeCycle> -->
  <CardList/>
</template>

<style>

</style>
