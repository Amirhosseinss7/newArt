<template>
  <v-container fluid class="home_wrapper">
    <div class="wrap_app">
      <div class="firstPageWrapper">
        <v-row
          class="px-3 smallDesignParent"
          justify="space-between"
          align="start"
          style="height: 100%"
        >
          <v-col
            cols="12"
            md="3"
            class="pl-0 d-flex justify-start flex-column smallDesignMenu"
            :style="{ left: closeMenu ? '-' + 100 + '%' : 0 + 'px' }"
            style="height: 95vh"
          >
            <div class="treeviweWrapper px-5 py-3">
              <div class="d-flex justify-space-between align-center">
                <h2 class="text-h5 text-md-h4">{{ $t("menu") }}</h2>
                <v-spacer />
                <v-btn class="d-block d-md-none" icon @click="closeMenu = true">
                  <v-icon> mdi-close </v-icon>
                </v-btn>
              </div>
              <v-treeview
                class="menuTreeview"
                activatable
                :items="items2"
                :active.sync="isActive"
                open-on-click
                return-object
              ></v-treeview>
            </div>
            <div class="signPic px-14 my-4">
              <v-img src="/images/menu/SH signature.png" class></v-img>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="9"
            class="d-flex justify-end flex-column"
            style="height: 95vh"
          >
            <div class="iconWrapperMenu d-flex align-center justify-end">
              <v-btn class="d-block d-md-none" icon @click="closeMenu = false">
                <v-icon color="rgb(0 0 0 / 76%)"> mdi-menu </v-icon>
              </v-btn>
              <v-spacer />
              <span class="d-flex flex-column align-center">
                <!-- <span class="iconLable" style="color: black">English</span> -->
                <app-translate :textColor="textColor"></app-translate>
              </span>
              <div style="margin-top: -15px">
                <v-img
                  src="/images/menu/lang-menu.png"
                  width="35"
                  height="35"
                ></v-img>
              </div>
            </div>
            <div class="menuContentWrapper">
              <div class="closeMenu">
                <router-link :to="`/${$i18n.locale}`">
                  <div class="iconClose">
                    <span></span>
                    <span></span>
                  </div>
                </router-link>
              </div>
              <div class="menuContentParent">
                <div>
                  <div>
                    <h2 class="mb-5 text-center text-h6 text-md-h4">
                      {{ menuHeader }}
                    </h2>
                  </div>
                  <div
                    class="textAndPic"
                    v-for="(item, i) in menuContent"
                    :key="i"
                  >
                    <div class="imgContent">
                      <zoom-in :thumb="item.src" :full="item.src"></zoom-in>
                    </div>
                    <div class="textContent">
                      <p
                        class="pl-5 px-6 textabout"
                        style="text-align: justify"
                      >
                        <span v-html="item.content"></span>
                        <span v-if="aboutContent">
                          <span>{{ showMore ? " " : item.moreContent }}</span>
                          <br />
                          <p
                            style="
                              display: inline-block;
                              font-size: 11px;
                              text-align: center;
                            "
                            class="mt-3 px-5"
                            @click="showMore = !showMore"
                            >Learn {{ showMore ? "More" : "Less" }}</p
                          >
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="iconWrapperMenu d-flex justify-space-between align-center"
            >
              <div class="imageDownArrow">
                <!-- <v-img src="images/menu/arrows_up.svg"></v-img> -->
                <v-img class="arrowdown" src="/images/menu/arrow.png"></v-img>
              </div>
              <v-spacer></v-spacer>
              <div class="d-flex justify-space-between align-center">
                <v-img
                  width="21"
                  height="25"
                  v-on="on"
                  v-bind="attrs"
                  src="/images/menu/facebook-menu.png"
                ></v-img>
                <v-img
                  width="25"
                  height="25"
                  v-on="on"
                  v-bind="attrs"
                  src="/images/menu/twwiter-menu.png"
                  class="ml-1"
                ></v-img>
                <span
                  style="color: rgb(40, 40, 40); font-size: 23px"
                  class="mt-1 ml-2"
                >
                  <i class="fab fa-instagram"></i>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
import helperMixin from "@/mixins/helperMixin.js";
import Translate from "./Translate/translate";

