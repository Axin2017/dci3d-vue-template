
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
          <div class="map">
            <Dci3dMap2D />
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
      }
    }
  }
}
</style>
