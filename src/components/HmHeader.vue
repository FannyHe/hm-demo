<template>
  <div class="hm-header">
    <div class="m">
      <div class="left">
        <i class="iconfont iconjiantou2"></i>
      </div>
      <div class="center">
        <slot></slot>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.hm-header {
  height: 40px;
  .m {
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
    display: flex;
    text-align: center;
    line-height: 40px;
    .left,
    .right {
      width: 30px;
    }
    .center {
      flex: 1;
    }
  }
}
</style>
