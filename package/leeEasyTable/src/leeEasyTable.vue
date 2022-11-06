<template>
<el-table class="data-table" v-bind="config" :data="config.data" v-on="$listeners" >
    <slot name="customer" v-if="$slots.customer"></slot>
    <slot name="pre_column">
        <!-- <el-table-column type="index" width="55" v-bind="options.columns && options.columns[1]" :key="options.columns && options.columns[1]&& options.columns[1].type" v-if="options.columns && options.columns[1]&& options.columns[1].type === 'index'">
        </el-table-column> -->
        <el-table-column type="selection" width="55" v-bind="options.columns && options.columns[0]" :key="options.columns && options.columns[0]&& options.columns[0].type" v-if="options.columns && options.columns[0]&& options.columns[0].type === 'selection'">
        </el-table-column>
    </slot>
    <Row v-for="(item,index) in ((options.columns && options.columns[0]&& options.columns[0].type === 'selection') ? (options.columns && options.columns.slice(1)):options.columns)" :key="index" :col="item">
        <!-- 标题 -->
        <template v-slot:[item.prop+header]="{scope}">
            <slot :name="item.prop+header" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
        <template v-for="(v,vi) in item.children" v-slot:[v.prop+header]="{scope}">
            <slot  v-if="item.children" :name="v.prop+header" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
        <!-- 内容 -->
        <template v-slot:[item.prop]="{scope}">
            <slot :name="item.prop" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
        <template v-for="(v,vi) in item.children" v-slot:[v.prop]="{scope}">
            <slot  v-if="item.children" :name="v.prop" :scope="{row:scope.row,column:scope.column,$index:scope.$index,store:scope.store}"></slot>
        </template>
    </Row>
</el-table>
</template>

<script>
import Row from "../../Row";
// 表格组件 added by lee
let options = {
    // 表单数据源
    data: [],
    // 列信息 - 数据源
    columns: [],
    //其他表格配置
    border: true,
};
export default {
    name: "leeEasyTable",
    data() {
        return {
            header:'_header',
            // 默认样式
            defaultOptions: {
                "header-row-style": {
                    color: "#000",
                },
                "header-cell-style": {
                    backgroundColor: "#deeaf6",
                },
                border: true,
                data: [],
                columns: [],
            },
        };
    },
    computed: {
        config() {
            let setting = {
                ...this.defaultOptions,
                ...this.options,
                ...this.$attrs,
            }
            delete setting.columns; //绑定在标签上无用参数不美观
            return setting;
        },
    },
    components: {
        Row
    },
    props: {
        options: {
            type: Object,
            default () {
                return options;
            },
        },
    },
    methods: {
        
    },
};
</script>

<style></style>
