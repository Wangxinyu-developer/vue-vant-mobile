<template>
    <div class="acceptance-detail-page" ref="container">
        <van-nav-bar
            :title="state.detailTitle"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="form-container">
            <van-form @submit="onSubmit" :readonly="!state.editStatus">
                <van-cell-group inset>
                    <van-field
                        v-model="state.vantForm.projectName"
                        readonly
                        name="projectName"
                        label="项目名称"
                        placeholder="项目名称"
                        :rules="[{ required: true, message: '请填写项目名称' }]"
                        @click="openProjectPopup"
                    />
                    <van-field
                        v-model="state.vantForm.address"
                        name="address"
                        label="项目地址"
                        placeholder="请填写项目地址"
                    />
                    <van-field
                        v-model="state.vantForm.company"
                        name="company"
                        label="所属单位"
                        placeholder="请填写所属单位"
                    />
                    <van-field
                        v-model="state.vantForm.contact"
                        name="contact"
                        label="联系人"
                        placeholder="请填写联系人"
                    />
                    <van-field
                        v-model="state.vantForm.contactPhone"
                        name="contactPhone"
                        label="联系人电话"
                        placeholder="请填写联系人电话"
                    />
                    <template v-for="(item, index) in state.vantForm.hardwareInfo">
                        <van-field
                            name="硬件名称"
                            label="硬件名称"
                        >
                            <template #input>
                                <van-field
                                    v-model="item['hardwareName']"
                                    placeholder="请填写硬件名称"
                                    :rules="[{ required: true, message: '请填写硬件名称' }]"
                                    style="width: 100%;padding: 0;"
                                />
                                <van-icon name="add-o" v-if="index === state.vantForm.hardwareInfo.length-1 && isEditStatus()" @click="addHardware" /> 
                            </template>
                        </van-field>
                        <van-field
                            name="数量"
                            label="数量"
                        >
                            <template #input>
                                <van-field
                                    v-model="item['number']"
                                    placeholder="请填写硬件数量"
                                    style="width: 50%;padding: 0;"
                                    :rules="[{ required: true, message: '请填写硬件数量' }]"
                                />
                                <van-field
                                    v-model="item['units']"
                                    is-link
                                    readonly
                                    name="picker"
                                    placeholder="单位"
                                    :rules="[{ required: true, message: '请选择单位' }]"
                                    style="width: 50%;padding: 0 0 0 20px;"
                                    @click="openSelectPicker('units')"
                                />
                            </template>
                        </van-field>
                        <van-field
                            v-model="item['position']"
                            name="安装位置"
                            label="安装位置"
                            placeholder="请填写安装位置"
                            :rules="[{ required: true, message: '请填写安装位置' }]"
                        />
                        <van-field
                            label="现场照片"
                            name="uploader"
                        >
                            <template #input>
                                <van-uploader v-model="item['photos']" :show-upload="isEditStatus()" />
                            </template>
                        </van-field>
                    </template>
                    <van-field
                        v-model="state.vantForm.startDate"
                        is-link
                        readonly
                        @click="openDatePicker('startDate')"
                        name="开始安装日期"
                        label="开始安装日期"
                        placeholder="请填写开始安装日期"
                    />
                    <van-field
                        v-model="state.vantForm.acceptanceDate"
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
                            <van-radio-group v-if="isEditStatus()" v-model="state.vantForm.conclusion" direction="horizontal">
                                <van-radio name="1">验收合格</van-radio>
                                <van-radio name="2">整改后进行复查</van-radio>
                            </van-radio-group>
                            <span v-else>{{ state.vantForm.conclusion }}</span>
                        </template>
                    </van-field>
                    <van-field
                        v-model="state.vantForm.suggestion"
                        name="验收意见"
                        label="验收意见"
                        placeholder="请填写验收意见"
                    />
                    <van-field
                        v-model="state.vantForm.salesManager"
                        name="picker"
                        label="销售经理"
                        :rules="[{ required: true, message: '请填写销售经理' }]"
                        @click="openMultiSelect('salesManager')"
                    >
                        <template #input>
                            <span>{{ state.vantForm.salesManager.length ? state.vantForm.salesManager : '请选择' }}</span>
                        </template>
                    </van-field>
                    <van-field
                        v-model="state.vantForm.implementer"
                        label="安装单位实施人员"
                        :rules="[{ required: true, message: '请填写安装单位实施人员' }]"
                        @click="openMultiSelect('implementer')"
                    >
                        <template #input>
                            <span>{{ state.vantForm.implementer.length ? state.vantForm.implementer : '请选择' }}</span>
                        </template>
                    </van-field>
                    <van-field
                        name="button"
                        label="项目负责人"
                    >
                        <template #input>
                            <van-image
                                v-if="state.vantForm.signBase64"
                                width="200"
                                height="100"
                                :src="state.vantForm.signBase64"
                                @click="toEsign"
                            />
                            <van-button v-else round block type="primary" @click="toEsign">
                                电子签名
                            </van-button>
                        </template>
                    </van-field>
                    <van-popup v-model:show="state.showPicker" position="bottom">
                        <van-date-picker @confirm="onConfirm" @cancel="state.showPicker = false" />
                    </van-popup>
                    <van-popup v-model:show="state.showSelectPicker" position="bottom">
                        <van-picker
                            :columns="state.selectOptions"
                            @confirm="onConfirmSelect"
                            @cancel="state.showSelectPicker = false"
                        />
                    </van-popup>
                    <van-popup v-model:show="state.showMultiSelect" position="bottom" class="search-data-popup">
                        <div class="header-line">
                            <div class="cancel" @click="cancelMultiple">取消</div>
                            <div class="sure" @click="confirmMultiple">确认</div>
                        </div>
                        <div class="lists">
                            <div
                                v-for="item in state.selectMultiOptions"
                                class="line"
                                @click="multiOptionsClickHandler(item)"
                            >
                                <div class="name">{{ item.text }}</div>
                                <van-icon name="success" v-if="computeMultiStatus(item)" />
                            </div>
                        </div>
                    </van-popup>
                    <van-popup v-model:show="state.showProjectFilter" position="bottom">
                        <div class="from-popup">
                            <van-picker show-toolbar :columns="state.projectOptions" @confirm="projectConfirm" @cancel="projectCancel">
                                <template #title>
                                    <div class="from-popup-field">
                                        <van-field
                                            v-model="state.projectFilterString"
                                            placeholder="输入项目名称"
                                            :center='true'
                                            @update:model-value="onChange"
                                            clearable
                                        />
                                    </div>
                                </template>
                            </van-picker>
                        </div>
                    </van-popup>
                </van-cell-group>
                <van-action-bar>
                    <van-action-bar-button v-if="!state.editStatus" color="#7232dd" type="danger" text="编 辑" @click="state.editStatus = true;" />
                    <template v-else>
                        <van-action-bar-button color="#7232dd" type="danger" text="确 定"  native-type="submit" />
                        <van-action-bar-button color="#be99ff" type="warning" text="取 消" @click="state.editStatus = false;" />
                    </template>
                </van-action-bar>
            </van-form>
        </div>
    </div>
