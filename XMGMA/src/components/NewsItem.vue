<template>
  <div :data-tag="tag" :style="{ '--hover-bg-color': backgroundColor }" >
    <div v-if="isChangeNew" class="advert">
      <input type="file" @change="handleFileUpload">
      <input type="text" v-model="localTitle">
      <input type="date" v-model="localDate">
      <select v-model="localTag">
        <option value="Спорт">Спорт</option>
        <option value="Медицина">Медицина</option>
        <option value="Библиотека">Библиотека</option>
      </select>
      <button @click="saveChanges">Сохранить</button>
      <button @click="cancelEdit">Отмена</button>
    </div>
    <div v-else class="advert">
      <img class="advert__img" :src="imgSrc" alt="">
      <p class="advert__title">{{ title }}</p>
      <div class="row">
        <p class="advert__footer">{{ date }}</p>
        <p class="advert__footer">{{ tag }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    imgSrc: String,
    title: String,
    date: String,
    tag: String,
    backgroundColor: String,
    isChangeNew: Boolean,
  },
  methods: { 
   
  }
}
</script>

<style lang="scss">

.advert {
  aspect-ratio: 260 / 400;
  border-radius: $radius;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  max-width: 260px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: var(--hover-bg-color);

    .advert__title {
      color: $white;
    }

    .advert__footer {
      background-color: $white;
      color: var(--hover-bg-color);
    }
  }

  &__img {
    border-bottom: 10px solid var(--hover-bg-color);
    border-radius: $radius $radius 0 0;
    height: 45%;
    object-fit: cover;
    width: 100%;
  }
  &__title {
    text-align: center;
    color: var(--hover-bg-color);
    font-size: $h3;
    margin: 10px;
    white-space: normal;
    transition: color 0.3s ease;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-radius: $radius;
    padding: 5px 10px;
    background: var(--hover-bg-color);
    color: $white;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  @media (max-width: 600px) {
    .advert { 
      flex: 0 0 auto;
      width: 260px;
      margin-right: 10px;
    }
  }
}
</style>