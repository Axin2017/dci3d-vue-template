# 拖拽组件

 进行拖拽效果

 ## props

  |  参数名 |  类型  |  说明  | 可选值  | 默认值 | 是否必传
  |:-------------:|:----------:|:-------------:|:-------------:|:----------:|:-------------:|
 |  parentElement |   css选择器，如 id, 类名,标签 等  | parentElement是整个拖拽在拖拽活动范围的的    | - |- | true

 ## slot


 |  插槽名 |  备注  |  说明  |
 |:-------:|:------:|:--------:|
 |  dragHeader |   拖拽面板头部  | parentElement也定义在头部这个位置  | 
 |  dragContainer |   拖拽面板内容  |  - | 

 ## case

 ```
       <DragDiv parentElement='.onemap-map' class="show-shopping-box" v-show="showShopping">
        <template v-slot:dragHeader>
          <div class="show-shopping-header">
            <i class="icon-csbt01"></i>
            工具超市
            <i class="el-icon-close icon-close" @click="onCloseShopping"></i>
          </div>
        </template>
        <template v-slot:dragContainer>
          <div class="show-shopping-content" v-for="(shoppingItem, index) in showApprovalAssistant" :key="index">
            <div class="shopping-content-header">
              <i class="icon-csbt02"></i>
              {{ shoppingItem.assistantName }}
            </div>
            <div class="shopping-content">
              <div class="shopping-middle" v-for="(item, keyIndex) in shoppingItem.module" :key="keyIndex">
                <div class="icon-background" :class="'level' + (index + 1)" @click="onIconClick(item,index)">
                  <i :class="item.icon"></i>
                </div>
                <p>{{ item.moduleName }}</p>
              </div>
            </div>
          </div>
        </template>
      </DragDiv>
```