</template>

<script setup lang="ts" name="acceptanceCreate">
import { onMounted, reactive } from 'vue';
import router from '@/router';
import _ from 'lodash';
const state = reactive({
    vantForm: {
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
        // 硬件信息
        hardwareInfo: [] as EmptyArrayType,
        // 开始安装日期
        startDate: '',
        // 验收日期
        acceptanceDate: '',
        // 验收结论
        conclusion: '',
        // 验收意见
        suggestion: '',
        // 销售经理
        salesManager: "",
        // 安装单位实施人员
        implementer: "",
        // 项目负责人
        projectManager: '',
        // 电子签名
        signBase64: ''
    },
    // 单个硬件信息
    singleHardwareInfo: {
        // 硬件名称
        hardwareName: '',
        // 数量
        number: '',
        // 单位
        units: '',
        // 安装位置
        position: '',
        // 现场照片
        photos: []
    },
    // 日期选择控件显隐控制
    showPicker: false,
    // 日期选择控件属性 默认为开始安装日期
    dateSelectAttr: 'startDate',
    // 选择控件显隐控制
    showSelectPicker: false,
    // 选择控件下拉选项集合
    selectOptions: [] as EmptyArrayType,
    // 选择控件属性 默认为单位
    selectedAttr: 'units',
    // 多选控件显隐控制
    showMultiSelect: false,
    // 多选控件下拉选项集合 默认为销售经理
    selectedMultiAttr: 'salesManager',
    // 多选控件下拉选项集合
    selectMultiOptions: [] as EmptyArrayType,
    // 临时选中数据存储
    tempMultiSelect: '',
    // 项目名称筛选字段
    projectFilterString: '',
    // 项目筛选popup显隐控制
    showProjectFilter: false,
    // 项目列表
    projectOptions: [] as EmptyArrayType,
    // 原始的项目列表
    originProjectOptions: [] as EmptyArrayType,
    // 详情页标题
    detailTitle: '详情',
    // 详情页编辑状态
    editStatus: false
});
onMounted(() => {
    state.vantForm.hardwareInfo.push(state.singleHardwareInfo);
    state.selectOptions = [
        { text: 1, value: 1 },
        { text: 2, value: 2 }
    ];
    state.projectOptions = [
        { text: '项目a1', value: 1 },
        { text: '项目b2', value: 2 }
    ];
    state.originProjectOptions = _.cloneDeep(state.projectOptions);
    if(router.currentRoute.value.query.esignPic) {
        // state.vantForm.hardwareInfo = JSON.parse(router.currentRoute.value.params.esignPic);
        // alert(router.currentRoute.value.query.esignPic);
        state.vantForm.signBase64 = router.currentRoute.value.query.esignPic;
    }
});
const onChange = () => {
    console.log('state.projectFilterString is', state.projectFilterString);
    
    if(state.projectFilterString==="") {
        state.projectOptions = _.cloneDeep(state.originProjectOptions)
    }else {
        state.projectOptions = state.originProjectOptions.filter(item => item.text.includes(state.projectFilterString))
    }
}
const projectConfirm = () => {
    state.showProjectFilter = false; 
}
const projectCancel = () => {
    state.showProjectFilter = false;
}
const isEditStatus = () => {
    return state.editStatus;
}
const openProjectPopup = () => {
    if(!isEditStatus()) return;
    state.showProjectFilter = true;
}
const computeMultiStatus = (val: any) => {
    let result = false;
    switch(state.selectedMultiAttr) {
        case 'salesManager':
            let compareList = state.vantForm.salesManager.split(',');
            result = compareList.some(im => im === val.value)
            break;
        case 'implementer':
            // TODO 待实现 不匹配  保持一致 text value
            let compareListi = state.vantForm.implementer.split(',');
            result = compareListi.some(im => im === val.text)
            break;
    }
    return result;
}
const confirmMultiple = () => {
    state.showMultiSelect = false;
}
const cancelMultiple = () => {
    switch(state.selectedMultiAttr) {
        case 'salesManager':
            state.vantForm.salesManager = state.tempMultiSelect;
            break;
        case 'implementer':
            state.vantForm.implementer = state.tempMultiSelect;
            break;
    }
    state.showMultiSelect = false;
}
// 多选弹窗备选项点击事件
const multiOptionsClickHandler = (val: any) => {
    
    switch(state.selectedMultiAttr) {
        case 'salesManager':
            let temp = state.vantForm.salesManager.split(',');
            if(state.vantForm.salesManager.includes(val.text)) {
                let target = temp.filter(item => item !== val.text);
                state.vantForm.salesManager = target.join(',');
            }else {
                temp.push(val.text);
                if(!temp[0]) {
                    state.vantForm.salesManager = temp[1];
                }else {
                    state.vantForm.salesManager = temp.join(',');
                }
            }
            break;
        case 'implementer':
            let tempi = state.vantForm.implementer.split(',');
            if(state.vantForm.implementer.includes(val.text)) {
                let target = tempi.filter(item => item !== val.text);
                state.vantForm.implementer = target.join(',');
            }else {
                tempi.push(val.text);
                if(!tempi[0]) {
                    state.vantForm.implementer = tempi[1];
                }else {
                    state.vantForm.implementer = tempi.join(',');
                }
            }
            break;
    }
}
// 获取数量单位信息
const getUnits = () => {
    const defaultUnits = [
        { text: '个', value: '个' },
        { text: '台', value: '台' },
        { text: '套', value: '套' },
        { text: '箱', value: '箱' },
        { text: '卷', value: '卷' },
        { text: '瓶', value: '瓶' },
        { text: '箱', value: '箱' },
    ];
    return defaultUnits;
};
// 获取销售经理信息
const getSalesManager = () => {
    const defaultSalesManager = [
        { text: '张三', value: '张三' },
        { text: '李四', value: '李四' },
        { text: '王五', value: '王五' },
        { text: '赵六', value: '赵六' },
        { text: '孙七', value: '孙七' },
        { text: '周八', value:'周八' },
    ]; 
    return defaultSalesManager;
};

