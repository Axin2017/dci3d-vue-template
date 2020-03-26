# 翻页组件

可以进行点击跳转，实现翻页效果

## props

 |  参数名 |  类型  |  说明  | 可选值  | 默认值 | 是否必传
 |:-------------:|:----------:|:-------------:|:-------------:|:----------:|:-------------:|
 |  parentData     |   Array   | 实现翻页的原数组,必传    |  -| -|true
 |  turnPageNumber |   Number  | 一页翻转多少个，必传     |  -| -| true
 |  showPageNumber |   Number  | 一页显示多少个，必传     |  -| -| true
 |  isfullPage     |  Boolean  | 是否要实现满页          |   -|-|false
 |  v-model        |  Number   | 数组的索引              |  0|  -|false

 ## events
  
 |  事件名称 |  回调参数  |  说明  |
 |:-------------:|:----------:|:-------------:|
 |  turnPageChange     |   传数组中的item给父组件,父组件自行处理   | 组件抛出一个方法给父组件    | 


  ## slots


 |  插槽名 |  备注  |  说明  |
 |:-------:|:------:|:--------:|
 |  turnBefore |   翻页的左点击  | - | 
 |  turnContent |   翻页的内容  | -  | 
 |  turnAfter |   翻页的右点击 |  -  | 

 ## case

 ```
    <template v-slot:dragContainer>
      <TurningPage class="attribute-query-container" v-model="currentPage" :parentData="attributeContent" :turnPageNumber='1' :showPageNumber="1"  >
        <template v-slot:turnBefore>
          <div class="attribute-turning">
            <i class="el-icon-arrow-left turning-btn"></i>
          </div>
        </template>
        <template v-slot:turnContent="{ item, index }">
          <ScrollDiv class="attribute-query-content" :isHorizontal="true">
            <div v-for="(value,key) in item" :key="key" class="attribute-query-results">
              <div class="attribute-key">{{key}}:</div>
              <div class="attribute-key">{{value}}</div>
            </div>
          </ScrollDiv>
        </template>
        <template v-slot:turnAfter>
          <div class="attribute-turning">
            <i class="el-icon-arrow-right turning-btn"></i>
          </div>
        </template>
      </TurningPage>
    </template>

 ```