<template>
  <div class="components">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <div class="components__wrapper">
      <div class="components__body">
        <div class="spoiler component">
          <div class="spoiler__wrapper">
            <div class="spoiler__container _container">
              <div class="spoiler__body">
                <a
                  class="components__title"
                  target="_blank"
                  href="https://bonilka.github.io/v-spoiler/#examples"
                  ># Spoiler</a
                >

                <code class="components__code">
                  {{'<my-spoiler v-model="value">Your content</my-spoiler>'}}

                  <svg
                    class="components__copy"
                    @click="
                      copy(
                        `<my-spoiler v-model=&quot;value&quot;>Your content</my-spoiler>`
                      )
                    "
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

                <div class="spoiler">
                  <h3 class="spoiler__title" @click="spoiler = !spoiler">
                    You can make an accordion...
                  </h3>
                  <my-spoiler v-model="spoiler">
                    or bind the spoiler to a button and open it through the
                    button

                    <button
                      class="spoiler__button"
                      @click="spoilerButton = !spoilerButton"
                    >
                      Button
                    </button>
                    <my-spoiler v-model="spoilerButton" class="spoiler__child"
                      >for example</my-spoiler
                    >
                  </my-spoiler>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Clipboard } from "v-clipboard";

const spoiler = ref(false);
const spoilerButton = ref(false);

function copy(message) {
  Clipboard.copy(message);
}
</script>

<style lang="scss" scoped>
.components {
  &__body {
    @include adaptiv-value(padding-top, 30, 15, 1);
    display: flex;
    flex-direction: column;
  }
  &__title {
    @include adaptiv-value(font-size, 30, 20, 1);
    @include adaptiv-value(font-size, 27, 21, 1);

    display: block;
    @include adaptiv-value(margin-bottom, 15, 10, 1);

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        color: $colorGreen;
      }
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

.spoiler {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    @include adaptiv-value(font-size, 20, 15, 1);
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    display: inline-block;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        color: $colorGreen;
      }
    }
  }

  &__button {
    display: flex;
    padding: 5px 10px;
    background-color: $colorGreen;
    color: $colorDark;
    border-radius: 4px;
  }
  &__child {
    margin-left: 20px;
  }
}
</style>