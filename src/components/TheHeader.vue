<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <router-link to="/" class="header__logo">
            <img
              src="@/assets/img/header/logo.png"
              alt=""
              class="header__logo-img"
            />
            <span class="header__logo-text">Vue Game</span>
          </router-link>

          <div class="header__info">
            <div class="header__info-item">
              <div class="header__info-top">
                <span class="header__info-title icon-phone">Доставка:</span>
                <span class="header__info-title-value">1113</span>
              </div>
              <a href="tel:1113" class="header__info-tel">Обратный звонок</a>
            </div>

            <div class="header__info-item">
              <div class="header__info-top">
                <span class="header__info-title icon-time">Режим работы:</span>
              </div>
              <div class="header__info-ordinary">
                ВС-ЧТ: 10:00 - 22:00, ПТ-СБ: 10:00 - 23:00
              </div>
            </div>
          </div>

          <div class="header__search">
            <div class="header__search-icon icon-search"></div>
            <input
              type="text"
              placeholder="Поиск"
              class="header__search-input"
              v-model="search"
            />
            <div
              class="header__search-close icon-close"
              v-if="search.length > 0"
              @click="search = ''"
            ></div>
          </div>

          <div class="header__actions">
            <router-link
              to="#"
              class="header__backet icon-backet"
            ></router-link>
            <router-link
              to="#"
              class="header__favorite icon-favorite"
            ></router-link>
            <router-link to="#" class="header__theme icon-sun"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #111;

  &__body {
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    display: flex;
    column-gap: 7px;
    align-items: center;
    font-family: $fontPressStart;
    color: #3ad992;
    font-size: 19px;
    font-weight: 400;
    line-height: 14px;
    word-spacing: -15px;
    margin-right: 10px;
  }
  &__info {
    display: flex;
    align-items: center;
    column-gap: 60px;
    &-top {
      margin-bottom: 5px;
      display: flex;
      column-gap: 5px;
    }

    &-title {
      color: rgba(255, 255, 255, 0.7);
      font-size: 15px;
      font-family: Inter;
      font-style: normal;
      font-weight: 400;
      position: relative;

      &::before {
        color: #8b8b8b;
        font-size: 20px;
        position: absolute;
        transform: translateX(-100%) translateY(-25%);
        left: -7px;
        top: 0;
      }
    }

    &-title-value {
      color: #fff;
      font-size: 14px;
    }
    &-tel {
      color: #38d991;
      font-size: 14px;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #207a52;
        }
      }
    }
    &-ordinary {
      line-height: 20px;
      color: #e6e1e5;
      font-size: 14px;
    }
  }

  &__search {
    display: flex;
    align-items: center;
    column-gap: 10px;
    position: relative;

    &-icon {
      color: #38d991;
      font-size: 20px;
    }
    &-input {
      color: #fff;
      font-size: 18px;
      padding-bottom: 2px;
      border-bottom: 1px solid #d9d9d9;
      background: transparent;
      max-width: 250px;
      padding-right: 25px;
      transition: all 0.3s ease 0s;
      &::placeholder {
        color: #fff;
        transition: all 0.3s ease 0s;
      }
      &:focus {
        border-color: #00b588;
      }
    }
    &-close {
      position: absolute;
      color: #fff;
      font-size: 17px;
      bottom: 5px;
      right: 0;
      z-index: 2;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00b588;
        }
      }
    }
  }

  &__actions {
    display: flex;
    column-gap: 23px;

    a {
      font-size: 24px;
      color: #fff;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #00b588;
        }
      }
    }
  }
}
</style>

