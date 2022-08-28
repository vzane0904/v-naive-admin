import { MsgModalOptions, MsgOptions } from '@/type/message'
// import { Modal, notification } from 'ant-design-vue'
import { createVNode, h } from 'vue'
/**
 * @functionc 成功 失败 警告 提示 msg提示
 * @title 标题
 * @content 内容
 * @icon 传递class
 * @time 几秒后关闭
 * @key 每一次消息提示唯一标识
 * @position 出现位置  'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
 *
 **/
export const createSuccessMsg = (opiions: MsgOptions) => {
  // notification.open({
  //   message: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   description: opiions.content,
  //   icon: h('span', {
  //     style: 'color: #67c23a',
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-icon_smile'} `,
  //   }),
  //   duration: opiions.time || 3,
  //   key: opiions.key || String(Date.now() + Math.ceil(Math.random() * 1000)),
  //   placement: opiions.position || 'topRight',
  // })
}
export const createErrorMsg = (opiions: MsgOptions) => {
  // notification.open({
  //   message: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   description: opiions.content,
  //   icon: h('span', {
  //     style: 'color: red',
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-ku'} `,
  //   }),
  //   duration: opiions.time || 3,
  //   key: opiions.key || String(Date.now() + Math.ceil(Math.random() * 1000)),
  // })
}
export const createInfoMsg = (opiions: MsgOptions) => {
  // notification.open({
  //   message: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   description: opiions.content,
  //   icon: h('span', {
  //     style: 'color: #909399',
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-tishi1'} `,
  //   }),
  //   duration: opiions.time || 3,
  //   key: opiions.key || String(Date.now() + Math.ceil(Math.random() * 1000)),
  // })
}
export const createWarningMsg = (opiions: MsgOptions) => {
  // notification.open({
  //   message: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   description: opiions.content,
  //   icon: h('span', {
  //     style: 'color:#e6a23c',
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-tixing'} `,
  //   }),
  //   duration: opiions.time || 3,
  //   key: opiions.key || String(Date.now() + Math.ceil(Math.random() * 1000)),
  // })
}
/**
 * @functionc 成功 失败 警告 提示 model提示
 * @title 标题
 * @content 内容
 * @icon 传递class
 * @okText 确定按钮文本
 * @mask 是否展示遮罩
 * @maskClosable 点击蒙层是否允许关闭
 * @onOk 点击ok触发事件 return promise
 *  ok: () => {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          })
        }
 **/
export const createSuccessModal = (opiions: MsgModalOptions) => {
  // Modal.success({
  //   title: opiions.title,
  //   icon: h('span', {
  //     style: `float: left;margin:-6px  16px 0 0;font-size: 22px;color:#67c23a;`,
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-icon_smile'} `,
  //   }),
  //   content: createVNode('div', { style: 'margin-left:38px' }, opiions.content),
  //   okText: opiions.okText || '确定',
  //   mask: opiions.mask || true,
  //   maskClosable: opiions.maskClosable || true,
  //   keyboard: opiions.keyboard || true,
  //   maskStyle: { backgroundColor: 'rgba(192,192,192,0.3)' },
  //   onOk: () => (opiions.ok ? opiions.ok() : false),
  // })
}
export const createErrorModal = (opiions: MsgModalOptions) => {
  // Modal.error({
  //   title: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   icon: h('span', {
  //     style: `float: left;margin:-6px  16px 0 0;font-size: 22px;color:red;`,
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-ku'} `,
  //   }),
  //   content: createVNode('div', { style: 'margin-left:38px' }, opiions.content),
  //   okText: opiions.okText || '确定',
  //   mask: opiions.mask || true,
  //   maskClosable: opiions.maskClosable || true,
  //   keyboard: opiions.keyboard || true,
  //   maskStyle: { backgroundColor: 'rgba(192,192,192,0.3)' },
  //   onOk: () => (opiions.ok ? opiions.ok() : false),
  // })
}
export const createInfoModal = (opiions: MsgModalOptions) => {
  // Modal.info({
  //   title: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   icon: h('span', {
  //     style: `float: left;margin:-6px  16px 0 0;font-size: 22px;color:#909399;`,
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-tishi1'} `,
  //   }),
  //   content: createVNode('div', { style: 'margin-left:38px' }, opiions.content),
  //   okText: opiions.okText || '确定',
  //   mask: opiions.mask || true,
  //   maskClosable: opiions.maskClosable || true,
  //   keyboard: opiions.keyboard || true,
  //   maskStyle: { backgroundColor: 'rgba(192,192,192,0.3)' },
  //   onOk: () => (opiions.ok ? opiions.ok() : false),
  // })
}
export const createWarningModal = (opiions: MsgModalOptions) => {
  // Modal.warning({
  //   title: createVNode(
  //     'b',
  //     { style: 'color:#303133;font-weight: 700;font-size: 16px' },
  //     `${opiions.title}`,
  //   ),
  //   icon: h('span', {
  //     style: `float: left;margin:-6px  16px 0 0;font-size: 24px;color:#e6a23c;`,
  //     class: `yc-iconfont ${opiions.iconClass || 'yc-icon-tixing'} `,
  //   }),
  //   content: createVNode('div', { style: 'margin-left:38px' }, opiions.content),
  //   okText: opiions.okText || '确定',
  //   mask: opiions.mask || true,
  //   maskClosable: opiions.maskClosable || true,
  //   keyboard: opiions.keyboard || true,
  //   maskStyle: { backgroundColor: 'rgba(192,192,192,0.3)' },
  //   onOk: () => (opiions.ok ? opiions.ok() : false),
  // })
}
