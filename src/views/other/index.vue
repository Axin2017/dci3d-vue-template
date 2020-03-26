
<template>
  <div class="onemap height100">
    <!-- 头部 -->
    <div class="onemap-header">
      other头部
    </div>
    <div class="onemap-body">
      <!-- 左侧栏 -->
      <div class="onemap-aside">
        other侧边栏
      </div>
      <!-- 内容部分 -->
      <div class="onemap-content" id="onemap-content">
        <!-- 地图与右侧面板 -->
        <div class="onemap-content-body" id="onemap-content-body">
          <ContentPage>
            other地图
          </ContentPage>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Other'
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
      // width: 62px;
      height: 100%;
      position: relative;
      z-index: 10;
    }
    .onemap-content {
      position: relative;
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      .onemap-content-body {
        position: relative;
        flex: 1;
        display: flex;
        height: 100%;
        .onemap-map {
          height: 100%;
          transition: all 0.3s;
          position: relative;
          z-index: 5;
        }
        .onemap-rightPanel {
          position: relative;
        }
      }
    }
  }
}
</style>
