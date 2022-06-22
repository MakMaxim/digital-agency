<template>
   <section class="contact">
      <div class="contact__container _container">
         <div class="contact__body">
            <div class="contact__image">
               <img src="@/assets/images/4.png" alt="4" />
            </div>
            <div class="contact__info">
               <h2 class="contact__title">Be a part of the next big thing</h2>
               <div class="contact__text">
                  We work with Brans, Startups, to SMEs. Colaborate for more
                  impact and growt
               </div>
               <a href="" class="contact__button btn" @click.prevent="">
                  Contact us
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

.contact {
   @include adaptiv-value("margin-top", 139, 35, 1);
   &__container {
   }
   &__body {
      display: flex;
      background-color: $darkGrayColor;
      border-radius: 20px;
   }
   &__info {
      flex: 0 0 361 / 1065 * 100%;
      @media (max-width: $md3 + px) {
         flex: 0 0 100%;
         padding: 0 30px;
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
      }
   }
   &__title {
      @include adaptiv-value("margin-top", 100, 25, 1);
      @include adaptiv-value("margin-bottom", 26, 32, 1);
   }
   &__text {
      margin-right: 15px;
      line-height: 155%;
      @include adaptiv-value("margin-bottom", 32, 48, 1);
   }
   &__button {
      margin-bottom: 40px;
      @media (max-width: $md3 + px) {
         margin-bottom: 48px;
      }
   }
   &__image {
      @include adaptiv-value("margin-left", 75, 0, 1);
      @include adaptiv-value("margin-right", 90, 0, 1);
      @media (max-width: $md3 + px) {
         display: none;
      }
      img {
         @include adaptiv-value("width", 450, 150, 1);
         @include adaptiv-value("height", 450, 150, 1);
      }
   }
}
</style>
