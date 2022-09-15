import { themeStore } from '@/pinia/modules/theme'
import { ProjectConfig } from '@/type/config'

export const useOptions = () => {
  const {
    layout,
    themeColor,
    progressBar,
    headerColor,
    headerHeight,
    language,
    isFullScreen,
    showLanGuaGe,
    showTopSet,
    foldBtnPosition,
    showLogo,
    siderColor,
    siderFold,
    siderWidth,
    showSider,
    isAccordion,
    footerHeight,
    showFooter,
    showTabs,
    showRefresh,
  } = storeToRefs(themeStore())
  const obj: ProjectConfig = {
    layout: layout.value,
    themeColor: themeColor.value,
    progressBar: progressBar.value,
    header: {
      color: headerColor.value,
      height: headerHeight.value,
      language: language.value,
      isFullScreenBtn: isFullScreen.value,
      showLanGuaGe: showLanGuaGe.value,
      showTopSet: showTopSet.value,
      foldBtnPosition: foldBtnPosition.value,
      showLogo: showLogo.value,
    },
    sider: {
      color: siderColor.value,
      fold: siderFold.value,
      width: siderWidth.value,
      showSider: showSider.value,
      isAccordion: isAccordion.value,
    },
    footer: {
      height: footerHeight.value,
      showFooter: showFooter.value,
    },
    tabs: {
      showTabs: showTabs.value,
      showRefresh: showRefresh.value,
    },
  }

  const options = ref('')
  options.value = JSON.stringify(obj, null, 2)
  return options
}
