import leeEasyTable from "./src/leeEasyTable.vue";

/* istanbul ignore next */
leeEasyTable.install = function (Vue) {
    Vue.component(leeEasyTable.name, leeEasyTable);
};

export default leeEasyTable;
