<template>
  <div class="hm-buttom">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.hm-buttom {
  height: 50px;
  background-color: #cc3000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  margin: 20px;
}
</style>
