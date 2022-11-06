<template>
  
  <el-table-column v-bind="col" >
    <template v-if="col.children" >
      <Row v-for="(item, index) in col.children" :col="item" :key="index">
        <!-- 内容 -->
        <template v-slot:[item.prop]="{scope}">
            <slot :name="item.prop" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
        <!-- 标题 header -->
        <template v-slot:[item.prop+header]="{scope}">
            <slot :name="item.prop+header" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
      </Row>
    </template>
    <!-- header 标题 -->
    <template v-slot:header="scope">
      <slot :name="col.prop+header" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}">
        <div :labels="col.prop+header" class="td-content" v-html="scope.column.label"></div>
      </slot>
    </template>
    <!-- 内容 -->
    <template v-slot="scope">
      <slot :name="col.prop" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}">
        <div :labels="col.prop" class="td-content"
          v-html="scope.row[col.prop || scope.column.property || scope.column.prop]"
        ></div>
      </slot>
    </template>
  </el-table-column>
</template>

<script>
// 行，递归可以无限嵌套
export default {
  name: "Row",
  data() {
    return {
      header:'_header', //为了header - slot
    };
  },
  props: {
    col: {
      type: Object,
    },
  },
};
</script>

<style scoped >
.cell.el-tooltip .td-content {
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
