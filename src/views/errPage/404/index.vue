<script lang="tsx">
import err404 from '@/layouts/error/404.vue'

export default {
  components: {
    err404,
  },
  setup() {
    return () => <err404 />
  },
}
</script>
