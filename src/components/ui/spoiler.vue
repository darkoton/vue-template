<template>
  <div
    :class="classlist"
    :style="{ height: height, '--spoiler-time': `${time}ms` }"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VSpoiler",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Number,
      default: 150,
    },
  },
  emit: ["open-completed", "close-completed"],
  data() {
    return {
      height: this.modelValue ? "" : 0,
      isProgress: false,
    };
  },
  computed: {
    classlist() {
      return {
        "v-spoiler": true,
        "v-spoiler--opened": this.modelValue,
        "v-spoiler--closed": !this.modelValue,
        "v-spoiler--open-completed": this.modelValue && !this.isProgress,
        "v-spoiler--close-completed": !this.modelValue && !this.isProgress,
      };
    },
  },
  watch: {
    modelValue(val) {
      this.height = `${this.$el.scrollHeight}px`;
      this.isProgress = true;

      if (!val) {
        window.requestAnimationFrame(() => {
          this.height = 0;
        });
      }
    },
  },
  methods: {
    onTransitionEnd() {
      if (this.modelValue) {
        this.height = "";
      }
      this.isProgress = false;
      this.$emit(this.modelValue ? "open-completed" : "close-completed");
    },
  },
});
</script>

<style scoped>
.v-spoiler {
  position: relative;
  overflow-y: hidden;
  transition: height var(--spoiler-time, --transition-fast) ease-in-out;
}
.v-spoiler--open-completed {
  overflow: initial;
}
</style>