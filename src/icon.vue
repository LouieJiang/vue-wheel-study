<template lang="pug">
    svg(v-if="name" class="g-icon")
        use(:xlink:href="`#icon-${name}`")
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {},
  }
}
</script>

<style scoped lang="stylus">
    .g-icon
        width 1em
        height 1em
</style>