<template>
  <div class="advert" :data-tag="tag">
    <img class="advert__img" :src="imgSrc" alt="">
    <p class="advert__title">{{ title }}</p>
    <div class="row">
      <p class="advert__footer">{{ date }}</p>
      <p class="advert__footer">{{ tag }}</p>
    </div>
  </div>
  <div>edqe</div>
</template>

<script>
export default {
  name: 'NewsItem',
  data() {
    return {
      title: "good day",
    }
  },
  props: {
    imgSrc: String,
    title: String,
    date: String,
    tag: String
  }
}
</script>

<style lang="scss" scoped>

.advert {
  border-radius: $radius;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);

    .advert__title {
      color: $white;
    }

    .advert__footer {
      background-color: $white;
      color: $blue;
    }
  }

  &__img {
    border-radius: $radius $radius 0 0;
    height: 45%;
    object-fit: cover;
    width: 100%;
    transition: opacity 0.3s ease;
  }

  &__title {
    text-align: center;
    color: $blue;
    font-size: 24px;
    margin: 10px;
    transition: color 0.3s ease;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-radius: $radius;
    padding: 5px 10px;
    background: $blue;
    color: $white;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  &[data-tag="Библиотека"] .advert__img {
    border-bottom: 10px solid $green;
  }

  &[data-tag="Спорт"] .advert__img {
    border-bottom: 10px solid $yellow;
  }

  &[data-tag="Медицина"] .advert__img {
    border-bottom: 10px solid $blue;
  }
}
</style>