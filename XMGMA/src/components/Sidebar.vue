<template>
  <div class="sidebar">
    <div class="burger col">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img class="enter" src="@/assets/img/enter.png" alt="">
    <img 
      class="settings" 
      src="@/assets/img/settings.png" 
      @click="toggleEditMode" 
      :class="{ active: isEditing }" 
      alt="settings"
    >
    <News />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['isEditing']),
  },
  methods: {
    ...mapActions(['toggleEditMode']),
  },
}
</script>

<style lang="scss" scoped>

.burger {
  align-items: self-start;
  position: absolute;
  top: 35px;
  right: 40px;
  height: 32px;
  width: 40px;
  display: flex;

  span {
    background: #3498db;
    border-radius: 4px;
    display: block;
    height: 5px;
    width: 40px;

    &:nth-child(2) {
      width: 28px;
    }
  }
}

.enter {
  cursor: pointer;
  position: absolute;
  top: 110px;
  right: 40px;
  width: 40px;
}
.settings {
  cursor: pointer;
  position: absolute;
  top: 195px;
  right: 40px;
  width: 40px;
}
.settings.active {
  filter: contrast(80%);
}
@media (max-width: 600px) {
  .burger, .enter, .settings {
    display: none;
    right: 20px;
  }
}
</style>