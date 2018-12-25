<template>
  <div class="early content">
    <GusThumbnails
      class="gallery-top"
      title="Early Days"
      :images="images"
      :directory="baseDir"
    />
  </div>
</template>

<script>
import GusThumbnails from '@/components/GusThumbnails.vue';

export default {
  name: 'home',
  components: {
    GusThumbnails,
  },
  created() {
    this.baseDir = '/early/';
    this.images = [
      {
        name: 'cat.jpg',
        alt: 'Gus reaches an accord with Rufina',
      },
      {
        name: 'cat2.jpg',
        alt: 'Happy sleepers',
      },
      {
        name: 'chill.jpg',
        alt: 'Gus looks proudly off into the distance',
      },
      {
        name: 'grump.jpg',
        alt: 'Gus gives the stink eye to protect a buried bone',
      },
    ];
  },
};
</script>
