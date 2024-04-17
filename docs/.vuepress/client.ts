import { defineClientConfig } from "@vuepress/client";
import Layout from "./layouts/Layout.vue";
import LayoutRS from "./layouts/LayoutRS.vue";

export default defineClientConfig({
  layouts: {
    Layout,
    LayoutRS,
  },
});
