<template>
  <section class="template">
    <div class="template__wrapper">
      <div class="template__container _container">
        <div class="template__body">
          <div class="template__img">
            <img src="@/assets/img/vue.svg" alt="" />
          </div>
          <h1 class="template__title">This is home page Vue tamplate</h1>

          <p class="template__text">
            This template contains useful developments for web application
            development in Vue
          </p>

          <h2 class="template__subtitle">
            This template contains such technologies and plugins:
          </h2>

          <ul class="template__list">
            <li class="template__list-item" v-for="item in list" :key="item">
              <div class="template__list-img">
                <a :href="item.url" target="_blank"
                  ><img :src="item.img" alt=""
                /></a>
              </div>
              <a
                :href="item.urlPlugin"
                target="_blank"
                class="template__list-title"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Vue 3.2.13",
          img: "./technologies/vue.svg",
          url: "https://vuejs.org/",
          urlPlugin: "https://vuejs.org/",
        },
        {
          title: "SASS/SCSS 1.63.6",
          img: "./technologies/scss.png",
          url: "https://sass-lang.com/",
          urlPlugin: "https://cli.vuejs.org/guide/css.html#pre-processors",
        },
        {
          title: "Dotenv 16.3.1",
          img: "./technologies/dotenv.png",
          url: "https://github.com/motdotla/dotenv",
          urlPlugin: "https://github.com/motdotla/dotenv",
        },
        {
          title: "Vuex 4.0.2",
          img: "./technologies/vuex.png",
          url: "https://vuex.vuejs.org/",
          urlPlugin: "https://vuex.vuejs.org/installation.html",
        },
        {
          title: "Vue-router 4.0.3",
          img: "./technologies/router.png",
          url: "https://router.vuejs.org/",
          urlPlugin: "https://router.vuejs.org/",
        },
        {
          title: "Vue-i18n 9.3.0-beta.24",
          img: "./technologies/i18n.svg",
          url: "https://vue-i18n.intlify.dev/",
          urlPlugin: "https://vue-i18n.intlify.dev/",
        },
        {
          title: "Axios 1.4.0",
          img: "./technologies/axios.png",
          url: "https://axios-http.com/",
          urlPlugin: "https://axios-http.com/",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.template {
  height: 100%;

  &__wrapper,
  &__container,
  &__body {
    height: 100%;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include adaptiv-indent(padding, 60, 30, 0, 0, 1);
  }
  &__img {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    @include adaptiv-value(margin-bottom, 40, 20, 1);
  }
  &__title {
    @include adaptiv-value(font-size, 35, 25, 1);
    @include adaptiv-value(margin-bottom, 40, 20, 1);
    color: $colorGreen;
  }
  &__text {
    @include adaptiv-value(font-size, 18, 14, 1);
    @include adaptiv-value(margin-bottom, 15, 10, 1);
  }
  &__subtitle {
    @include adaptiv-value(font-size, 25, 22, 1);
    @include adaptiv-value(margin-bottom, 20, 10, 1);
  }
  &__list {
    display: flex;
    flex-direction: column;
    width: auto;
    // align-items: center;
    // width: 100%
    @include adaptiv-value(row-gap, 10, 5, 1);

    &-title {
      @include adaptiv-value(font-size, 18, 16, 1);
      color: #fff;
      transition: all 0.3s ease 0s;
      cursor: pointer;
    }
    &-img {
      width: 100%;
      max-width: 40px;
      height: 100%;
      max-height: 40px;
      cursor: pointer;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-item {
      display: inline-flex;
      align-items: center;
      @include adaptiv-value(column-gap, 20, 10, 1);
      @media (any-hover: hover) {
        transition: all 0.3s ease 0s;
        &:hover a {
          color: $colorGreen;
        }
      }
    }
  }
}
</style>