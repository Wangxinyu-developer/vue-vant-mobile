<template>
    <div class="acceptance-create-page" ref="container">
        <van-nav-bar
            title="新建"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="form-container">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                        v-model="state.projectName"
                        name="项目名称"
                        label="项目名称"
                        placeholder="项目名称"
                        :rules="[{ required: true, message: '请填写项目名称' }]"
                    />
                    <van-field
                        v-model="state.address"
                        name="项目地址"
                        label="项目地址"
                        placeholder="请填写项目地址"
                        :rules="[{ required: true, message: '请填写项目地址' }]"
                    />
                    <van-field
                        v-model="state.company"
                        name="所属单位"
                        label="所属单位"
                        placeholder="请填写所属单位"
                        :rules="[{ required: true, message: '请填写所属单位' }]"
                    />
                    <van-field
                        v-model="state.contact"
                        name="联系人"
                        label="联系人"
                        placeholder="请填写联系人"
                        :rules="[{ required: true, message: '请填写联系人' }]"
                    />
                    <van-field
                        v-model="state.contactPhone"
                        name="联系人电话"
                        label="联系人电话"
                        placeholder="请填写联系人电话"
                        :rules="[{ required: true, message: '请填写联系人电话' }]"
                    />
                    <van-field
                        v-model="state.hardwareName"
                        name="硬件名称"
                        label="硬件名称"
                        placeholder="请填写硬件名称"
                        :rules="[{ required: true, message: '请填写硬件名称' }]"
                    />
                    <van-field
                        name="数量"
                        label="数量"
                    >
                        <template #input>
                            <van-field
                                v-model="state.number"
                                placeholder="请填写硬件数量"
                                style="width: 50%;padding: 0;"
                                :rules="[{ required: true, message: '请填写硬件数量' }]"
                            />
                            <van-field
                                v-model="state.number"
                                is-link
                                readonly
                                name="picker"
                                placeholder="单位"
                                :rules="[{ required: true, message: '请选择单位' }]"
                                style="width: 40%;padding: 0 0 0 20px;"
                                @click="openSelectPicker('units')"
                            ></van-field>
                        </template>
                    </van-field>
                    <van-field
                        v-model="state.position"
                        name="安装位置"
                        label="安装位置"
                        placeholder="请填写安装位置"
                        :rules="[{ required: true, message: '请填写安装位置' }]"
                    />
                    <van-field
                        label="现场照片"
                        name="uploader"
                        :rules="[{ required: true, message: '请填写现场照片' }]"
                    >
                        <template #input>
                            <van-uploader v-model="state.photos" />
                        </template>
                    </van-field>
                    <van-field
                        v-model="state.startDate"
                        is-link
                        readonly
                        @click="openDatePicker('startDate')"
                        name="开始安装日期"
                        label="开始安装日期"
                        placeholder="请填写开始安装日期"
                        :rules="[{ required: true, message: '请填写开始安装日期' }]"
                    />
                    <van-popup v-model:show="state.showPicker" position="bottom">
                        <van-date-picker @confirm="onConfirm" @cancel="state.showPicker = false" />
                    </van-popup>
                    <van-field
                        v-model="state.acceptanceDate"
                        is-link
                        readonly
                        @click="openDatePicker('acceptanceDate')"
                        name="验收日期"
                        label="验收日期"
                        placeholder="请填写验收日期"
                        :rules="[{ required: true, message: '请填写验收日期' }]"
                    />
                    <van-field
                        name="radio"
                        label="验收结论"
                        :rules="[{ required: true, message: '请填写验收结论' }]"
                    >
                        <template #input>
                            <van-radio-group v-model="state.conclusion" direction="horizontal">
                                <van-radio name="1">验收合格</van-radio>
                                <van-radio name="2">整改后进行复查</van-radio>
                            </van-radio-group>
                        </template>
                    </van-field>
                    <van-field
                        v-model="state.suggestion"
                        name="验收意见"
                        label="验收意见"
                        placeholder="请填写验收意见"
                        :rules="[{ required: true, message: '请填写验收意见' }]"
                    />
                    <van-field
                        v-model="state.salesManager"
                        is-link
                        readonly
                        name="picker"
                        label="销售经理"
                        placeholder="请填写销售经理"
                        :rules="[{ required: true, message: '请填写销售经理' }]"
                        @click="openSelectPicker('salesManager')"
                    />
                    <van-field
                        v-model="state.implementer"
                        is-link
                        readonly
                        name="picker"
                        label="安装单位实施人员"
                        placeholder="请填写安装单位实施人员"
                        :rules="[{ required: true, message: '请填写安装单位实施人员' }]"
                        @click="openSelectPicker('implementer')"
                    />
                    <van-popup v-model:show="state.showSelectPicker" position="bottom">
                        <van-picker
                            :columns="state.selectOptions"
                            @confirm="onConfirmSelect"
                            @cancel="state.showSelectPicker = false"
                        />
                    </van-popup>
                    <van-field
                        v-model="state.projectManager"
                        name="项目负责人"
                        label="项目负责人"
                        placeholder="请填写项目负责人"
                        :rules="[{ required: true, message: '请填写项目负责人' }]"
                    />
                    <van-field
                        name="button"
                        label="项目负责人"
                    >
                        <template #input>
                            <van-button round block type="primary" @click="toEsign">
                                电子签名
                            </van-button>
                        </template>
                    </van-field>
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
        </div>
        
    </div>
