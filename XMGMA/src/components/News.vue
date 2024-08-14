<template>
  <div class="news">
    <p class="news__title">Новости</p>
    <div class="news__tags">
      <p>Сортировка по тэгам:</p>
      <div class="tag" v-for="(tagName, index) in tags" :key="index">
        {{ tagName }}
      </div>
    </div>
    <div class="news__box">
      <slot></slot> <!-- Слот для добавления новостных элементов -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'News',
  computed: {
    ...mapGetters(['isEditing']),
  },
  data() {
    return {
      tags: [
        "Спорт",
        "Медицина",
        "Библиотека",
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.news {
  &__title {
    background: #3498db;
    border-radius: 4px;
    color: #fff;
    display: flex;
    font-size: 28px;
    justify-content: center;
    padding: 16px;
    margin: 16px;
    max-width: 1200px;
  }

  &__box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 30px;
    padding: 16px;
    margin: 16px;
    max-width: 1200px;
  }

  &__tags {
    display: flex;
    gap: 10px;
    font-size: 24px;
    padding: 16px;
    margin: 16px;
    max-width: 1200px;
    flex-flow: row wrap;

    .tag {
      padding: 8px 12px;
      background: rgba(13, 239, 13, 0.3);
      border: none;
      border-radius: 4px;
      color: green;
      cursor: pointer;
      transition: background 0.3s, color 0.3s;
      font-size: 14px;
      transition: transform 0.3s ease, opacity 0.3s ease;

      &:hover {
        transform: scale(1.1);
        opacity: 0.7;
      }

      &.active {
        background: #3498db;
        color: #fff;
      }

      &[data-tag="Спорт"] {
        background: rgba(255, 215, 0, 0.3);
        color: #ffd700;

        &.active {
          background: #ffd700;
          color: #fff;
        }
      }

      &[data-tag="Медицина"] {
        background: rgba(31, 145, 255, 0.3);
        color: #1f91ff;

        &.active {
          background: #1f91ff;
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .news__box {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .advert {
    flex: 0 0 auto;
    width: 80%;
    margin-right: 10px;
  }
}
</style>