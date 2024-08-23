<template>
  <div class="certificates">
    <img class="certificates__img" v-for="(src, index) in images" :src="src" :key="index" alt="" @click="remDoc(index)">
    <input type="file" @change="fileAddDoc" class="certificates__img" v-if="isEditing">
  </div>
  
 
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Certificates',
  computed: {
    ...mapGetters(['isEditing', 'isDeleting']),
  },
  data() {
    return {
      images: [
        './src/assets/img/doc-1.png',
        './src/assets/img/doc-1.png',
        './src/assets/img/doc-3.png',
      ],
      isAddDoc: false,
    };
  },
  methods: {
    switchAddDoc() {
      this.isAddDoc = !this.isAddDoc;
    },
    fileAddDoc(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageUrl = e.target.result;
          this.images.push(imageUrl); 
        }
        reader.readAsDataURL(file);
        setTimeout(() => {
          this.switchAddDoc() ;
        }, 2000);
      };
    },
    remDoc(index) {
      if (this.isDeleting) {
        this.images.splice(index, 1);
      }
    }
  },
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
    overflow: hidden;
    height: 80px;
    width: 100%;
  }
}
</style>