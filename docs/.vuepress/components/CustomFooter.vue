<template>
  <div class="push"></div>
  <div class="footer center"><a href="https://www.softceed.de" target="_blank">Softceed</a> | {{ year }}</div>
</template>
<script>
const d = new Date()
const currentYear = d.getFullYear()
export default {
  data() {
    return {
      year: currentYear
    }
  }
}
</script>
