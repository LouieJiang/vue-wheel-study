<template lang="pug">
    .col(:class="[`col-${span}`]")

</template>

<script>
export default {
  name: 'col',
  props:{
    span:{type:[Number,String]}
  }
}
</script>

<style scoped lang="stylus">
    .col
        height 100px
        background grey
        border 1px solid red
        width 50%

        for n in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24

            &.col-{n}
                width (n / 24) * 100%
</style>