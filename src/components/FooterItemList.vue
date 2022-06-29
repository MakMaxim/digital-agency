<template>
   <div class="menu__column">
      <div class="menu__title footer__title title">
         <div>{{ menu_item.title }}</div>
         <button class="menu__btn" :class="{ menu__btnrotate: isRotate }" v-if="WIDTH < 479.98">
            <img
               src="@/assets/images/Arrow-down.svg"
               alt="Arrow-down"
               @click="(isRotate = !isRotate), (isMenuListOpen = !isMenuListOpen)"
            />
         </button>
      </div>
      <transition-group name="list">
         <ul class="menu__list" v-if="WIDTH > 479.98 || isMenuListOpen">
            <li class="menu__item" v-for="(elem, i) in menu_item.list" :key="i">
               <a href="#" class="menu__link">
                  {{ elem }}
               </a>
            </li>
         </ul>
      </transition-group>
   </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   name: "FooterItemList",
   props: {
      menu_item: {
         type: Object,
         required: true,
      },
   },
   data() {
      return {
         isMenuListOpen: false,
         isRotate: false,
      };
   },
   methods: {},
   computed: {
      ...mapGetters(["WIDTH", "HEIGHT"]),
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.menu {
   &__column {
      &:not(:last-child) {
         @include adaptiv-value("margin-right", 178, 0, 0);
         @media (max-width: $md4 + px) {
            margin-right: 0;
         }
      }
   }
   &__title {
      font-family: "Inter Bold";
      font-size: 18px;
      line-height: 155%;
      @include adaptiv-value("margin-bottom", 34, 12, 0);
      display: flex;
   }
   &__list {
      @media (max-width: $md4 + px) {
         margin-bottom: 15px;
      }
   }
   &__btn {
      transition: all 0.4s ease 0s;
   }
   &__btnrotate {
      transition: all 0.4s ease 0s;
      transform: rotate(180deg);
   }
   &__item {
      &:not(:last-child) {
         @include adaptiv-value("margin-bottom", 24, 10, 0);
      }
   }
   &__link {
      font-family: "Inter Light";
      color: $mainColor;
      transition: 0.3s;
      &:hover {
         color: $darkBlueColor;
      }
   }
}

.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateY(30px);
}
</style>
