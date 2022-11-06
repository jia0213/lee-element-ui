import leeEasyTable from "./leeEasyTable";
const list = {
    leeEasyTable
};
const install = function (Vue) {
    Object.keys(list).forEach((v) => {
        Vue.component(list[v].name, list[v]);
    });
};
const version = "0.0.1"
const leeUiElement = {
    install,
    version,
    ...list
};
export {
    install,
    version,
    leeEasyTable
}
export default {
    ...leeUiElement
};
