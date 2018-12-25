<template>
  <div class="home content">
    <h1>Selected Works</h1>
    <youtube video-id="leBa5wKjyYk" />
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
  },
};
</script>

<style scoped lang="scss">
.home {
  margin-bottom: 24px;
}
</style>
