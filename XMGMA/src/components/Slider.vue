<template>
  <div class="slider">
    <div class="slider__container">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :href="slide.url"
        class="slider__slide"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <img 
          :src="slides"
          :alt="'Slide ' + (index + 1)" 
        />
      </a>
    </div>
    <div class="slider__dots">
      <span 
        class="slider__dot" 
        :class="{ 'slider__dot--active': currentIndex === index }"
        v-for="(dot, index) in slides"
        :key="index"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import slider1 from '../assets/img/slider-1.png';
import slider2 from '@/assets/img/slider-2.png';
import slider3 from '@/assets/img/slider-1.png';

export default {
  name: 'Slider',
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: '../assets/img/slider-1.png', url: "#1" },
        { image: slider2, url: "#2" },
        { image: slider3, url: "#3" }
      ],
      slideInterval: null,
    };
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
      this.resetInterval();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    resetInterval() {
      clearInterval(this.slideInterval);
      this.startSlideInterval();
    },
    startSlideInterval() {
      this.slideInterval = setInterval(this.nextSlide, 7000);
    }
  },
  mounted() {
    this.startSlideInterval();
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  }
}
</script>

<style lang="scss" scoped>

.slider {
  margin: $margin;
  max-width: $max-wd;
  overflow: hidden;

  &__container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 300%
  }
  & a {
    width: 100%;
    padding: $padding;
    display: flex;
    height: 20vh;
    min-height: 200px;
    transition: transform 0.5s ease-in-out;
  }
  & img {
    border-radius: $radius;
    object-fit: cover;
    height: auto;
    min-width: 100%;
    transition: opacity 0.5s ease-in-out;
  }
  &__dots {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
    gap: 5px;
  }
  &__dot {
    width: 12px;
    height: 12px;
    background: $blue-30;
    border-radius: 50%;
    cursor: pointer;
  }
}
@media (max-width: 600px) {
  .slider {
    &__slides {
      height: 75vh;
    }
    &__dots {
      margin-top: 30px;
    }
    &__slide img:nth-of-type(1) {
      display: none;
    }
  
    &__slide img:nth-of-type(2) {
      height: 75vh;
      display: block;
    }
  }
}
</style>