export default {
   BURGER_MENU_OPEN(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
   },
   BURGER_MENU_CLOSE(state) {
      state.isBurgerMenuOpen = false;
      state.isBurgerPush = false;
   },
   BURGER_PUSH(state) {
      state.isBurgerPush = !state.isBurgerPush;
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
};
