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
