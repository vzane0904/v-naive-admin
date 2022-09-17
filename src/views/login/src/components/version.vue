<script lang="tsx">
export default defineComponent({
  name: 'Version',
  setup() {
    const { pkg } = __APP_INFO__
    return () => (
      <div
        class="edition relative right-16px mt-3 -mr-15px px-30px py-4px  text-cool-gray-50 transform rotate-45 select-none"
        style={{ backgroundColor: '#fec12f' }}
      >
        V {pkg.version}
      </div>
    )
  },
})
</script>
