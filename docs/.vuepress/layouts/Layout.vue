<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ExampleComponent from "../components/ExampleComponent.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <CustomFooter />
      <ExampleComponent />
    </template>
  </ParentLayout>
</template>
