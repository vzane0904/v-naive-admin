<script lang="tsx">
// import { oldbackpermissions } from '@/api'
// import { uuid } from '@/utils/utils'

import { axiosRequestMap, cancelRequestMap } from '@/http/cancel'

export default defineComponent({
  name: 'Lo',
  setup() {
    // let y = 'yyyyy',
    //   e = uuid(),
    //   s = uuid(),
    //   si = uuid()
    // oldbackpermissions(
    //   { age: 1 },
    //   { id: y, ignoreMsg: '第一个取消', ignoreRequest: false },
    // )
    //   .then()
    //   .catch((r) => {
    //     console.log(r)
    //   })

    // console.log('get ', cancelRequestMap, y, cancelRequestMap.get(y))
    // oldbackpermissions(
    //   { age: 2 },
    //   { id: y, ignoreMsg: '第二个取消', ignoreRequest: false },
    // )
    //   .then()
    //   .catch((r) => {
    //     console.log(r)
    //   })
    // setTimeout(() => {
    //   oldbackpermissions({ age: 3 }, '第三个取消', s)
    //     .then()
    //     .catch((r) => {
    //       console.log(r)
    //     })
    // }, 300)
    // setTimeout(() => {
    //   oldbackpermissions({ age: 4 }, '第四个取消', si)
    //     .then()
    //     .catch((r) => {
    //       console.log(r)
    //     })
    // }, 1000)
    return () => (
      <>
        <button
          onClick={() => {
            console.log(axiosRequestMap)
          }}
        >
          1212
        </button>
        <button
          onClick={() => {
            console.log(cancelRequestMap)
          }}
        >
          xxx
        </button>
      </>
    )
  },
})
</script>
