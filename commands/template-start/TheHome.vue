<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__body">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
        <section class="template">
          <div class="template__wrapper">
            <div class="template__container _container">
              <div class="template__body">
                <div class="template__img">
                  <img src="@/assets/img/template/vue.svg" alt="" />
                </div>
                <h1 class="template__title">This is home page Vue tamplate</h1>

                <p class="template__text">
                  This template contains useful developments for a web
                  application developed in Vue which contains the Composition
                  API
                </p>

                <h2 class="template__subtitle">
                  This template contains such technologies and plugins:
                </h2>

                <ul class="template__list">
                  <li
                    class="template__list-item"
                    v-for="item in list"
                    :key="item"
                  >
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

                <div class="template__commands">
                  <h4 class="template__commands-title">
                    Сlear template from template files or codes
                  </h4>
                  <p class="template__commands-note">
                    Note: be careful, if you wrote your code in files, then in
                    files such as TheHeader.vue, TheHome.vue the code will be
                    cleared when you call the command.
                  </p>

                  <code class="template__code">
                    {{ "npm run clear" }}

                    <svg
                      class="template__copy"
                      @click="copy(`npm run clear`)"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      height="800px"
                      width="800px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 210.107 210.107"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill: #fff"
                          d="M168.506,0H80.235C67.413,0,56.981,10.432,56.981,23.254v2.854h-15.38   c-12.822,0-23.254,10.432-23.254,23.254v137.492c0,12.822,10.432,23.254,23.254,23.254h88.271   c12.822,0,23.253-10.432,23.253-23.254V184h15.38c12.822,0,23.254-10.432,23.254-23.254V23.254C191.76,10.432,181.328,0,168.506,0z    M138.126,186.854c0,4.551-3.703,8.254-8.253,8.254H41.601c-4.551,0-8.254-3.703-8.254-8.254V49.361   c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.253,3.703,8.253,8.254V186.854z M176.76,160.746   c0,4.551-3.703,8.254-8.254,8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854   c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.254,3.703,8.254,8.254V160.746z"
                        />
                      </g>
                    </svg>
                  </code>

                  <h4 class="template__commands-title">
                    Return project template files
                  </h4>
                  <p class="template__commands-note">
                    Note: Be careful, if you wrote your code in files, then in
                    files such as TheHeader.vue, TheHome.vue the code will be
                    changed to code to show the template when the command is
                    called.
                  </p>

                  <code class="template__code">
                    {{ "npm run template" }}

                    <svg
                      class="template__copy"
                      @click="copy(`npm run template`)"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      height="800px"
                      width="800px"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 210.107 210.107"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill: #fff"
                          d="M168.506,0H80.235C67.413,0,56.981,10.432,56.981,23.254v2.854h-15.38   c-12.822,0-23.254,10.432-23.254,23.254v137.492c0,12.822,10.432,23.254,23.254,23.254h88.271   c12.822,0,23.253-10.432,23.253-23.254V184h15.38c12.822,0,23.254-10.432,23.254-23.254V23.254C191.76,10.432,181.328,0,168.506,0z    M138.126,186.854c0,4.551-3.703,8.254-8.253,8.254H41.601c-4.551,0-8.254-3.703-8.254-8.254V49.361   c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.253,3.703,8.253,8.254V186.854z M176.76,160.746   c0,4.551-3.703,8.254-8.254,8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854   c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.254,3.703,8.254,8.254V160.746z"
                        />
                      </g>
                    </svg>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clipboard } from "v-clipboard";

const list = [
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
  {
    title: "Tailwind css 3.3.5",
    img: "./technologies/tailwind.svg",
    url: "https://tailwindcss.com/",
    urlPlugin: "",
  },
];

function copy(message) {
  Clipboard.copy(message);
}
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
  &__commands {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    &-title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    &-note {
      font-size: 13px;
      color: rgb(171, 171, 171);
      width: 100%;
      max-width: 50%;
      margin-bottom: 5px;
    }
  }
  &__code {
    font-family: "JetBrains Mono";
    color: #fff;
    padding: 15px 20px;
    padding-right: 60px;
    border-radius: 10px;
    background-color: rgb(38, 38, 38);
    position: relative;
    margin-bottom: 20px;
  }
  &__copy {
    background-color: rgb(64 64 64);
    padding: 0.25rem;
    width: 1.75rem;
    height: 1.75rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 0.25rem;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        background-color: rgb(22, 121, 163);
      }
    }
    &:active {
      background-color: rgb(22 163 74);
    }
  }
}
</style>