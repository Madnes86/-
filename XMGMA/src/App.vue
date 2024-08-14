<template>
  <div id="app">
    <HeaderComponent />
    <Sidebar />
    <Slider />
    <MainNav />
    <News />
    <Certificates />
    <PostModal />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import Sidebar from '@/components/Sidebar.vue';
import Slider from '@/components/Slider.vue';
import MainNav from '@/components/MainNav.vue';
import News from '@/components/News.vue';
import Certificates from '@/components/Certificates.vue';
import PostModal from '@/components/PostModal.vue';
import NewsItem from '@/components/NewsItem.vue'

export default {
  components: {
    HeaderComponent,
    Sidebar,
    Slider,
    MainNav,
    News,
    Certificates,
    PostModal
  }
}
</script>

<style>
 * {
    box-sizing: border-box;
  }
  body {
    padding: 0 120px;
    color: #1F91FF;
    font-family: Oswald, sans-serif;
    margin: 0;
  }
  p {
  margin: 0px;
  }
  .row {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .col {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    body {
      padding: 0 10px;
    }
  }
</style>