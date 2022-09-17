<template><div></div></template>
<script lang="ts" setup>
import { useDialog, useMessage, useNotification } from 'naive-ui'
window.$message = useMessage()
window.$useDialog = useDialog()
window.$useNotification = useNotification()
</script>
