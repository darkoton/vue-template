<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__logo">
            <img src="@/assets/img/template/logo.png" alt="" />
            <span>Vue.js</span>
          </div>
          <nav class="header__nav">
            <router-link
              :to="item.path"
              class="header__nav-item"
              v-for="item in menu"
              :key="item"
              >{{ item.title }}</router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Tailwind",
    path: "/tailwind",
  },
  {
    title: "Components",
    path: "/components",
  },
];
</script>

<style lang='scss' scoped>
.header {
  background-color: #111;

  &__body {
    @include adaptiv-indent(padding, 20, 10, 30, 15, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 15, 10, 1);
    font-family: $fontBungee;
    @include adaptiv-value(font-size, 22, 16, 1);
    color: #34dd92;

    & img {
      width: 100%;
    }
  }
  &__nav {
    display: flex;
    @include adaptiv-value(font-size, 16, 14, 1);
    @include adaptiv-value(column-gap, 20, 10, 1);

    & a {
      color: #fff;

      &.router-link-active {
        color: #2b81d7;
      }
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #34dd92;
        }
      }
    }
  }
}
</style>
