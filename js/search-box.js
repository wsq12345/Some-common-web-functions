Vue.component('search-box', {
    data: function () {
        return {
            drop: this.isAllExpand, // 不展开状态： false
        }
    },
    props: {
        showBtn: {
            type: Boolean,
            default: true
        },
        isAllExpand: {
            type: Boolean,
            default: false
        }
    },
    template: `<div id="search-box" class="jst-search-component">
                <!--默认显示的部分-->
                <slot></slot>
                <span v-show="drop">
                    <slot name="drop"></slot>
                </span>
                <!--操作按钮部分 自定义 btn 插槽-->
                <span class="jst-search-component-group">
                    <slot name="btn"></slot>
                    <el-button type="text" class="jst-search-component-btn" @click="drop=!drop" v-if="showBtn">
                        {{ drop ? "收起" : "高级搜索"}}
                        <i :class="drop ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                    </el-button>
                </span>
            </div>`
});