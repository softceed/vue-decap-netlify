<template>
  <button @click="increment">ExampleComponent clicked {{ count }} times</button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const increment = function () {
  count.value += 1;
};
</script>
