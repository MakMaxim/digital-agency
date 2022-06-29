import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
   state: {
      isBurgerMenuOpen: false,
      isBurgerPush: false,
      width: 0,
      height: 0,
      header: 0,
      index: 0,
      menuList: [
         {
            title: "home",
            section: ".home-link",
         },
         {
            title: "about",
            section: ".about-link",
         },
         {
            title: "testimonials",
            section: ".testimonials-link",
         },
         {
            title: "contact",
            section: ".contact-link",
         },
      ],
      testimonials: [
         {
            image: "1.png",
            name: "Andrew Rathore",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
         },
         {
            image: "2.png",
            name: "Vera Duncan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
         },
         {
            image: "3.png",
            name: "Mark Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
         },
      ],
      footerList: [
         {
            title: "Resources",
            list: ["Guides", "Blog", "Cuistomer Stories", "Glossery"],
         },
         {
            title: "Company",
            list: ["About Us", "Careers", "Partners", "Contact Us"],
         },
         {
            title: "Social Media",
            list: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
         },
      ],
   },
   getters,
   mutations,
   actions,
   modules: {},
});
