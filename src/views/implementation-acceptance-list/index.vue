<template>
    <div class="acceptance-list-page" ref="container">
        <van-nav-bar title="列表" />
        <van-search v-model="state.searchKey" placeholder="请输入搜索关键词" />
        <div class="list-container">
                <div class="acceptance-list-item" v-for="(item, index) in 15">
                <div class="item-title">
                    <div class="item-title-left">凤凰岭项目{{ item }}</div>
                    <div class="item-title-right">验收合格</div>
                </div>
                <div class="item-info">
                    <div class="info-date info-item">
                        <div class="info-item-label">验收时间：</div>
                        <div class="info-item-value">2021-01-01</div>
                    </div>
                    <div class="info-saler info-item">
                        <div class="info-item-label">销售经理：</div>
                        <div class="info-item-value">XXX</div>
                    </div>
                    <div class="implementation-person info-item">
                        <div class="info-item-label">实施人员：</div>
                        <div class="info-item-value">XXX</div>
                    </div>
                </div>
            </div>
        </div>
        <van-sticky :container="container" :offset-bottom="0">
            <van-button block type="warning" @click="onClickCreate">创建验收记录</van-button>
        </van-sticky>
    </div>
</template>

<script setup lang="ts" name="login">
import { reactive, ref } from 'vue';
import router from '@/router';
const state = reactive({
    searchKey: '',
});
const container = ref();
const onClickCreate = () => {
    router.push('/acceptance/create');
};
</script>
<style lang="less" scoped>
.acceptance-list-page {
    height: calc(100% - var(--status-bar-height, 0px) - var(--bottom-bar-height, 0px));
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.list-container{
    flex: 1;
    overflow-y: auto;
    .acceptance-list-item {
        width: 100%;
        .item-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #fff;
            .item-title-left {
                font-size: 16px;
                color: #333;
            }
            .item-title-right {
                font-size: 14px;
                color: #333;
        }
        }
        .item-info {
            padding: 5px 0;
            .info-item {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 0 20px;
                .info-item-label {
                    font-size: 12px;
                }
                .info-item-value {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>