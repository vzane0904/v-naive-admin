import { colorFFF } from '@/config'
import { themeStore } from '@/pinia/modules/theme'
import { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides = (): GlobalThemeOverrides => {
  const store = themeStore()
  return {
    common: {
      primaryColor: store.themeColor,
      primaryColorSuppl: store.themeColor,
    },
    Layout: {
      siderColor: store.siderColor,
      siderColorInverted: store.siderColor,
      headerColor: store.headerColor, //store.headerColor
      // color: '#eff2f5',
      headerColorInverted: store.headerColor,
      peers: {},
    },
    Menu: {
      borderRadius: '0px',
      //白色模式
      color: store.layout === 3 ? store.headerColor : store.siderColor, //背景
      itemColorActiveInverted: '#0960bd1a', // 激活节点背景颜色
      itemTextColorActiveInverted: '#0960bd', // 激活节点字体颜色
      itemIconColorActiveInverted: '#0960bd', //激活图标颜色
      itemIconColorInverted: '#000000d9', //未激活图标颜色
      itemTextColorInverted: '#000000d9', //未激活文本颜色
      arrowColorInverted: '#000000d9', //未激活箭头颜色
      itemColorHoverInverted: '#0960bd1a',
      itemTextColorHoverInverted: '#0960bd', //鼠标移入字体颜色
      itemIconColorHoverInverted: '#0960bd', //鼠标移入图标颜色
      arrowColorHoverInverted: '#0960bd', //鼠标移入箭头颜色
      /*激活移入*/
      itemColorActiveHoverInverted: '#0960bd1a', //背景颜色
      itemIconColorActiveHoverInverted: '#0960bd', //icon颜色
      arrowColorActiveHoverInverted: '#0960bd', //箭头颜色
      itemTextColorActiveHoverInverted: '#0960bd', //文本颜色
      // 激活菜单为多级时 父节点配置
      itemIconColorChildActiveInverted: '#0960bd', //父节点icon颜色
      itemIconColorChildActiveHoverInverted: '#0960bd', // 父节点鼠标移入icon
      itemTextColorChildActiveInverted: '#0960bd', //父节点文本颜色
      arrowColorChildActiveInverted: '#0960bd', //父节点箭头颜色
      // 折叠状态
      // itemIconColorCollapsedInverted: 'red', //背景颜色
      itemIconColorCollapsedInverted: '#000000d9',
      // borderRadius: '0px',
      //深色模式
      colorInverted: store.layout === 3 ? store.headerColor : store.siderColor, //背景
      /*正常状态*/
      itemTextColor: '#ffffffb3', //一级菜单字体颜色
      itemIconColor: '#ffffffb3', //一级菜单图标颜色
      arrowColor: '#ffffffb3', //箭头颜色
      /*移入一级菜单*/
      itemColorHover: 'rgba(255,255,255,.2)', //背景颜色
      itemTextColorHover: colorFFF, //字体颜色
      itemIconColorHover: colorFFF, //图标颜色
      arrowColorHover: colorFFF, //如果移入的是二级菜单后边箭头颜色
      /*激活移入*/
      itemColorActiveHover: 'rgba(255,255,255,.2)', //背景颜色
      itemIconColorActiveHover: colorFFF, //icon颜色
      arrowColorActiveHover: colorFFF, //箭头颜色
      itemTextColorActiveHover: colorFFF, //文本颜色
      itemColorActive: 'rgba(255,255,255,.2)', //背景颜色
      /*通用 激活状态 不区分一二级*/
      itemTextColorActive: colorFFF, //激活字体颜色
      itemIconColorActive: colorFFF, //激活图标颜色
      arrowColorActive: colorFFF, //激活箭头字体颜色
      // 激活菜单为多级时 父节点配置
      itemIconColorChildActive: colorFFF, //父节点icon颜色
      itemTextColorChildActive: colorFFF, //父节点文本颜色
      itemTextColorChildActiveHover: colorFFF, //选中子节点 鼠标hover父节点时字体颜色
      itemIconColorChildActiveHover: colorFFF, //选中子节点 鼠标hover父节点时图标颜色
      arrowColorChildActiveHover: colorFFF, //选中子节点 鼠标hover父节点时箭头颜色
      arrowColorChildActive: colorFFF, //父节点箭头颜色
      // 折叠状态
      itemIconColorCollapsed: '#ffffffb3', //图标颜色
      itemColorActiveCollapsedInverted: '#0960bd0d', //白色背景
      itemColorActiveCollapsed: '#0960bd0d', //深色背景
      // 顶部菜单-白色背景
      itemIconColorHorizontalInverted: '#000000d9', //正常图标颜色
      itemTextColorHorizontalInverted: '#000000d9', //正常字体颜色
      itemTextColorActiveHorizontalInverted: '#0960bd', //激活时字体颜色
      itemIconColorActiveHorizontalInverted: '#0960bd', //激活时图标颜色
      itemIconColorHoverHorizontalInverted: '#0960bd', //鼠标移入
      itemTextColorHoverHorizontalInverted: '#0960bd', //鼠标移入
      itemIconColorActiveHoverHorizontalInverted: '#0960bd', //激活时移入图标颜色
      itemTextColorActiveHoverHorizontalInverted: '#0960bd', //激活时移入图标颜色
      // 激活菜单为多级时 父节点配置
      itemIconColorChildActiveHorizontalInverted: '#0960bd', //父节点icon颜色
      itemTextColorChildActiveHorizontalInverted: '#0960bd', //父节点文本颜色
      itemTextColorChildActiveHoverHorizontalInverted: '#0960bd', //选中子节点 鼠标hover父节点时字体颜色
      itemIconColorChildActiveHoverHorizontalInverted: '#0960bd', //选中子节点 鼠标hover父节点时图标颜色
      arrowColorChildActiveHoverInverted: '#0960bd', //选中子节点 鼠标hover父节点时箭头颜色
      // 深色背景
      itemIconColorHorizontal: '#ffffffb3', //正常图标颜色
      itemTextColorHorizontal: '#ffffffb3', //正常字体颜色
      itemTextColorActiveHorizontal: colorFFF, //激活时字体颜色
      itemIconColorActiveHorizontal: colorFFF, //激活时图标颜色
      itemIconColorHoverHorizontal: colorFFF, //鼠标移入
      itemTextColorHoverHorizontal: colorFFF, //鼠标移入
      itemIconColorActiveHoverHorizontal: colorFFF, //激活时移入图标颜色
      itemTextColorActiveHoverHorizontal: colorFFF, //激活时移入图标颜色
      // 激活菜单为多级时 父节点配置
      itemIconColorChildActiveHorizontal: colorFFF, //父节点icon颜色
      itemTextColorChildActiveHorizontal: colorFFF, //父节点文本颜色
      itemTextColorChildActiveHoverHorizontal: colorFFF, //选中子节点 鼠标hover父节点时字体颜色
      itemIconColorChildActiveHoverHorizontal: colorFFF, //选中子节点 鼠标hover父节点时图标颜色
      // arrowColorChildActiveHover: colorFFF, //选中子节点 鼠标hover父节点时箭头颜色
      peers: {
        Dropdown: {
          padding: '0',
          borderRadius: '0',
          // 深色
          color: store.layout === 3 ? store.headerColor : store.siderColor, //反转背景颜色
          optionColorActive: 'rgba(255,255,255,.2)', //折叠状态下激活背景颜色
          optionColorHover: 'rgba(255,255,255,.2)', //鼠标移入背景颜色
          optionTextColorHover: colorFFF, //鼠标移入文字颜色
          optionTextColorActive: colorFFF, //折叠状态下激活节点字体颜色
          optionTextColor: '#ffffffb3',
          prefixColor: '#ffffffb3', //图标颜色
          suffixColor: '#ffffffb3', //箭头颜色
          optionTextColorChildActive: '#fff',
          // 白色 浅颜色
          colorInverted:
            store.layout === 3 ? store.headerColor : store.siderColor, //反转背景颜色
          optionColorActiveInverted: '#0960bd1a', //折叠状态下整体背景颜色
          optionColorHoverInverted: '#0960bd1a', //鼠标移入背景颜色
          optionTextColorHoverInverted: '#0960bd', //鼠标移入文字颜色
          optionTextColorActiveInverted: '#0960bd', //折叠状态下激活节点字体颜色
          optionTextColorInverted: '#000000d9', //字体颜色
          prefixColorInverted: '#000000d9', //图标颜色
          optionTextColorChildActiveInverted: '#0960bd',
        },
      },
    },
    Button: {},
    Select: {
      peers: {
        InternalSelection: {},
      },
    },
    Typography: {
      headerMargin1: '0',
      headerMargin2: '0',
      headerMargin3: '0',
      headerMargin4: '0',
      headerMargin5: '0',
      headerMargin6: '0',
    },
    // ...
  }
}
export default themeOverrides
