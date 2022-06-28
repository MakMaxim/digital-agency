export default {
   MAKE_BURGER_MENU_OPEN({ commit }) {
      commit("BURGER_MENU_OPEN");
   },
   MAKE_BURGER_MENU_CLOSE({ commit }) {
      commit("BURGER_MENU_CLOSE");
   },
   MAKE_BURGER_PUSH({ commit }) {
      commit("BURGER_PUSH");
   },
   MAKE_RESIZE_WIDTH({ commit }) {
      commit("RESIZE_WIDTH");
   },
   MAKE_RESIZE_HEIGHT({ commit }) {
      commit("RESIZE_HEIGHT");
   },
};
