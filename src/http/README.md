# Admin/axios

当前最新版本： 1.0.0（发布日期：2021-12-1）

## Overview

基于 [Axios](http://www.axios-js.com/) 实现封装

#### 文件目录 src/HTTP

1. axios.ts 实现封装逻辑
2. index.ts 导出的 http 实例 包括默认的一些配置
3. type.ts interface 一些定义

## 功能

1. 配置项均可以在请求在覆盖
2. headers 内 Content-Type 类型在 utils/enum[ContentTypeEnum] 已定义 需要的时候 ContentTypeEnum.JSON 取对应的就可以
3. requestOptions 自定义配置项

#### requestOptions 配置项

- isReturnNativeResponse 请求成功后是否返回未处理的 Response 默认 false
- errorMessageModal 请求失败时对错误信息提示 可选项 msg modal none 默认 msg
- joinTime 是否加入时间戳 默认字段 time 默认加入
- ignoreRequest 是否忽略重复请求 默认忽略重复请求
- ignoreMsg 如果有重复的请求 默认 cancel(ignoreMsg) 提示信息 默认提示文字 请求重复,请稍后重试
- withToken 是否携带 token 默认带 优先从 pinia 中获取在从 local 取
- isInterval 是否开启重试 默认不开启
- count 重试次数 默认 3 次
- interval 重试间隔 默认 1500ms
- config 中 RETRY_COUNTCODE 可以配置哪些状态码直接重试不需要单独设置

````

## 使用方式

1.  请求方法 method [get|post|delete|put|patch|]
    第一个参数 url
    第二个参数 body 数据
    第三个参数 配置项(都是可选，可以不传)
    {
    timeout:number//超时时间
    headers:{}//请求头参数
    requestOptions:{
    //自定义配置
    joinTime//是否携带时间戳 get 防止缓存 默认字段 time
    withToken//是否携带 token 默认携带 如果要设置某个 url 不携带 withToken 不需要配置，在 config/config.ts filterRequestUrl 数组中把不需要带 token 的 url 添加进去即可
    errorMessageModal 当请求异常的是 使用什么模式提示 msg|modal|none 默认是 msg
    isReturnNativeResponse 是否需要原生响应头 默认不返回
    ignoreRequest 是否忽略重复请求 url method params data 相等就默认是同一个请求
    ignoreMsg 如果要取消请求 可以配置取消信息 用于 response error 返回错误信息使用
    id 用于手动取消时的唯一标识 不需要在 axios.CancelToken.source().token 具体使用看 2
    }
    }
    <!-- 使用方式 -->
    http.get('/api/json', { d: '11111adasdasd' }, { timeout: 10010, headers: { 'Content-Type': ContentTypeEnum.JSON, id: '112122233' }, requestOptions: { joinTime: true, withToken: false, errorMessageModal: AxiosErrorTip.MODAL, isReturnNativeResponse: false, ignoreRequest: false, } }).then(res => {
    console.log('res', res);
    }, error => {
    console.log('error', error);
    })

2.手动调用取消事件
由于在请求头中已经配置 cancel 所以不需要在重复定义
首先在发起请求前调用 uuid() 生成唯一标识，在 requestOptions 配置中通过 id 传递过去 如果设置了忽略重复请求则忽略重复请求取消事件优先级最高，手动取消则无效 如果有重复请求取消的是上一个请求，以现在最新的请求为准
在请求后边使用
let time = setTimeout(() => {
store.commit('axiosRequest/cancelSingle', { id: id, msg: '自定义取消 11' })||在 setup 中使用 useStore 调 pinia 事件
clearTimeout(time)
}, 0);
返回 error 信息
{
status: 4004
statusText: "自定义取消内容"
success: false
}

```

## 失败返回结果

1.如果是重复取消
{
status: 4004//取消请求的状态码
statusText: 通过 ignoreMsg 配置提示错误信息，如果不传默认信息为 (请求重复,请稍后重试)
success: false
}

## 备注
1.忽略重复请求判断的是 url 请求方式 data params 假如列表接口————点击第一页时在 pending 中，这时点击第二页，理应应该取消第一页的 这时候判断的话就不是一个重复请求 实际业务中是重复了 可以用 loading 解决 但不是很完美
2.支持性不是太多，如果有其他需求可以继续封装
```
````
