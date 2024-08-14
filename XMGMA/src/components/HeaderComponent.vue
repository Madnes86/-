<template>
  <header class="header row">
    <div class="header__burger col">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img class="header__logo" src="@/assets/img/logo.png" alt="Logo">
    <p class="header__title">Ханты Мансийская Государственная Медицинская Академия</p>
    <p class="header__title-mob">ХМГМА</p>
    <div class="row">
      <img class="header__img" src="@/assets/img/eye.png" alt="Eye Icon">
      <img class="header__img" src="@/assets/img/search.png" alt="Search Icon">
    </div>
    <img class="header__enter" src="@/assets/img/enter-while.png" alt="Enter Icon">
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>

.header {
  background: $blue;
  border-radius: $radius;
  padding: 6px 30px 6px 150px;
  position: relative;
  margin: $margin;
  height: 42px;
  max-width: $max-wd;

  &__burger {
    display: none;
  }
  &__logo {
    background: $white;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    width: 90px;
  }
  &__title {
    font-size: $h1;
    color: $white;
  }
  &__title-mob {
    font-size: $h1-mob;
    display: none;
  }
  &__img {
    margin-left: 30px;
    width: 30px;
  }
  &__enter {
    display: none;
  }
}

@media (max-width: 1200px) {
  body {
    padding: 0 80px;
  }
  .header__title {
    display: none;
  }
  .header__title-mob {
    color: $white;
    display: flex;
  }
}

@media (max-width: 600px) {
  .header {
    padding: 10px 30px;
    height: 48px;

    &__burger {
      align-items: self-start;
      display: flex;
      height: 28px;
      width: 30px;

      span {
        background: $white;
        border-radius: 4px;
        display: block;
        height: 3.5px;
        width: 30px;

        &:nth-child(2) {
          width: 20px;
        }
      }
    }

    &__logo {
      left: 50%; 
      transform: translateX(-50%);
      max-width: 100px;
      width: 25vw;
    }

    &__title-mob {
      display: none;
    }

    &__img {
      display: none;
    }

    &__enter {
      display: flex;
      width: 30px;
    }
  }
}
</style>