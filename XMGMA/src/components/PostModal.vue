<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h1>Создание новостного поста</h1>
      <form @submit.prevent="createPost">
        <input v-model="title" type="text" placeholder="Заголовок" />
        <input v-model="date" type="text" placeholder="Дата" />
        <input v-model="tag" type="text" placeholder="Тэг" />
        <input type="file" @change="onImageSelected" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostModal',
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '',
      date: '',
      tag: '',
      imageUrl: null,
    };
  },
  methods: {
    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageUrl = URL.createObjectURL(file);
      }
    },
    createPost() {
      this.$emit('create-post', {
        title: this.title,
        date: this.date,
        tag: this.tag,
        imageUrl: this.imageUrl,
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss" scoped>

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: $radius;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
}

button {
  background: $blue;
  color: $white;
  border: none;
  padding: 10px 20px;
  border-radius: $radius;
  cursor: pointer;
  font-size: $h6;

  &:hover {
    background: darken($blue, 10%);
  }
}
</style>