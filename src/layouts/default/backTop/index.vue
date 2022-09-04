<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackTop',
  setup() {
    return () => <NBackTop bottom={50} visibilityHeight={300} right={50} />
  },
})
</script>
