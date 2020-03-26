<template>
  <FramePage ref="framePageRef" namespace="onemapApplication">
    <template slot="top">
      工具栏
    </template>
    <template slot="right">
      右侧
    </template>
    <template slot="content">
      <div>sdfa</div>
    </template>
  </FramePage>
</template>
<script>
// import FramePage1 from 'E:/jsproject/chinadci/front/dci3d-vue-ui/src/components/Layout/FramePage'
export default {
  name: 'OneMap',
  // components: { FramePage1 },
  activated() {
    this.$refs.framePageRef.mountedUpdate()
  }
}
</script>
