<template>
    <div
        class="ui-slider"
        :class="uiSliderClasses"
    >
        <UiButtonSlider
            view="prev"
            class="ui-slider__button-prev"
            :isDisabled="isBeginning"
            @click="slidePrev"
        />

        <Swiper
            v-bind="swiperOptions"
            class="ui-slider__swiper"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
        >
            <slot />
        </Swiper>

        <UiButtonSlider
            view="next"
            class="ui-slider__button-next"
            :isDisabled="isEnd"
            @click="slideNext"
        />
    </div>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import UiButtonSlider from '~/components/ui/uiButtonSlider/UiButtonSlider.vue';

interface Props {
    slidesPerView?: number | 'auto';
    spaceBetween?: number;
    loop?: boolean;
    autoplay?: boolean | {
        delay?: number;
        disableOnInteraction?: boolean;
    };
    pagination?: boolean;
    breakpoints?: Record<number, {
        slidesPerView?: number | 'auto';
        spaceBetween?: number;
    }>;
    view?: 'default' | 'catalog';
}

const props = withDefaults(defineProps<Props>(), {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    autoplay: false,
    pagination: false,
    view: 'default',
});

const swiperInstance = ref<SwiperType | null>(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const swiperOptions = computed(() => {
    const options: any = {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: props.slidesPerView,
        spaceBetween: props.spaceBetween,
        loop: props.loop,
        breakpoints: props.breakpoints,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    };

    if (props.autoplay) {
        options.autoplay = typeof props.autoplay === 'boolean'
            ? { delay: 3000, disableOnInteraction: false }
            : props.autoplay;
    }

    if (props.pagination) {
        options.pagination = { clickable: true };
    }

    return options;
});

const uiSliderClasses = computed(() => ({
    [`ui-slider--view-${props.view}`]: Boolean(props.view),
}));

const onSwiper = (swiper: SwiperType) => {
    swiperInstance.value = swiper;
    updateNavigationState(swiper);
};

const onSlideChange = (swiper: SwiperType) => {
    updateNavigationState(swiper);
};

const updateNavigationState = (swiper: SwiperType) => {
    isBeginning.value = swiper.isBeginning;
    isEnd.value = swiper.isEnd;
};

const slidePrev = () => {
    swiperInstance.value?.slidePrev();
};

const slideNext = () => {
    swiperInstance.value?.slideNext();
};

const handleResize = () => {
    if (swiperInstance.value) {
        swiperInstance.value.update();
        updateNavigationState(swiperInstance.value);
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss">
    @use '~/components/ui/uiSlider/styles/ui-slider' as *;
</style>