</template>

<script setup lang="ts" name="acceptanceCreate">
import { reactive, ref } from 'vue';
import router from '@/router';
const state = reactive({
    // 项目名称
    projectName: '',
    // 项目地址
    address: '',
    // 所属单位
    company: '',
    // 联系人
    contact: '',
    // 联系人电话
    contactPhone: '',
    // 硬件名称
    hardwareName: '',
    // 数量
    number: '',
    // 单位
    units: '',
    // 安装位置
    position: '',
    // 现场照片
    photos: [],
    // 开始安装日期
    startDate: '',
    // 验收日期
    acceptanceDate: '',
    // 验收结论
    conclusion: '',
    // 验收意见
    suggestion: '',
    // 验收意见
    remark: '',
    // 销售经理
    salesManager: '',
    // 安装单位实施人员
    implementer: '',
    // 项目负责人
    projectManager: '',
    showPicker: false,
    dateSelectAttr: 'startDate',
    showSelectPicker: false,
    selectOptions: [],
    selectedAttr: 'salesManager'
});
const onClickLeft = () => {
    router.go(-1);
};
const onSubmit = (values: any) => {
    console.log('submit', values);
};
const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
    switch(state.dateSelectAttr) {
        case 'startDate':
            state.startDate = selectedValues.join('/');
            break;
        case 'acceptanceDate':
            state.acceptanceDate = selectedValues.join('/');
            break;
    }
    // state[`${state.dateSelectAttr}`] = selectedValues.join('/');
    state.showPicker = false;
};
const openDatePicker = (type: string) => {
    state.dateSelectAttr = type;
    state.showPicker = true;
};
const onConfirmSelect = ({ selectedOptions }: { selectedOptions: any[] }) => {
    // state[`${state.selectedAttr}`] = selectedOptions[0]?.text;
    switch(state.selectedAttr) {
        case 'salesManager':
            state.salesManager = selectedOptions[0]?.text;
            break;
        case 'implementer':
            state.implementer = selectedOptions[0]?.text;
            break;
    }
    state.showSelectPicker = false;
};
const openSelectPicker = (type: string) => {
    state.showSelectPicker = true;
    state.selectedAttr = type;
};
const toEsign = () => {
    router.push('/acceptance/esign');
};
</script>
<style lang="less" scoped>
.acceptance-create-page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .form-container {
        flex: 1;
        overflow-y: auto;
    }
}
</style>