import ZoomIn from "./secondPage/zoomIn.vue";
export default {
  components: {
    ZoomIn,
    appTranslate: Translate,
  },
  mixins: [helperMixin],
  data() {
    return {
      textColor: 'black',
      closeMenu: true,
      showMore: true,
      aboutContent: true,
      isActive: [],
      menuContent: [
        {
          content:this.$t('AboutContent'),
          // moreContent:
          //   "This means dried parts of natural plants and various forms that it could take on and use to create some really incredible stuff!",
          src: "/images/menu/siavashhouman.jpeg",
        },
      ],

      // menuHeader: "SIAVASH HOUMAN",
    };
  },
  watch: {
    isActive(value) {
      if (value[0].id === 1 || value[0].id == 3) this.aboutContent = true;
      else this.aboutContent = false;

      this.itemContent.forEach((item) => {
        if (item.id === value[0].id) {
          this.menuContent = item.contents;
          this.menuHeader = item.header;
        }
      });

      if (!this.$vuetify.breakpoint.mdAndUp) {
        this.closeMenu = true;
      }
    },
  },
};
</script>

<style scoped>
*{
  font-family:"HelveticaNeueCyr"!important ;
}
.wrap_app {
  border: 1px solid #85848457;
  width: 98%;
  margin-left: 1%;
  margin-top: 2vh;
  height: 93vh;
  font-family: "HelveticaNeueCyr" !important;
}
.home_wrapper {
  /* background-color: rgb(65, 64, 64); */
  min-height: 100vh;
}
.firstPageWrapper {
  height: 102%;
}
.iconLable {
  font-size: 13px;
  color: white;
  line-height: 1;
}
.treeviweWrapper {
  border: 1px solid #85848457;
  height: 80%;
  width: 100%;
  overflow-y: auto;
}
.menuTreeview {
  height: 90%;
}
.signPic {
  height: 15%;
  width: 60%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
}
.rotateIcon {
  transform: rotate(90deg);
}
.iconWrapperMenu {
  height: 10%;
}
.imageDownArrow {
  transform: rotate(180deg);
  margin-left: 25%;
  margin-top: 10px;
  width: 15px;
}
.smallDesignMenu {
  position: static;
}
.menuContentWrapper {
  height: 80%;
  border: 1px solid #85848457;
  width: 80%;
  margin-left: 10%;
  overflow-y: auto;
  position: relative;
}
.menuContentParent {
  height: 67vh;
  margin-top: 5vh;
  font-family: "HelveticaNeueCyr" !important;
}

.closeMenu {
  position: fixed;
  height: 5vh;
  width: 54%;
  z-index: 8;
  background: white;
  overflow: hidden;
}
.closeMenu > a {
  /* padding: 3px; */
  background-color: gray;
  text-decoration: none;
  display: inline-block;
  height: 100%;
}
.iconClose {
  width: 32px;
  height: 100%;
  position: relative;
}
.iconClose > span {
  display: inline-block;
  width: 100%;
  height: 1px;
  background: white;
  position: absolute;
}
.iconClose > span:first-child {
  transform: rotate(45deg);
  top: 45%;
  left: 0;
}
.iconClose > span:last-child {
  transform: rotate(135deg);
  top: 45%;
  right: 0%;
}
.textAndPic {
  width: 100%;
  height: 58vh;
  padding: 10px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.imgContent {
  width: 35%;
  height: 80%;
  /* margin-top: 19%; */
  position: relative;
}
.images {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  bottom: -10px;
}
.textContent {
  width: 55%;
  height: 100%;
  font-size: 15px;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.arrowdown {
  width: 100%;
  height: 55px;
}
.textabout {
  font-size: 13px;
  width: 79% !important;
}
@media (max-width: 960px) {
  .smallDesignParent {
    position: relative;
  }
  .smallDesignMenu {
    height: 95vh;
    z-index: 20;
    position: absolute;
    top: 0;
    background: white;
    transition: 1s;
  }
  .treeviweWrapper {
    border: none;
  }
  .menuContentWrapper {
    width: 96%;
    margin-left: 2%;
  }
  .closeMenu {
    width: 86%;
  }
  .signPic {
    width: 0;
  }
}
@media (max-width: 600px) {
  .textAndPic {
    height: auto;
    min-height: 50vh;
  }
  .imgContent {
    width: 100%;
    min-height: 35vh;
    margin-bottom: 16px;
  }
  .textContent {
    width: 100%;
  }
  .textContent > p {
    padding-left: 0 !important;
  }
  .images {
    top: 0;
    bottom: 0;
  }
  .closeMenu {
    width: 76%;
  }
  .signPic {
    width: 0;
  }
}
</style>