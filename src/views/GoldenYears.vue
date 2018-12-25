<template>
  <div class="early content">
    <GusThumbnails
      class="gallery-top"
      title="Golden Years"
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
    this.baseDir = '/golden/';
    this.images = [
      {
        name: 'happy.jpg',
        alt: 'What a happy boy',
      },
      {
        name: 'mom2.jpg',
        alt: 'Hangin\' out with mom',
      },
      {
        name: 'eyes.jpg',
        alt: 'The oracle of La Mesa',
      },
      {
        name: 'injured.jpg',
        alt: 'Not doing so well after a grievous injury',
      },
      {
        name: 'contemplation.jpg',
        alt: 'Gus contemplates where it all went wrong',
      },
      {
        name: 'recovery.jpg',
        alt: 'Gus takes his time to recover',
      },
      {
        name: 'recovered.jpg',
        alt: 'All healed up...',
      },
      {
        name: 'lookin-good.jpg',
        alt: '...and back to his happy self',
      },
    ];
  },
};
</script>
