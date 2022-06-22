<template>
   <div class="wrapper">
      <header-block></header-block>
      <main-section></main-section>
      <companies-section></companies-section>
      <branding-section></branding-section>
      <custom-section></custom-section>
      <testimonials-section></testimonials-section>
      <contact-section></contact-section>
      <footer-block></footer-block>
   </div>
</template>

//
<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainSection from "@/components/MainSection";
import CompaniesSection from "@/components/CompaniesSection";
import BrandingSection from "@/components/BrandingSection";
import CustomSection from "@/components/CustomSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterBlock from "@/components/FooterBlock";

import { mapActions } from "vuex";

export default {
   components: {
      HeaderBlock,
      MainSection,
      CompaniesSection,
      BrandingSection,
      CustomSection,
      TestimonialsSection,
      ContactSection,
      FooterBlock,
   },
   created() {
      window.addEventListener("resize", this.handleResize);
   },
   mounted() {
      this.handleResize();
   },
   unmounted() {
      window.removeEventListener("resize", this.handleResize);
   },
   methods: {
      ...mapActions(["MAKE_RESIZE_WIDTH", "MAKE_RESIZE_HEIGHT"]),
      handleResize() {
         this.MAKE_RESIZE_WIDTH();
         this.MAKE_RESIZE_HEIGHT();
      },
   },
};
</script>

<style lang="scss">
@import "@/assets/styles/reset";
@import "@/assets/styles/constants.scss";
</style>