// 获取安装单位实施人员信息
const getImplementer = () => {
    const defaultImplementer = [
        { text: '张三i', value: '张三' },
        { text: '李四i', value: '李四' },
        { text: '王五i', value: '王五' },
        { text: '赵六i', value: '赵六' },
        { text: '孙七i', value: '孙七' },
        { text: '周八i', value:'周八' }
    ];
    return defaultImplementer;
};

const onClickLeft = () => {
    router.go(-1);
};
const onSubmit = (values: any) => {
    console.log('submit', values, state.vantForm);
};
const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
    switch(state.dateSelectAttr) {
        case 'startDate':
            state.vantForm.startDate = selectedValues.join('/');
            break;
        case 'acceptanceDate':
            state.vantForm.acceptanceDate = selectedValues.join('/');
            break;
    }
    state.showPicker = false;
};
const openDatePicker = (type: string) => {
    if(!isEditStatus()) return;
    state.dateSelectAttr = type;
    state.showPicker = true;
};
const onConfirmSelect = ({ selectedOptions }: { selectedOptions: any[] }) => {
    switch(state.selectedAttr) {
        case 'salesManager':
            state.vantForm.salesManager = selectedOptions[0]?.text;
            break;
    }
    state.showSelectPicker = false;
};
// 打开单位popup
const openSelectPicker = (type: string) => {
    if(!isEditStatus()) return;
    state.showSelectPicker = true;
    state.selectedAttr = type;
    switch(type) {
        case 'units':
            state.selectOptions = getUnits();
            break;
    }
};
// 获取销售经理/实现人  打开多选 popup
const openMultiSelect = (type: string) => {
    if(!isEditStatus()) return;
    state.showMultiSelect = true;
    state.selectedMultiAttr = type;
    switch(type) {
        case 'salesManager':
            state.tempMultiSelect = state.vantForm.salesManager;
            state.selectMultiOptions = getSalesManager();
            break;
        case 'implementer':
            state.tempMultiSelect = state.vantForm.implementer;
            state.selectMultiOptions = getImplementer();
            break;
    }
};
const toEsign = () => {
    if(!isEditStatus()) return;
    router.push('/acceptance/esign');
};
const addHardware = () => {
    state.vantForm.hardwareInfo.push(state.singleHardwareInfo);
};
</script>
<style lang="less" scoped>
.acceptance-detail-page {
    width: 100vw;
    height: calc(100% - var(--status-bar-height, 0px) - var(--bottom-bar-height, 0px));
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .form-container {
        flex: 1;
        overflow-y: auto;
        padding-bottom: var(--bottom-bar-height, 50px);
    }

.search-data-popup {
    .header-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        .cancel {
        padding: 0 16px;
        font-size: 14px;
        color: #969799;
        }
        .sure {
        padding: 0 16px;
        font-size: 14px;
        color: #576b95;
        }
    }
        .lists {
            display: flex;
            flex-direction: column;
            padding: 10px 12px 20px 12px;
            height: 200px;
            overflow: auto;
            .line {
            line-height: 40px;
            font-size: 16px;
            color: #000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
            .van-icon {
            color: #005bff;
            }
        }
    }
}
.from-popup-field .van-field__control {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        color: #323233;
        line-height: inherit;
        text-align: center;
        background-color: rgb(229, 230, 231);
        border: 0;
        resize: none;
    }
    .from-popup .van-picker__cancel {
        color: #fc9153;
    }
    .from-popup .van-picker__confirm{
        color: #fc9153;
    }
</style>