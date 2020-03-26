<template>
  <FramePage ref="framePageRef" namespace="onemapApplication">
    <template slot="top">
      工具栏1
    </template>
    <template slot="right">
      <div style="width:200px">
        右侧1
      </div>
    </template>
    <template slot="content">
      <div>3</div>
    </template>
  </FramePage>
</template>
<script>
// import FramePage1 from 'E:/jsproject/chinadci/front/dci3d-vue-ui/src/components/Layout/FramePage'
export default {
  name: 'OneMap1',
  // components: { FramePage1 },
  activated() {
    this.$refs.framePageRef.mountedUpdate()
  }
}
</script>
