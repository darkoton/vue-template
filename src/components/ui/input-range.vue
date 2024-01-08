<template>
  <div class="range-slider">
    <input type="range" class="slider" :value="modelValue || curretValue" :min="min" :max="max" @input="input"
      @change="change" :style="{
        background: style['--slider-bg'] ? style['--slider-bg'] : '#606579',
      }" :step="step">
    <div class="slider-thumb" :class="[thumb]" :style="{
      left: ((modelValue || curretValue) / max) * 100 + '%',
      background: style['--slider-thumb-bg'] ? style['--slider-thumb-bg'] : '#fff',
      width: style['--slider-thumb-size'] ? style['--slider-thumb-size'] : '10px',
      height: style['--slider-thumb-size'] ? style['--slider-thumb-size'] : '10px',
    }">
      <div class="tooltip"></div>
    </div>
    <div class="progress" :style="{
      width: ((modelValue || curretValue) / max) * 100 + '%',
      background: style['--slider-progress-bg'] ? style['--slider-progress-bg'] : '#403CAE',
      '--slider-progress-bg-hover': style['--slider-progress-bg-hover'] ? style['--slider-progress-bg-hover'] : '#403CAE'
    }
      "></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VInputRange",
  props: {
    modelValue: {
      type: [String, Number],
      validator(value, vm) {
        if (value !== undefined && vm && vm.value !== undefined) {
          console.error("Both 'modelValue' and 'value' props are defined. Choose only one.");
          return false;
        }
        return !isNaN(Number(value))
      }
    },
    value: {
      type: [String, Number],
      validator(value, vm) {
        if (value !== undefined && vm && vm.modelValue !== undefined) {
          console.error("Both 'modelValue' and 'value' props are defined. Choose only one.");
          return false;
        }
        return !isNaN(Number(value))
      }
    },
    min: {
      type: [String, Number],
      default: 0,
      validator(value) {
        return !isNaN(Number(value))
      }
    },
    max: {
      type: [String, Number],
      default: 100,
      validator(value) {
        return !isNaN(Number(value))
      }
    },
    step: {
      type: [String, Number],
      default: 1,
      validator(value) {
        return !isNaN(Number(value))
      }
    },
    style: {
      type: Object,
      default: () => {
        return {
          "--slider-bg": "#606579",
          "--slider-thumb-bg": "#fff",
          "--slider-thumb-size": "10px",
          "--slider-progress-bg": "#403CAE",
          "--slider-progress-bg-hover": "red",
        }
      }
    },
    thumb: {
      type: String,
      default: "default"
    },
  },
  emit: ["update:modelValue"],
  data: () => {
    return {
      curretValue: null,
      free: true,
    }
  },
  watch: {
    value(v) {
      if (this.free) {
        this.curretValue = v
      }
    }
  },
  methods: {
    input(event) {
      this.free = false
      this.curretValue = +event.target.value
      this.$emit("update:modelValue", +event.target.value);
      this.$emit("input", event);
    },
    change() {
      this.free = true
    }
  },
  created() {
    if (this.value) {
      this.curretValue = this.value
    }
  }
});
</script>

<style lang='scss' scoped>
.range-slider {
  position: relative;
  width: 100%;
  display: flex;
  margin: 0.5em 1em;

  & .slider {
    -webkit-appearance: none;
    width: 100%;
    appearance: none;
    outline: none;
    height: 6px;
    border-radius: 4px;
    cursor: pointer;

    //GHOST TUMB
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      cursor: pointer;
      z-index: 3;
      position: relative;
    }
  }

  //PREVIEW THUMB

  & .slider-thumb {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    pointer-events: none;

    &.hover {
      opacity: 0;
      transition: opacity 0.1s ease-in 0s;
    }
  }



  & .progress {
    position: absolute;
    width: 50%;
    height: 6px;
    border-radius: 4px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    pointer-events: none;
    transition: background 0.2s ease 0s;

  }

  @media (any-hover:hover) {
    &:hover {
      & .slider-thumb {
        opacity: 1;
      }

      & .progress {
        background: var(--slider-progress-bg-hover) !important;
      }
    }
  }
}
</style>
