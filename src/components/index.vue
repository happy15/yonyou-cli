<style lang="less" module="a">
.entry {
    min-width: 1200px;
    height: 100%;
    font-size: 15px;
    overflow-y: auto;
    .mainContent {
        height: 100%;
        box-sizing: border-box;
        background: white;
    }
}
</style>
<style lang="less" module="b">
:global {
    html,
    body {
        width: 100%;
        height: 100%;
        font-size: 12px;
        background: white;
    }
}
</style>
<template>
<div :class="[a.entry]" class="coordination-cli-flex">
    <div :class="[a.mainContent]" class="coordination-cli-flex-1">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
// npm install --sava url-search-params
// import URLSearchParams from 'url-search-params';
// let batchAddAttributes = function(params) {
//         if (params instanceof Object) {
//             for (let key in params) {
//                 this.delete(key);
//                 this.append(key, params[key]);
//             }
//         }
//     };
// if(!window.URLSearchParams) {
//     URLSearchParams.prototype.batchAddAttributes = batchAddAttributes;
//     window.URLSearchParams = URLSearchParams;
// }else {
//     window.URLSearchParams.prototype.batchAddAttributes = batchAddAttributes;
// }

window.globalUniquenessCoordinationCliTopLevelObj = window.globalUniquenessCoordinationCliTopLevelObj || {};
let globalUniquenessCoordinationCliTopLevelObj = window.globalUniquenessCoordinationCliTopLevelObj;
// 任何全局变量在各文件中使用前，必须在此文件和globalUniquenessCoordinationCliTopLevelObj进行初始化注册
// 严禁在未在此文件和globalUniquenessCoordinationCliTopLevelObj对象注册的情况下，在其他文件中直接初始化并使用全局变量
globalUniquenessCoordinationCliTopLevelObj = {
    ...globalUniquenessCoordinationCliTopLevelObj,
    isSmallProgram: /smallProgram/ig.test(__ENV__)
};

export default {
    data() {
        return {

        };
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
};
</script>
        