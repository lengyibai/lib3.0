<script setup>
  import ScrollObserver from './Components/ScrollObserver/index.vue'
</script>

# scrollObserver

<ContainerBox title="介绍">
<template #desc>
元素进入可视区播放入场动画，动画效果可自行修改源码
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
自身进入可视区50%播放动画
</template>
<div class="demoBox">
<ScrollObserver />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="ScrollObserver">
    <div
      class="box"
      v-scrollObserver
      v-for="(item, index) in 100"
      :key="index"
    ></div>
  </div>
</template>
<style scoped lang="less">
.ScrollObserver {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  overflow: auto;

  .box {
    width: 50%;
    height: 200px;
    flex-shrink: 0;
    margin-bottom: 10px;
    background-color: #000;
    transition: all 0.5s;
  }
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const scrollObserver = {
  mounted(el: HTMLElement) {
    el.style.transition = "0.75s";
    el.style.transform = "translateY(50%)";
    el.style.opacity = "0";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0) {
            el.style.transform = "translateY(0px)";
            el.style.opacity = "1";
            observer.unobserve(el);
          }
        });
      },
      { threshold: [0, 0.25, 1] }
    );
    observer.observe(el);
  },
};
```

</template>
</ShowCode>
</ContainerBox>
