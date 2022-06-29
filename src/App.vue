<template>
   <div class="wrapper">
      <header-block @onMenuLinkClick="onMenuLinkClick"></header-block>
      <main-section class="home-link active-scroll"></main-section>
      <companies-section></companies-section>
      <branding-section class="about-link active-scroll"></branding-section>
      <custom-section></custom-section>
      <testimonials-section class="testimonials-link active-scroll"></testimonials-section>
      <contact-section class="contact-link active-scroll"></contact-section>
      <footer-block></footer-block>
   </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainSection from "@/components/MainSection";
import CompaniesSection from "@/components/CompaniesSection";
import BrandingSection from "@/components/BrandingSection";
import CustomSection from "@/components/CustomSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterBlock from "@/components/FooterBlock";

import { mapGetters, mapActions } from "vuex";

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

      // нахождение индекса активного пункта меню при скролле
      window.addEventListener("scroll", () => {
         let scrollDistance = window.scrollY;
         document.querySelectorAll(".active-scroll").forEach((el, i) => {
            if (el.offsetTop - this.HEADER - 1 <= scrollDistance) {
               this.MAKE_FIND_INDEX(i);
            }
         });
      });
   },
   mounted() {
      this.handleResize();
   },
   unmounted() {
      window.removeEventListener("resize", this.handleResize);
   },
   methods: {
      ...mapActions(["MAKE_RESIZE_WIDTH", "MAKE_RESIZE_HEIGHT", "MAKE_FIND_INDEX"]),

      // измерение ширины и высоты окна (необходимо для адаптива)
      handleResize() {
         this.MAKE_RESIZE_WIDTH();
         this.MAKE_RESIZE_HEIGHT();
      },

      // перелистывание на нужный раздел страницы по клику на пункт меню
      onMenuLinkClick(gotoBlock) {
         const gotoBlockValue = gotoBlock + scrollY - this.HEADER;
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
         });
      },
   },
   computed: {
      ...mapGetters(["HEADER"]),
   },
};
</script>

<style lang="scss">
@import "@/assets/styles/reset";
@import "@/assets/styles/constants.scss";
</style>
