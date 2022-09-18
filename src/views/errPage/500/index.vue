<script lang="tsx">
import err500 from '@/layouts/error/500.vue'

export default {
  components: {
    err500,
  },
  setup() {
    return () => <err500 />
  },
}
</script>
