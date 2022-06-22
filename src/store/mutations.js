export default {
   BURGER_MENU_OPEN(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
};
