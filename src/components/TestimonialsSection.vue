<template>
   <section class="testimonials">
      <div class="testimonials__container _container">
         <div class="testimonials__text">TESTIMONIALS</div>
         <h2 class="testimonials__title">Read What Other Have To Say</h2>
         <div class="testimonials__items">
            <testimonials-item
               v-for="(testimonial, i) in TESTIMONIALS"
               :key="i"
               :testimonial_item="testimonial"
            />
         </div>
      </div>
   </section>
</template>

<script>
import TestimonialsItem from "@/components/TestimonialsItem.vue";
import { mapGetters } from "vuex";

export default {
   name: "HeaderBlock",
   components: {
      TestimonialsItem,
   },
   computed: {
      ...mapGetters(["TESTIMONIALS"]),
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.testimonials {
   @include adaptiv-value("margin-top", 136, 30, 1);
   &__container {
   }
   &__text {
      line-height: 175%;
      text-align: center;
      margin-bottom: 10px;
   }
   &__title {
      max-width: 425px;
      margin: 0 auto;
      text-align: center;
   }
   &__items {
      @include adaptiv-value("margin-top", 46, 16, 1);
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
      @media (max-width: $md4 + px) {
         grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      }
   }
}
</style>
