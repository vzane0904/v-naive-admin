// import Clipboard from 'clipboard'
import ClipboardJS from 'clipboard'
/**
 * 复制文字到剪贴板中
 * @param {String} str
 */
export function useCopyToClipboard(str: string) {
  const clipboard = new ClipboardJS('.btn', {
    text: function () {
      return 'to be or not to be'
    },
  })

  clipboard.on('success', function (e) {
    console.info('ok:')
  })

  clipboard.on('error', function (e) {
    console.info('e:')
  })

  // const el: HTMLTextAreaElement = document.createElement('textarea')
  // el.setAttribute('class', 'textarea')
  // el.value = str
  // // el.style.position = 'absolute'
  // // el.style.left = '-99999px'
  // // el.style.fontSize = '12pt'
  // document.body.append(el)
  // const clipboard = new Clipboard('.textarea')
  // //成功回调
  // clipboard.on('success', function (e) {
  //   console.info('Action:', e.action)
  //   console.info('Text:', e.text)
  //   console.info('Trigger:', e.trigger)
  //   e.clearSelection()
  // })
  // //失败回调
  // clipboard.on('error', function (e) {
  //   console.error('Action:', e.action)
  //   console.error('Trigger:', e.trigger)
  // })
  // document.body.removeChild(el)

  // const el: HTMLTextAreaElement = document.createElement('textarea')
  // el.value = str
  // el.setAttribute('readonly', 'false')
  // el.setAttribute('contenteditable', 'true')
  // el.style.position = 'absolute'
  // el.style.left = '-99999px'
  // el.style.fontSize = '12pt'
  // document.body.append(el)
  // // 保存原有的选择区域
  // const selection: Selection = document.getSelection()!
  // const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false
  // el.select()
  // el.setSelectionRange(0, el.textLength) // iOS 中使用 select() 函数无效
  // console.log(el.value)

  // let flag = false
  // try {
  //   flag = document.execCommand('copy')
  // } catch (e: any) {
  //   throw new Error(e)
  // }
  // // document.body.removeChild(el)
  // if (selected) {
  //   selection.removeAllRanges()
  //   selection.addRange(selected)
  // }
  // return flag
}
