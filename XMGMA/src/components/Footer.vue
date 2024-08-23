<template>
  <footer class="footer">
    <div class="row">
      <div class="footer__top">
        <img class="footer__logo" src="@/assets/img/logo.png" alt="">
        <div class="footer__socials">
          <img class="footer__socials-icon" src="@/assets/img/vk.png" alt="">
          <img class="footer__socials-icon" src="@/assets/img/vk.png" alt="">
          <img class="footer__socials-icon" src="@/assets/img/vk.png" alt="">
          <img class="footer__socials-icon" src="@/assets/img/vk.png" alt="">
        </div>
      </div>
      <div class="footer__middle">
        <nav class="footer__nav">
          <a class="footer__nav-link" href="">Академия</a>
          <a class="footer__nav-link" href="">Поступающему</a>
          <a class="footer__nav-link" href="">Студенту</a>
          <a class="footer__nav-link" href="">Сотруднику</a>
          <a class="footer__nav-link" href="">Аспиранту</a>
        </nav>
        <div class="footer__actions">
          <button class="footer__actions-btn">Версия для слабовидящих
            <img class="footer__actions-icon"src="" alt="">
          </button>
          <button class="footer__actions-btn">Нашли баг?</button>
        </div>
        <div class="footer__address">
          Адрес: ул. Мира, 40, Ханты-Мансийск, Ханты-Мансийский автономный округ, 628011
        </div>
      </div>
    </div>
    <div class="footer__bottom">© Ханты-Мансийская государственная медицинская академия, 2024 г.</div>
  </footer>
</template>

<script>

</script>

<style lang="scss">
  .footer {
    background: $blue;
    border-radius: $radius;
    padding: 20px;

    &__top {
      border-right: 2px solid $white;
      padding: 10px;
    }
    &__logo {
      background: #FFF;
      border-radius: 50%;
      width: 120px;
    }
    &__socials {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__socials-icon {
      width: 25px;
    }
    &__middle {
      padding: 10px;
    }
    &__nav {
      display: flex;
      justify-content: space-between;
    }
    &__nav-link {
      color: $white;
      font-size: $h5;
      text-decoration: none;
    }
    &__actions {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    &__actions-btn {
      background: $white;
      border: none;
      border-radius: $radius;
      color: $blue;
      padding: 4px 8px;
      font-size: $h6;
      font-weight: 650;
    }
    &__address { 
      color: $white;
      font-size: $h6;
      margin-top: 20px;
    }
    &__bottom {
      color: $white;
      font-size: $h6;
      text-align: center;
    }
  }
</style>