<template>
  <div style="height: 100%;">
    <w-header></w-header>
    <w-mian></w-mian>
    <w-footer></w-footer>
  </div>
</template>

<script>
import Header from "@/views/layout/header.vue";
import Footer from "@/views/layout/footer.vue";
import Main from "@/views/layout/main.vue";
export default {
  name: "layout",
  components: {
    "w-header": Header,
    "w-footer": Footer,
    "w-mian": Main,
  },
};
</script>
