<template>
   <div class="header">
      <div class="header__wrapper">
         <div class="header__container _container">
            <div class="header__body">
               <a href="" class="header__logo">Digital Agency</a>
               <burger-menu />
               <transition name="fade">
                  <div class="header__menu menu" v-if="WIDTH > 767.98 || ISBURGERMENUOPEN">
                     <nav class="menu__body">
                        <ul class="menu__list" v-for="(item, i) in MENULIST" :key="i">
                           <li class="menu__item">
                              <a
                                 :data-goto="item.section"
                                 href="#"
                                 class="menu__link"
                                 @click.prevent="onMenuLinkClick"
                              >
                                 {{ item.title }}
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </transition>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
import { mapGetters, mapActions } from "vuex";

export default {
   name: "HeaderBlock",
   components: {
      BurgerMenu,
   },
   created() {
      window.addEventListener("scroll", this.headerWeight);
      window.addEventListener("scroll", this.menuItemActive);
   },
   methods: {
      ...mapActions(["MAKE_BURGER_MENU_CLOSE", "MAKE_RESIZE_HEADER"]),
      // измерение высоты хедера
      headerWeight() {
         let header = document.querySelector(".header__body").offsetHeight;
         this.MAKE_RESIZE_HEADER(header);
      },

      // вызов в родительском компоненте функции перелистывания на нужный раздел страницы по клику на пункт меню
      onMenuLinkClick(e) {
         this.MAKE_BURGER_MENU_CLOSE();
         const menuLink = e.target;
         let gotoBlock = document.querySelector(menuLink.dataset.goto).getBoundingClientRect().top;
         this.$emit("onMenuLinkClick", gotoBlock);
      },

      // выделение пункта меню при выборе и скролле
      menuItemActive() {
         document.querySelectorAll(".menu__body a").forEach((el) => {
            if (el.classList.contains("_active")) {
               el.classList.remove("_active");
            }
         });
         document.querySelectorAll(".menu__body li")[this.INDEX].querySelector("a").classList.add("_active");
      },
   },
   computed: {
      ...mapGetters(["WIDTH", "HEIGHT", "ISBURGERMENUOPEN", "MENULIST", "HEADER", "INDEX"]),
   },
   mounted() {
      this.headerWeight();
   },
   unmounted() {
      window.removeEventListener("scroll", this.headerWeight);
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.header {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   &__wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 50;
      background-color: $grayColor;
   }
   &__container {
      position: relative;
   }
   &__body {
      display: flex;
      align-items: center;
      min-height: 120px;
      position: relative;
      justify-content: space-between;
      @media (max-width: $md2 + px) {
         min-height: 80px;
      }
      @media (max-width: $md3 + px) {
         min-height: 60px;
      }
   }
   &__logo {
      position: relative;
      z-index: 5;
      line-height: 121%;
      @include adaptiv-value("font-size", 20, 14, 1);
      font-family: "Inter Bold";
      text-transform: uppercase;
      &:hover {
         color: $darkBlueColor;
      }
   }
   &__menu {
   }
}

.menu {
   flex: 0 1 394px;
   @media (max-width: $md3 + px) {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      background-color: #dbe5f1;
      padding: 70px 15px 30px 15px;
      &:before {
         content: "";
         position: fixed;
         width: 100%;
         height: 65px;
         top: 0;
         left: 0;
         z-index: 60;
         background-color: $grayColor;
      }
   }
   &__body {
      display: flex;
      justify-content: space-between;
      @media (min-width: $md3+px) {
         flex-wrap: wrap;
         list-style-type: none;
      }
      @media (max-width: $md3 + px) {
         flex-direction: column;
      }
   }
   &__list {
   }
   &__item {
      font-size: 18px;
      line-height: 121%;
      @media (max-width: $md3 + px) {
         padding: 5px 0;
      }
   }
   &__link {
      &:hover {
         text-decoration: underline;
      }
      &._active {
         color: $darkBlueColor;
      }
   }
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
