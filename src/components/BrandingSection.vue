<template>
   <section class="branding">
      <div class="branding__container _container">
         <div class="branding__body">
            <div class="branding__image">
               <img src="@/assets/images/2.png" alt="2" />
            </div>
            <div class="branding__info">
               <h2 class="branding__title">Branding & Design System</h2>
               <div class="branding__text">
                  Commonly Used In The Graphic, Print & Publishing Industris For
                  Previewing Visual Layout And Mockups
               </div>
               <a href="" class="branding__arrow" @click.prevent="">
                  <img src="@/assets/images/Arrow.svg" alt="arrow" />
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.branding {
   @include adaptiv-value("margin-top", 136, 35, 1);
   &__container {
   }
   &__body {
      display: flex;
      @media (min-width: $md3 + px) {
         justify-content: space-between;
      }
      @media (max-width: $md3 + px) {
         flex-direction: column-reverse;
         text-align: center;
         align-items: center;
      }
   }
   &__info {
      flex: 0 0 435 / 1065 * 100%;
   }
   &__title {
      @include adaptiv-value("margin-top", 97, 20, 1);
      margin-bottom: 29px;
      @media (max-width: $md3 + px) {
         margin-top: 10px;
      }
   }
   &__text {
      margin-right: 44px;
      font-size: 16px;
      line-height: 175%;
      @include adaptiv-value("margin-bottom", 37, 24, 1);
      @media (max-width: $md3 + px) {
         margin-right: 0;
      }
   }
   &__arrow {
      img {
         @media (max-width: $md3 + px) {
            transform: rotate(90deg);
         }
      }
   }
   &__image {
      img {
         @include adaptiv-value("width", 450, 328, 1);
         @include adaptiv-value("height", 450, 328, 1);
      }
   }
}
</style>
