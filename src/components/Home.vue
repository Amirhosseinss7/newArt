<template>
  <v-container fluid class="home_wrapper">
    <div class="wrap_app">
      <app-news
        :drawerValue="drawerValue"
        @closeSideBar="closeSideBar"
      ></app-news>

      <div class="firstPageWrapper">
        <v-row class="px-3" justify="center" align="center">
          <v-col cols="12" class="d-flex justify-space-between align-center">
            <router-link
              class="iconStyle"
              style="margin-left: -13px"
              :to="`/${$i18n.locale}/menu`"
            >
              <v-img width="45" height="40" src="/images/home/menu.png"></v-img>
            </router-link>
            <span class="iconLable ml-2">Menu</span>
            <v-spacer />
            <span class="iconLable mr-2 mb-1">News</span>
            <span class="iconStyle" style="padding: 1px; margin-right: -12px">
              <v-btn icon @click.stop="drawerValue = !drawerValue" large>
                <v-icon color="#cbc9c9"> mdi-dots-vertical</v-icon>
              </v-btn>
            </span>
          </v-col>
        </v-row>
        <v-row class="sliderWrapperInMobile">
          <v-col cols="12">
            <div class="sliderWrapper mx-auto">
              <router-link
                :to="`/${$i18n.locale}/menu`"
                class="d-none d-sm-block"
              >
                <div class="downMenu d-flex align-center justify-center">
                  <span style="color: rgb(169 165 165 / 54%); font-size: 30px">
                    <i class="fal fa-sort-up"></i>
                  </span>
                  <span
                    style="position: absolute; bottom: 5px"
                    class="iconLable"
                    >Precision</span
                  >
                </div>
                <div class="leftMenu d-flex align-center">
                  <span
                    class="iconLable"
                    style="
                      transform: rotate(-90deg);
                      position: absolute;
                      left: -48px;
                    "
                    >Passion</span
                  >
                  <span
                    style="
                      color: rgb(169 165 165 / 54%);
                      font-size: 30px;
                      transform: rotate(90deg);
                    "
                  >
                    <i class="fal fa-sort-up"></i>
                  </span>
                </div>
                <div class="rightMenu d-flex align-center">
                  <span
                    style="
                      color: rgb(169 165 165 / 54%);
                      font-size: 30px;
                      transform: rotate(90deg);
                    "
                  >
                    <i class="fal fa-sort-down"></i>
                  </span>
                  <span
                    style="
                      transform: rotate(270deg);
                      position: absolute;
                      right: -58px;
                    "
                    class="iconLable"
                    >Perfection</span
                  >
                </div>
                <div class="upMenu d-flex align-center justify-center">
                  <span style="color: rgb(169 165 165 / 54%); font-size: 30px">
                    <i class="fal fa-sort-down"></i>
                  </span>
                  <span class="iconLable" style="position: absolute; top: 5px"
                    >Inspiration</span
                  >
                </div>
              </router-link>
              <div class="circle">
                <span class="bigCircle"></span>
                <span class="smallCircle"></span>
                <span class="smallCircleDotted"></span>
                <span class="sliderCircle">
                  <app-slider></app-slider>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            class="homeFooter d-flex justify-space-between align-center"
            style="margin-top: -10px"
          >
            <div
              class="iconWrapperMenu d-flex justify-space-between align-center"
            >
              <v-img
                width="30"
                height="30"
                src="/images/home/facebook-removebg-preview.png"
              ></v-img>
              <v-img
                width="30"
                height="30"
                src="/images/home/twwiter.png"
              ></v-img>
              <a style="color: #c3c3c3; font-size: 23px" class="mt-1 ml-3">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <v-spacer />
            <!-- <span class="iconLable2">English</span> -->
            

            <app-translate :textColor="textColor"></app-translate>
            <div style="margin-top: -15px">
              <v-img
                width="60"
                height="60"
                src="/images/home/language.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
        <audio autoplay loop>
          <source
            src="/music.mp3"
            type="audio/ogg"
          />
          <source
            src="/music.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </v-container>
</template>
<script>
import News from "./FirstPage/News";
import Slider from "./FirstPage/Slider";
import Translate from "./Translate/translate";
import helperMixin from "@/mixins/helperMixin.js";
export default {
  mixins: [helperMixin],
  components: {
    appNews: News,
    appSlider: Slider,
    appTranslate: Translate,
  },
  data() {
    return {
      textColor: 'white',
      drawerValue: false,
    };
  },
  methods: {
    closeSideBar(value) {
      this.drawerValue = value;
    },
  },
};
</script>

<style scoped>
.wrap_app * {
  font-family: HelveticaNeueCyr !important;
}
.wrap_app {
  border: 1px solid #3b3528;
  width: 98%;
  margin-left: 1%;
  margin-top: 0;
  height: 96vh;
}
.home_wrapper {
  background-color: #160f00;
  height: 100%;
  overflow: hidden;
}
.firstPageWrapper {
  height: 102%;
}
.iconStyle {
  text-decoration: none;
  border: 1px solid #3b3528;
  padding: 3px;
}
.iconLable {
  letter-spacing: 3px;
  font-size: 14px;
  color: white;
  line-height: 1;
}
.iconLable2 {
  font-size: 13px;
  color: white;
  line-height: 1;
}
.sliderWrapper {
  width: 460px !important;
  height: 460px !important;
  position: relative;
  top: calc(50% - 200px);
}
.rotateIcon {
  transform: rotate(90deg);
}
.circle {
  position: relative;
  width: 400px;
  height: 400px;
  top: 32px;
  left: 32px;
}
.bigCircle {
  width: 100%;
  height: 100%;
  border: 1px solid #3b3528;
  position: absolute;
  border-radius: 50%;
}
.smallCircle {
  width: 368px;
  height: 368px;
  border: 1px solid #3b3528;
  position: absolute;
  border-radius: 50%;
  top: 16px;
  left: 16px;
}
.smallCircleDotted {
  width: 330px;
  height: 330px;
  border: 5px dashed #3b3528;
  position: absolute;
  border-radius: 50%;
  top: 35px;
  left: 35px;
}
.sliderCircle {
  width: 320px;
  height: 320px;
  position: absolute;
  top: 40px;
  left: 40px;
  /* text-decoration: none; */
}
.downMenu {
  position: absolute;
  top: 435px;
  left: 220px;
}
.upMenu {
  position: absolute;
  top: -10px;
  left: 220px;
}
.leftMenu {
  position: absolute;
  top: 210px;
  left: 0px;
  display: flex;
  align-items: center;
}
.rightMenu {
  position: absolute;
  top: 210px;
  left: 445px;
}
.homeFooter {
  position: absolute;
  bottom: 7px;
  width: 97%;
}
@media (max-width: 740px) {
  .homeFooter {
    width: 96%;
  }
}
@media (max-width: 600px) {
  .sliderWrapper {
    width: 250px !important;
    height: 250px !important;
    position: static;
  }
  .circle {
    width: 240px;
    height: 240px;
    top: 5px;
    left: 5px;
  }
  .smallCircle {
    width: 210px;
    height: 210px;
    top: 15px;
    left: 15px;
  }
  .smallCircleDotted {
    width: 190px;
    height: 190px;
    top: 25px;
    left: 25px;
  }
  .sliderCircle {
    width: 180px;
    height: 180px;
    top: 30px;
    left: 30px;
  }
  .sliderWrapperInMobile {
    position: relative;
    top: calc(50% - 220px);
  }
  .homeFooter {
    width: 94%;
  }
}
</style>