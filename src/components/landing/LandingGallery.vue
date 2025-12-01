<template>
    <div class="landing-gallery">
        <div class="landing-container">
            <div class="landing-gallery__header">
                <span class="landing-gallery__section-label">
                    Галерея
                </span>

                <h2 class="landing-gallery__section-title">
                    Наша атмосфера
                </h2>

                <p class="landing-gallery__description">
                    Погрузитесь в уютную атмосферу Forest Rest
                </p>
            </div>

            <masonry-wall
                :items="images"
                :column-width="300"
                :gap="24"
                :rtl="false"
                class="landing-gallery__grid"
            >
                <template #default="{ item, index }">
                    <div
                        class="landing-gallery__item"
                        @click="handleImageClick(index)"
                    >
                        <div class="landing-gallery__image-wrapper">
                            <img
                                :src="item.src"
                                :alt="item.alt"
                                class="landing-gallery__image"
                            />

                            <div class="landing-gallery__overlay">
                                <i class="bx bx-zoom-in landing-gallery__icon" />
                            </div>
                        </div>
                    </div>
                </template>
            </masonry-wall>
        </div>

        <!-- Gallery Modal -->
        <Teleport to="body">
            <div
                v-if="selectedIndex !== null"
                class="landing-gallery__modal"
                @click="closeModal"
            >
                <button
                    class="landing-gallery__modal-close"
                    @click.stop="closeModal"
                    aria-label="Закрыть"
                >
                    <i class="bx bx-x" />
                </button>

                <button
                    v-if="images.length > 1"
                    class="landing-gallery__modal-prev"
                    @click.stop="prevImage"
                    aria-label="Предыдущее изображение"
                >
                    <i class="bx bx-chevron-left" />
                </button>

                <button
                    v-if="images.length > 1"
                    class="landing-gallery__modal-next"
                    @click.stop="nextImage"
                    aria-label="Следующее изображение"
                >
                    <i class="bx bx-chevron-right" />
                </button>

                <div
                    class="landing-gallery__modal-content"
                    @click.stop
                >
                    <img
                        :src="images[selectedIndex].src"
                        :alt="images[selectedIndex].alt"
                        class="landing-gallery__modal-image"
                    />

                    <div class="landing-gallery__modal-info">
                        <p class="landing-gallery__modal-counter">
                            {{ selectedIndex + 1 }} / {{ images.length }}
                        </p>

                        <p class="landing-gallery__modal-alt">
                            {{ images[selectedIndex].alt }}
                        </p>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
interface GalleryImage {
    src: string;
    alt: string;
}

const props = defineProps<{
    images: GalleryImage[];
}>();

const selectedIndex = ref<number | null>(null);

const handleImageClick = (index: number) => {
    selectedIndex.value = index;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    selectedIndex.value = null;
    document.body.style.overflow = '';
};

const nextImage = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = (selectedIndex.value + 1) % props.images.length;
    }
};

const prevImage = () => {
    if (selectedIndex.value !== null) {
        selectedIndex.value = selectedIndex.value === 0
            ? props.images.length - 1
            : selectedIndex.value - 1;
    }
};

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedIndex.value !== null) {
        closeModal();
    }
    if (e.key === 'ArrowLeft' && selectedIndex.value !== null) {
        prevImage();
    }
    if (e.key === 'ArrowRight' && selectedIndex.value !== null) {
        nextImage();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
});
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingGallery/component' as *;
</style>
