<template lang="pug">
    button(class="g-button", :class="{[`icon-${iconPosition}`]: true}")
        svg(v-if="icon" class="icon")
            use(:xlink:href="`#icon-${icon}`")
        .content
            slot
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .g-button
        font-size var(--font-size)
        height var(--button-height)
        padding 0 1em
        border-radius var(--border-radius)
        border 1px solid var(--border-color)
        background var(--button-bg)
        display flex
        justify-content center
        align-items center
        vertical-align middle

        &:hover
            border-color var(--border-color-hover)

        &:active
            background var(--button-action-bg)

        &:focus
            outline none

        > .icon
            width 1em
            height 1em
            order 1
            margin-right .5em

        > .content
            order 2

        &.icon-right
            > .content
                order 1

            > .icon
                order 2
                margin 0 0 0 .5em
</style>
