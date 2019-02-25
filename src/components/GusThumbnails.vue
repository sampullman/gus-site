<template>
  <div class="gallery">
    <h1>{{ title }}</h1>
    <transition-group class="thumbnails" name="thumbnailfade" tag="div">
      <img
        v-for="(thumb, index) in images"
        :key="index.toString()"
        @click="showLightbox(thumb.name)"
        :src="'/thumbnails' + directory + thumb.name"
        :alt="thumb.alt"
        :title="thumb.alt"
      />
    </transition-group>
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
.thumbnails {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;
  img {
    width: 200px;
    height: auto;
    cursor: pointer;
    margin-bottom: 16px;
  }
}
</style>
