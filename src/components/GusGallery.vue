<template>
  <div class="gallery">
    <div
      class="test"
    />
    <h1>{{ title }}</h1>
    <lightbox
      ref="lightbox"
      :images="images"
      :directory="directory"
      @click="showLightbox(image.name)"
    />
  </div>
</template>

<script>

export default {
  name: 'GusGallery',
  props: {
    title: String,
    images: Array,
    directory: {
      type: String,
      default: '',
    },
  },
  methods: {
    showLightbox(imageName) {
      this.$refs.lightbox.show(imageName);
    },
  },
};
</script>

<style scoped lang="scss">
.test {
  background-image: url(/early/cat.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
}
</style>
