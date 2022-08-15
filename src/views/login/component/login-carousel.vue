<template>
    <div class="left">
        <div class="part-parent">
            <a target="_blank" :class="banner.linkUrl ? '' : 'noLink'" @click.prevent="goToLink(banner.url)">
                <img class="slide-img" :src="banner.img" />
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import loginConfig from '@/utils/config/loginConfig'
const banner = loginConfig.loginBanner[0]
</script>

<style lang="scss" scoped>
.left {
    width: 386px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.slide-img {
    width: 100%;
    height: 550px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
</style>
