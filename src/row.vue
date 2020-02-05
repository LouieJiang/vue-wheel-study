<template lang="pug">
    .row(:style="rowStyle")
        slot
</template>

<script>
export default {
  name: 'row',
  props:{
    gutter:{
      type:[Number,String]
    }
  },
  computed:{
    rowStyle(){
      return {margin: `0 ${-this.gutter/2}px`}
    }
  },
  mounted () {
    console.log(this.$children)
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
    console.log(this.$children)

  }
}
</script>

<style scoped lang="stylus">
    .row
        display flex
        wight 100%

</style>