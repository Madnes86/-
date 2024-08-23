<template>
  <div class="main-nav">
    <a 
      class="main-nav__section" 
      v-for="(section, index) in sections" 
      :key="index" @click="remNav(index)" 
      :href="section.url">
      <img class="section__img" :src="section.imgSrc" alt="">
      <p class="section__title">{{ section.title }}</p>
    </a>
    <div class="main-nav__section no-hover" v-if="isEditing">
      <input type="file" class="section__img" @change="fileAddNav">
      <input type="text" class="section__title" placeholder="Заголовок раздела" v-model="sectionNav.title">
      <input type="URL" placeholder="URL" v-model="sectionNav.url">
      <button @click="addNav">Создать</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  name: 'MainNav',
  computed: {
    ...mapGetters(['isEditing', 'isDeleting'])
  },
  data() {
    return {
      sections: [
        { imgSrc: new URL('@/assets/img/accept-2.png', import.meta.url).href, title: 'Списки поступающих', url: 'https://icons8.ru'},
        { imgSrc: new URL('@/assets/img/chedule.png', import.meta.url).href, title: 'Расписание', url: '#' },
        { imgSrc: new URL('@/assets/img/diplom.png', import.meta.url).href, title: 'Приемная комиссия', url: '#' },
        { imgSrc: new URL('@/assets/img/accept.png', import.meta.url).href, title: 'Списки поступивших', url: '#' }
      ],
      sectionNav: {
          imgSrc: '',
          title: '',
          url: ''
        }
    };
  },
  methods: {
    remNav(index) {
      if (this.isDeleting) {
        this.sections.splice(index, 1);
      }
    },
    fileAddNav(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.sectionNav.imgSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addNav() {
      if (this.sectionNav.imgSrc && this.sectionNav.title && this.sectionNav.url) {
        this.sections.push({ ...this.sectionNav });
        this.sectionNav = {
          imgSrc: '',
          title: '',
          url: ''
        }
      } else alert('Заплните все поля!')
    }
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
    text-decoration: none;
    height: 200px;
    width: 100%;
    transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover:not(div) {
      box-shadow: 12px 12px 0px;
      background-color: $pink;
      @include hover;
      .section__img {
        filter: brightness(0) invert(1);
      }
      .section__title {
        color: $white;
      }
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