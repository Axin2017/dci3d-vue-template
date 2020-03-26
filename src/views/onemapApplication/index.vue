
<template>
  <div class="onemap height100">
    <!-- 头部 -->
    <div class="onemap-header">
      <button @click="onRouterChangeClick">路由切换</button>
    </div>
    <div class="onemap-body">
      <!-- 左侧栏 -->
      <div class="onemap-aside">
        侧边栏
      </div>
      <!-- 内容部分 -->
      <div class="onemap-content" id="onemap-content">
        <!-- 地图与右侧面板 -->
        <ContentPage>
          <div class="map" @click="mapClick">
            this is map
          </div>
        </ContentPage>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OneMapApplication',
  methods: {
    mapClick() {
      // eslint-disable-next-line
      alert('点击地图')
    },
    onRouterChangeClick() {
      const router = this.$store.state.global.routerPath
      this.$router.push(router.indexOf('onemap1') >= 0 ? '/onemapApplication' : '/onemapApplication/onemap1')
    }
  }
}
</script>
<style lang="scss" scoped>
.onemap {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .onemap-header {
    height: 60px;
  }
  .onemap-body {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;
    .onemap-aside {
      height: 100%;
      position: relative;
      z-index: 10;
    }
    .onemap-content {
      position: relative;
      flex: 1;
      height: 100%;
      .map {
        background: #ccc;
        height: 100%;
        line-height: 100px;
      }
    }
  }
}
</style>
