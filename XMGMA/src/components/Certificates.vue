<template>
  <div class="certificates">
    <img class="certificates__img" v-for="(src, index) in images" :src="src" :key="index" alt="">
  </div>
</template>

<script>
export default {
  name: 'Certificates',
  data() {
    return {
      images: [
        '@/assets/img/certificates-1.png',
        '@/assets/img/certificates-2.png',
        '@/assets/img/certificates-3.png',
        // Добавьте сюда пути к другим изображениям сертификатов
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

.certificates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 30px;
  padding: $padding;
  margin: $margin;
  max-width: $max-wd;

  &__img {
    border-radius: $radius;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.22);
    padding: 5px;
    height: 80px;
    width: 100%;
  }
}
</style>