<template lang="pug">
    .col(:class="colClass", :style="rowStyle")
        div(style="border: 1px solid green;height:100px")
            slot
</template>

<script>
export default {
  name: 'col',
  props:{
    span:{type:[Number,String]},
    offset:{type:[Number,String]},
  },
  data(){
    return {
      gutter:0
    }
  },
  computed:{
    colClass(){
      let {span,offset} = this
      return [span&&`col-${span}`, offset && `offset-${offset}`]
    },
    rowStyle(){
      return {padding: `0 ${this.gutter/2}px`}
    }
  }
}
</script>

<style scoped lang="stylus">
    .col
        height 100px
        //background grey
        //border 1px solid red
        width 50%

        for n in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
            &.col-{n}
                width (n / 24) * 100%
            &.offset-{n}
                margin-left (n / 24) * 100%
</style>