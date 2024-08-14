<template>
  <div class="main-nav">
    <div class="main-nav__section" v-for="(section, index) in sections" :key="index">
      <img class="section__img" :src="section.imgSrc" alt="">
      <p class="section__title">{{ section.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      sections: [
        { imgSrc: '@/assets/img/main-nav-1.png', title: 'Списки поступающих' },
        { imgSrc: '@/assets/img/main-nav-2.png', title: 'Расписание' },
        { imgSrc: '@/assets/img/main-nav-3.png', title: 'Приемная комиссия' },
        { imgSrc: '@/assets/img/main-nav-4.png', title: 'Списки поступивших' }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

.main-nav {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 30px;
  padding: $padding;
  margin: $margin;
  max-width: $max-wd;

  &__section {
    border: 1px solid $blue;
    border-radius: $radius;
    box-shadow: 6px 6px 0px $blue;
    cursor: pointer;
    padding: 15px;
    height: 200px;
    width: 100%;
    transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      filter: brightness(90%);
      box-shadow: 12px 12px 0px $blue;
      transform: scale(1.1);
    }
  }
  .section__img {
    margin-bottom: 15px;
    height: 50px;
    width: 46px;
  }
  .section__title {
    color: $blue;
    font-size: 20px;
  }
}
</style>