<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { onBeforeMount, onBeforeUnmount } from "vue";

onBeforeMount(() => {
  document.body.classList.add("rss");
});

onBeforeUnmount(() => {
  document.body.classList.remove("rss");
});
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <rs-header></rs-header>
    </template>

    <template #page-bottom>
      <rs-footer></rs-footer>
    </template>
  </ParentLayout>
</template>

<style scoped>
@import "https://www.real-schesslitz.de/wp-content/plugins/contact-form-7/includes/css/styles.css";
@import "https://www.real-schesslitz.de/wp-content/plugins/user-access-manager/assets/css/uamLoginForm.css";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/bootstrap.min.css?ver=6.4.1";

@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/bootstrap-theme.min.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/fonts/quicksand-font/stylesheet.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/slicknav.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/slider-css.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/slick/slick.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/slick/slick-theme.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/slippry.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/style.css?ver=6.4.1";
@import "https://www.real-schesslitz.de/wp-content/themes/rss-theme/css/rss.css?ver=6.4.1";
</style>
