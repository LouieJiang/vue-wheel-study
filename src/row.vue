<template lang="pug">
    .row
        slot
</template>

<script>
export default {
  name: 'row'
}
</script>

<style scoped lang="stylus">
    .row
        display flex
        wight 100%

</style>