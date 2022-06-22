<template>
   <div
      class="burgerMenu"
      @click="(isBurgerPush = !isBurgerPush), burgerMenuOpen()"
      :class="{ burgerMenu_active: isBurgerPush }"
   >
      <span></span>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
      return {
         isBurgerPush: false,
      };
   },
   computed: {
      ...mapGetters(["ISBURGERMENUOPEN"]),
   },
   methods: {
      ...mapActions(["MAKE_BURGER_MENU_OPEN"]),
      burgerMenuOpen() {
         this.MAKE_BURGER_MENU_OPEN();
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.burgerMenu {
   @media (max-width: $md3+px) {
      position: relative;
      z-index: 5;
      display: block;
      width: 24px;
      height: 24px;
      cursor: pointer;
      span,
      &:after,
      &:before {
         left: 0;
         position: absolute;
         height: 10%;
         width: 100%;
         transition: all 0.3s ease 0s;
         background-color: #272d38;
      }
      &:after,
      &:before {
         content: "";
      }
      &:before {
         top: 0;
      }
      &:after {
         bottom: 0;
      }
      span {
         top: 50%;
         transform: scale(1) translate(0px, -50%);
      }
      &_active {
         span {
            transform: scale(0) translate(0px, -50%);
         }
         &:before {
            top: 50%;
            transform: rotate(-45deg) translate(0px, -50%);
         }
         &:after {
            bottom: 50%;
            transform: rotate(45deg) translate(0px, 50%);
         }
      }
   }
}
</style>
