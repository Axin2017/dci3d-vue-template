# 使用方式

```
  <AnchorScrollPanel class="content" v-model="clickType" :triggerTop="50" :domDatas="data" prop="vueId">
    <ResultTable ref="resultTable" class="table-class" slot-scope="propsData" :data="propsData.data"></ResultTable>
  </AnchorScrollPanel>
```