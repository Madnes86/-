<template>
  <div class="news">
    <p class="news__title">Новости</p>
    <div class="news__tags">
      <p>Сортировка по тэгам:</p>
      <div 
        class="tag" 
        :class="{active: activeTag.includes(index)}"
        v-for="(tag, index) in tags" 
        :key="index" 
        :style="{ background: activeTag.includes(index) ? tag.color : tag.background, color: activeTag.includes(index) ? '#fff' : tag.color }" 
        @click="setActiveTag(index), remTag(index)">
        {{ tag.tag }}
      </div>
      <div v-if="isAddNew">
        <input type="file">
      </div>
      <input type="text" v-if="isEditing" class="tag" placeholder="Название тэга" v-model="newTag.tag">
      <input type="color" v-if="isEditing" class="tag" v-model="newTag.color" title="Цвет текста">
      <input type="color" v-if="isEditing" class="tag" v-model="newTag.background" title="Цвет фона">
      <button @click="addTag" class="tag">Добавить</button>
    </div>
    
    <div class="news__box">
      <NewsItem
        v-for="(newsItem, index) in filteredNews"
        :key="index"
        :imgSrc="newsItem.imgSrc"
        :title="newsItem.title"
        :date="newsItem.date"
        :tag="newsItem.tag"
        :backgroundColor="getTagColor(newsItem.tag)"
        :isChangeNew="isChangeNew"
        @click="remNew(index)"
      />
      <div v-if="isEditing" class="advert">
        <input type="file" @change="handleFileUpload" class="advert__img">
        <input type="text" v-model="newItem.title" class="advert__title" placeholder="Заголовок">
        <div class="advert__footer">
          <input type="date" v-model="newItem.date" class="advert__date">
          <select name="tag" v-model="newItem.tag" id="tag" class="advert__tag">
            <option value="Спорт">Спорт</option>
            <option value="Медицина">Медицина</option>
            <option value="Библиотека">Библиотека</option>
          </select>
        </div>
        <button @click="addNew">Создать</button>
      </div>
        <!-- <img src="@/assets/img/add.png" alt="Удалить" class="editing"  @click="switchDelNew"> -->
        <!-- <img src="@/assets/img/red.png" alt="Редактировать" class="editing" @click="switchChangeNew"> -->
        <!-- <img src="@/assets/img/add.png" alt="Добавить" class="editing" @click="switchAddNew"> -->
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'News',
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters(['isEditing', 'isDeleting']),
    filteredNews() {
      if (this.activeTag.length === 0) {
        return this.newsItems;
      }
      return this.newsItems.filter(item => this.tags.some((tag, index) => this.activeTag.includes(index) && tag.tag === item.tag));
    }
  },
  
  data() {
    return {
      tags: [
        { tag: "Спорт", color: "#FFD700", background: "rgba(255, 215, 0, 0.3)" },
        { tag: "Медицина", color: "#1F91FF", background: "rgba(31, 145, 255, 0.3)" },
        { tag: "Библиотека", color: "#0DEF0D", background: "rgba(13, 239, 13, 0.3)" },
      ],
      newsItems: [
        { imgSrc: './src/assets/img/news.png', title: 'Спортцмены ХМГМА занили первое место', date: '2024-08-10', tag: 'Спорт' },
        { imgSrc: './src/assets/img/news.png', title: 'Конкурс поступления!', date: '2024-08-11', tag: 'Медицина' },
        { imgSrc: './src/assets/img/news.png', title: 'Новая медицинская литиратура', date: '2024-08-12', tag: 'Библиотека' },
      ],
      newItem: {
        imgSrc: '',
        title: '',
        date: '',
        tag: ''
      },
        newTag: {
        tag: '',
        color: '#000000',
        background: '#FFFFFF'
      },
      activeTag: [],
      isAddTag: false,
      isDelNew: false,
      isAddNew: false,
      isChangeNew: false,
    }
  },
  methods: {
    setActiveTag(index) {
      const tagIndex = this.activeTag.indexOf(index);
      if (tagIndex !== -1) {
        this.activeTag.splice(tagIndex, 1);
      } else 
      this.activeTag.push(index);
    },
    getTagColor(tag) {
      const foundTag = this.tags.find(t => t.tag === tag);
      return foundTag ? foundTag.color : '#FFF';  // возвращаем цвет тега или белый цвет по умолчанию
    },
    remTag(index) {
      if (this.isDeleting) {
        this.tags.splice(index, 1);
      }
    },
    addTag() {
      if (this.newTag.tag && this.newTag.color && this.newTag.background) {
        this.tags.push({ ...this.newTag });
        this.newTag = {
          tag: '',
          color: '#000000',
          background: '#FFFFFF'
        };
      } else {
        alert('Пожалуйста, заполните все поля для создания нового тега.');
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newItem.imgSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    switchDelNew() {
      this.isDelNew = !this.isDelNew;
    },
    remNew(index) {
      if (this.isDeleting) {
        this.newsItems.splice(index, 1);
      }
    },
    switchChangeNew() {
      this.isChangeNew = !this.isChangeNew;
    },
    addNew() {
      if (this.newItem.title && this.newItem.date && this.newItem.tag && this.newItem.imgSrc) {
        this.newsItems.push({ ...this.newItem});
        this.newItem = {
          imgSrc: '',
          title: '',
          date: '',
          tag: ''
        };
      }
      else alert("Заполните все формы"); 
    },
    setActiveTag(index) {
      const tagIndex = this.activeTag.indexOf(index);
      if (tagIndex !== -1) {
        this.activeTag.splice(tagIndex, 1);
      } else {
        this.activeTag.push(index);
      }
    },
  }
}
</script>

<style lang="scss">
.editing { 
  background: #00000058;
  border-radius: $radius;
  margin: 0 5px;
  width: 25px;
  &:hover {
    background: red;
  }
}
// .editing {
//   display: flex;
//   flex-direction: row; // по умолчанию горизонтальное расположение

//   @media (max-aspect-ratio: 1/1) {
//     flex-direction: column; // вертикальное расположение, если высота больше ширины
//   }
// }
// .editing button { 
//   background: $grey;
//   border: none;
//   border-radius: none;
//   font-size: 100%;
//   height: 100%;
//   color: $white;
//   width: 100%;
  
// }

.news {
  &__title {
    background: $blue;
    border-radius: $radius;
    color: $white;
    display: flex;
    font-size: $h1;
    justify-content: center;
    padding: $padding;
    margin: $margin;
    max-width: $max-wd;
  }

  &__box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 30px;
    padding: $padding;
    margin: $margin;
    max-width: $max-wd;
  }

  &__tags {
    align-items: center;
    display: flex;
    gap: 10px;
    font-size: $h2;
    padding: $padding;
    margin: $margin;
    max-width: $max-wd;
    flex-flow: row wrap;

    .tag {
      display: flex;
      padding: 4px 10px;
      position: relative;
      background: $blue-30;
      border: none;
      border-radius: $radius;
      color: $blue;
      cursor: pointer;
      overflow: hidden;
      transition: background 0.3s, color 0.3s;
      font-size: $h6;
      transition: transform 0.3s ease, opacity 0.3s ease;

      @include hover;
    }
  }
  @media (max-width: 600px) {
    .news__box {
      display: flex;
      flex-direction: row;
      padding: 30px;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
    }
  }
}
</style>