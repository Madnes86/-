<template>
  <div class="sidebar">
    <div class="burger sidebar__item">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img class="sidebar__item" src="@/assets/img/enter.png" alt="">
    <img 
      class="sidebar__item" 
      src="@/assets/img/settings.png" 
      @click="toggleEditMode" 
      alt="settings"
    >
    <img src="@/assets/img/rem.png" alt="Удалить" class="sidebar__item" v-if="isEditing" @click="toggleDeleteMode"
    :style="{ filter: isDeleting ? 'grayscale(100%)' : 'none' }"
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['isEditing', 'isDeleting']),
  },
  methods: {
    ...mapActions(['toggleEditMode', 'toggleDeleteMode']),
  },
}
</script>

<style lang="scss" scoped>

.sidebar {
  display: flex;
  position: fixed;
  top: 0px;
  right: 0px;
  flex-direction: column;
  z-index: 1000;

  &__item {
    cursor: pointer;
    margin: 30px;
    width: 40px;
  }
}

.burger {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 32px;

  span {
    background: $blue;
    border-radius: 4px;
    display: block;
    height: 5px;
    width: 40px;

    &:nth-child(2) {
      width: 28px;
    }
  }
}
@media (max-width: 600px) {
  .burger, .enter, .settings {
    display: none;
    right: 20px;
  }
}
</style>