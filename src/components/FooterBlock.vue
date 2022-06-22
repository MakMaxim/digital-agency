<template>
   <footer class="footer">
      <div class="footer__container _container">
         <div class="footer__body">
            <div class="footer__main">
               <a href="#" class="footer__logo"> Digital Agency </a>
               <div class="footer__text">
                  Building digital products, brands & experience
               </div>
            </div>
            <div class="footer__menu menu">
               <footer-item-list
                  v-for="(item, i) in FOOTERLIST"
                  :key="i"
                  :menu_item="item"
               />
            </div>
         </div>
         <div class="footer__matheus">
            © Matheus. Todos os direitos reservados
         </div>
      </div>
   </footer>
</template>

<script>
import FooterItemList from "@/components/FooterItemList";
import { mapGetters } from "vuex";

export default {
   name: "FooterBlock",
   components: {
      FooterItemList,
   },
   computed: {
      ...mapGetters(["FOOTERLIST"]),
   },
};
</script>
FooterItemList

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.footer {
   background-color: $darkGrayColor;
   @include adaptiv-value("margin-top", 138, 35, 1);
   &__container {
   }
   &__body {
      display: grid;
      grid-template-columns: 210px 1fr;
      @include adaptiv-value("column-gap", 179, 30, 0);
      @include adaptiv-value("padding-top", 122, 20, 0);
      @include adaptiv-value("margin-bottom", 114, 10, 1);
      @media (max-width: $md1 + px) {
         grid-template-columns: 1fr;
      }
   }
   &__main {
      @media (max-width: $md1 + px) {
         grid-column: span 2;
         @include adaptiv-value("margin-bottom", 40, 18, 1);
      }
   }
   &__logo {
      display: block;
      font-family: "Inter Bold";
      font-size: 18px;
      line-height: 155%;
      @include adaptiv-value("margin-bottom", 36, 12, 1);
      &:hover {
         color: $darkBlueColor;
      }
   }
   &__text {
      font-family: "Inter Light";
      line-height: 150%;
   }
   &__menu {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
      @media (max-width: $md4 + px) {
         flex-direction: column;
      }
   }
   &__matheus {
      font-family: "Inter Light";
      padding-bottom: 16px;
      text-align: center;
   }
}
</style>
