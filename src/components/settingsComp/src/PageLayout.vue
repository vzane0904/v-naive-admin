<script lang="tsx">
import { themeStore } from '@/pinia/theme'
import { LayoutOptions } from './connfig.ts'
export default defineComponent({
  name: 'PageLayout',
  setup() {
    const store = themeStore()
    watch(
      () => store.layout,
      () => (store.siderFold = false),
    )
    return () => (
      <NRow class={['h-50px', 'themeBox', 'fle', 'justify-between']}>
        {LayoutOptions.map((item) => {
          return (
            <NCol span={5} class={['flex', 'justify-center']}>
              <NPopover
                placement={'bottom'}
                trigger={'hover'}
                v-slots={{
                  trigger: () => (
                    <div
                      class={[
                        'w-1/1 h-/1',
                        'box',
                        `box${item.id}`,
                        store.layout === item.id ? 'active' : '',
                      ]}
                      onClick={() => (store.layout = item.id)}
                    ></div>
                  ),
                  default: () => <div>{item.name}</div>,
                }}
              ></NPopover>
            </NCol>
          )
        })}
      </NRow>
    )
  },
})
</script>
<style lang="less" scoped>
.boxBeforeAfter(@width:0px,@height:0px,@index:0,@top:0px,@left:0px,@color:#273352) {
  position: absolute;
  top: @top;
  left: @left;
  z-index: @index;
  width: @width;
  height: @height;
  content: '';
  background-color: @color;
}

.themeBox {
  height: 50px;

  .box {
    overflow: hidden;
    background-color: #f0f2f5;
    border-radius: 4px;
    box-shadow: 0 1px 2.5px #1a17172e;
    border: 1px solid rgb(239, 239, 245);
    position: relative;
  }

  .box1 {
    &::before {
      .boxBeforeAfter(33.333%, 100%, 2, 0px, 0px);
    }
    &::after {
      .boxBeforeAfter(100%, 11px, 1, 0px, 0px, #fff);
    }
  }
  .box2 {
    &::before {
      .boxBeforeAfter(100%, 11px, 2, 0px, 0px);
    }
    &::after {
      .boxBeforeAfter(33.333%, 100%, 1, 0px, 0px, #fff);
    }
  }

  .box3 {
    &::before {
      .boxBeforeAfter(100%, 11px, 1, 0px, 0px);
    }
  }
  .box4 {
    background-color: #fff;
    &::before {
      .boxBeforeAfter(24%, 100%, 2, 0px, 0px);
    }
    &::after {
      .boxBeforeAfter(60%, 80%, 1, 20%, 40%, #f0f2f5) !important;
    }
  }
  .box:hover,
  .active {
    cursor: pointer;
    border: 2px solid #0960bd;
  }
}
</style>
