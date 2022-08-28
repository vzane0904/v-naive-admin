<script lang="tsx">
import { defineComponent } from 'vue'
import { ColorProps } from './props/props'
import { Icon } from '@/components/Icon'
export default defineComponent({
  name: 'ColorSelect',
  props: ColorProps,
  emits: ['update:model'],
  setup(props, { emit }) {
    return () => (
      <>
        <div class={'colorBox flex flex-j-sb h-17px'}>
          {props.colorList.map((item) => {
            return (
              <div
                onClick={() => emit('update:model', item)}
                class={
                  'pointer flex-1 mx-4px border-gray-200 border-solid cursor-pointer flex items-center justify-center'
                }
                style={{
                  'background-color': item,
                }}
              >
                {props.model === item ? (
                  <Icon name="dui" color="#fff" size={12} />
                ) : (
                  <span></span>
                )}
              </div>
            )
          })}
        </div>
      </>
    )
  },
})
</script>
<style scoped>
div {
  color: red;
}
</style>
<!-- <div class={'colorBox flex flex-j-sb'}>
      <div class={'pointer'}  style={ 'background-color': 'item' }></div>
    </div> -->
