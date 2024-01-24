/**
 * Copyright (C) 2021-2023
 * All rights reserved, Designed By www.bizspring.cn
 * 注意：
 * 本软件为www.bizspring.cn开发研制
 * 如需技术支持，请联系（微信电话同号）：16619915737
 */
export const tableOption = {
    dialogDrag: true,
    border: true,
    indexLabel: '序号',
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    menuType: 'text',
    searchShow: false,
    excelBtn: true,
    printBtn: true,
    viewBtn: true,
    labelWidth: 150,
    searchMenuSpan: 6,
    group: [
        {
            icon: 'el-icon-s-order',
            label: '基本信息',
            prop: 'group1',
            column: [
                {
                    label: '存储类型',
                    prop: 'storageType',
                    type: 'select',
                    dicUrl: '/upms/dict/type/storage_type',
                    rules: [{
                        required: true,
                        message: '请选择存储类型',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'endpoint',
                    prop: 'endpoint',
                    rules: [{
                        required: true,
                        message: 'endpoint不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'accessKeyId',
                    prop: 'accessKeyId',
                    rules: [{
                        required: true,
                        message: 'accessKeyId不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'accessKeySecret',
                    prop: 'accessKeySecret',
                    type:'password',
                    rules: [{
                        required: true,
                        message: 'accessKeySecret不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'bucket',
                    prop: 'bucket',
                    rules: [{
                        required: true,
                        message: 'bucket不能为空',
                        trigger: 'blur'
                    }]
                },
            ]
        },
        {
            icon: 'el-icon-picture',
            label: '图片配置',
            prop: 'group2',
            column: [
                {
                    label: '图片水印',
                    prop: 'waterMarkContent'
                }
            ]
        }]
}
