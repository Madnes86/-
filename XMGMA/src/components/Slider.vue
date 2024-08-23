<template>
  <div class="slider">
    <div class="slider__container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :href="slide.url"
        class="slider__slide"
        @click="remSlide(index)"
      >
        <img 
          :src="slide.image"
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
        @click="goToSlide(index), remSlide(index)"
      ></span>
    </div>
    <div v-if="isEditing" class="slider__container">
      <div class="slider__slide">
        <p>Загрузите картинку:</p>
        <input type="file" @change="fileAddSlider">
      </div>
    </div>
  </div>
</template>

<script>
import slider1 from '@/assets/img/slider-1.png';
import slider2 from '@/assets/img/slider-2.png';
import slider3 from '@/assets/img/slider-1.png';
import { mapGetters } from 'vuex';

export default {
  name: 'Slider',
  computed: {
    ...mapGetters(['isEditing', 'isDeleting']),
  },
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: slider1, url: "#1" },
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
    },
    fileAddSlider(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const imageUrl = e.target.result;
          this.slides.push({
            image: imageUrl,
            url: "#",
          });
        };
        reader.readAsDataURL(file);
      }
    },
    remSlide(index) {
      if (this.isDeleting) {
        this.slides.splice(index, 1);
      }
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
    position: relative;
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%
  }
  & a {
    width: 100%;
    padding: $padding;
    display: flex;
    flex-shrink: 0;
    height: 20vh;
    min-height: 200px;
    transition: transform 0.5s ease-in-out;
  }
  & img {
    border-radius: $radius;
    object-fit: cover;
    height: auto;
    width: 100%;
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