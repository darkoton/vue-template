<template>
  <section class="tailwind">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <div class="tailwind__wrapper">
      <div class="tailwind__body flex flex-col items-center py-16">
        <div class="tailwind__img w-3/4 mb-8">
          <img
            src="@/assets/img/template/vuetailwind.png"
            class="w-full"
            alt=""
          />
        </div>

        <h1 class="tailwind__title text-5xl mb-4 mx-4 max-[992px]:text-4xl">
          Vue and Tailwind
        </h1>

        <p class="tailwind__text brain w-1/2 px-4 max-[992px]:w-full">
          This template has built-in tailwind, which is available right out of
          the box. to disable it you need to comment out the path to it in
          main.scss. if you don’t need it at all, you can delete the files
          associated with it: <span class="text-red-600">_tailwind.scss</span>,
          <span class="text-amber-400">tailwind.config.js</span>,
          <span class="text-amber-400">postcss.config.js</span>, in
          <span class="text-amber-500">package.json</span>
          you can remove the tailwindcss, autoprefixer, postcss plugins.
        </p>

        <div
          class="tailwind__commands brain w-1/2 mt-12 flex flex-col gap-y-6 px-4 max-[992px]:w-full"
        >
          <h3 class="tailwind__command-title">Unistall command</h3>
          <p
            class="tailwind__command py-4 px-6 bg-neutral-800 rounded-lg relative"
          >
            <span class="text-gray-400" ref="uni"
              >npm uni tailwindcss autoprefixer postcss</span
            >
            <svg
              class="w-7 h-7 absolute top-4 right-4 p-1 rounded bg-green-600 cursor-pointer duration-200"
              :class="{ 'bg-neutral-700': !copied1 }"
              @click="
                copied1 = true;
                copy('npm uni tailwindcss autoprefixer postcss');
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
          </p>
          <h3 class="tailwind__command-title">Istall command</h3>
          <p
            class="tailwind__command py-4 px-6 bg-neutral-800 rounded-lg relative"
          >
            <span class="text-gray-400" ref="uni"
              >npm i tailwindcss autoprefixer postcss</span
            >

            <svg
              class="w-7 h-7 absolute top-4 right-4 p-1 rounded bg-green-600 cursor-pointer duration-200"
              :class="{ 'bg-neutral-700': !copied2 }"
              @click="
                copied2 = true;
                copy('npm i tailwindcss autoprefixer postcss');
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
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clipboard } from "v-clipboard";
import { ref } from "vue";

const copied1 = ref<boolean>(false);
const copied2 = ref<boolean>(false);

function copy(message: string) {
  Clipboard.copy(message);

  setTimeout(() => {
    copied1.value = false;
    copied2.value = false;
  }, 400);
}
</script>

<style scoped>
.brain {
  font-family: "JetBrains Mono", monospace;
}
</style>