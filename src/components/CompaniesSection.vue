<template>
   <section class="companies">
      <div class="companies__container _container">
         <div class="companies__text">Trusted By 4,000+ Companies</div>
         <div class="companies__content">
            <div class="companies__logos">
               <div class="companies__logo">
                  <img src="@/assets/images/companies/1.png" alt="" />
               </div>
               <div class="companies__logo">
                  <img src="@/assets/images/companies/2.png" alt="" />
               </div>
               <div class="companies__logo">
                  <img src="@/assets/images/companies/3.png" alt="" />
               </div>
               <div class="companies__logo">
                  <img src="@/assets/images/companies/4.png" alt="" />
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

.companies {
   @include adaptiv-value("margin-top", 157, 30, 1);
   &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   &__text {
      font-family: "Inter Light";
      @include adaptiv-value("font-size", 16, 14, 1);
   }
   &__content {
      margin-top: 16px;
      border-radius: 8px;
      background-color: $darkGrayColor;
   }
   &__logos {
      display: flex;
      padding-top: 19px;
      padding-bottom: 19px;
      @include adaptiv-value("padding-left", 24, 16, 1);
      @include adaptiv-value("padding-right", 24, 16, 1);
   }
   &__logo {
      display: flex;
      &:not(:last-child) {
         @include adaptiv-value("margin-right", 115, 20, 1);
      }
      img {
         max-width: 100%;
      }
   }
}
</style>
