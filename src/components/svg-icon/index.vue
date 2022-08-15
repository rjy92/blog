<template>
    <svg aria-hidden="true" class="svg-icon">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon'
        },
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: '#333'
        }
    },
    setup (props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`)
        return { symbolId }
    }
})
</script>
<style lang='scss'>
.svg-icon {
    width: 18px;
    height: 18px;
}
</style>
