<template>
   <article class="testimonials__item testimonial">
      <div class="testimonial__content">
         <div href="#" class="testimonial__image">
            <img :src="require('@/assets/images/Testimonials/' + testimonial_item.image)" alt="image" />
         </div>
         <h3 class="testimonial__name">{{ testimonial_item.name }}</h3>
         <div class="testimonial__text">{{ testimonial_item.text }}</div>
      </div>
   </article>
</template>

<script>
export default {
   name: "TestimonialsItem",
   props: {
      testimonial_item: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.testimonial {
   background-color: $darkGrayColor;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   &__content {
      padding: 32px;
   }
   &__image {
      margin-bottom: 8px;
      img {
         border: 1px #eae9e8 solid;
         border-radius: 50%;
         width: 130px;
         height: 130px;
      }
   }
   &__name {
      font-size: 18px;
      line-height: 155%;
      text-transform: capitalize;
      margin-bottom: 27px;
   }
   &__text {
      font-family: "Inter Light";
      text-transform: capitalize;
      font-size: 14px;
      line-height: 130%;
   }
}
</style>
