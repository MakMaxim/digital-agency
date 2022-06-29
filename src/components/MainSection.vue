<template>
   <section class="main">
      <div class="main__wrapper">
         <div class="main__container _container">
            <div class="main__body">
               <div class="main__info">
                  <h1 class="main__title">Building Digital Products, Brands & Experience</h1>
                  <div class="main__text">
                     Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt
                  </div>
                  <a href="" class="main__button btn" @click.prevent=""> Contact us </a>
               </div>
               <div class="main__image">
                  <img src="@/assets/images/1.png" alt="1" />
               </div>
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

.main {
   margin-top: 120px;
   @media (max-width: $md2 + px) {
      margin-top: 80px;
   }
   @media (max-width: $md3 + px) {
      margin-top: 60px;
   }
   &__wrapper {
      @include adaptiv-value("margin-top", 53, 10, 1);
   }
   &__container {
   }
   &__body {
      display: flex;
      @media (min-width: $md3 + px) {
         justify-content: space-between;
      }
      @media (max-width: $md3 + px) {
         flex-direction: column;
         text-align: center;
         align-items: center;
      }
   }
   &__info {
      flex: 0 0 540 / 1065 * 100%;
   }
   &__title {
      @include adaptiv-value("margin-top", 42, 22, 1);
      margin-bottom: 24px;
   }
   &__text {
      margin-right: 15px;
      font-size: 18px;
      line-height: 155%;
      @include adaptiv-value("margin-bottom", 39, 24, 1);
   }
   &__button {
      margin-bottom: 40px;
      @media (max-width: $md3 + px) {
         margin-bottom: 48px;
      }
   }
   &__image {
      img {
         @include adaptiv-value("width", 450, 358, 1);
         @include adaptiv-value("height", 450, 358, 1);
      }
   }
}
</style>
