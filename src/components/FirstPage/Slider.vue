<template>
  <div style="width: 100%; height: 100%">
    <div
    @click="carouselClick"
      class="sliderParent"
      :style="{
        height: $vuetify.breakpoint.smAndUp ? 320 + 'px' : 180 + 'px',
        width: $vuetify.breakpoint.smAndUp ? 320 + 'px' : 180 + 'px',
      }"
    ></div>
  </div>
</template>


<script>
export default {
  methods: {
    carouselClick() {
      this.$router.push({
        name: 'Menu'
      });
    },
  },
};
</script>

<style>
.sliderParent {
  position: relative;
  top: 0;
  left: 0;
  animation: slider infinite;
  animation-duration: 60s !important;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
}

@keyframes slider {
  0% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }
  4% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0002.jpg);
  }
  7.84% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  11.68% {
    background-color: #160f00;
  }
  15.52% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0004_1.jpg);
  }
  19.36% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  23.2% {
    background-color: #160f00;
  }
  27.04% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0010_1.jpg);
  }
  30.88% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  34.72% {
    background-color: #160f00;
  }
  38.56% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0014_1.jpg);
  }
  42.4% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  46.24% {
    background-color: #160f00;
  }
  50.08% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0016.jpg);
  }
  53.92% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  57.76% {
    background-color: #160f00;
  }
  61.6% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0023_1.jpg);
  }
  65.44% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  69.28% {
    background-color: #160f00;
  }
  73.12% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0028.jpg);
  }
  76.96% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  80.8% {
    background-color: #160f00;
  }
  84.64% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0036.jpg);
  }
  88.48% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }

  92.32% {
    background-color: #160f00;
  }
  96.16% {
    opacity: 1;
    background-image: url(/images/slider/IMG_0059.jpg);
  }
  100% {
    opacity: 0.9;
    background-image: url(/images/slider/black.png);
  }
}
</style>