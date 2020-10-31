<template>
  <div class="early content">
    <h1>Prime Time</h1>
    <youtube video-id="1jKYhcykgd4" :player-vars="playerVars" />
    <GusThumbnails
      class="gallery-top"
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
  data() {
    return {
      playerVars: {
        autoplay: 0,
        frameborder: 0,
        modestbranding: 1,
        allowfullscreen: true,
      },
    };
  },
  created() {
    this.baseDir = '/prime/';
    this.images = [
      {
        name: 'bear.jpg',
        alt: 'A boy of great culture',
      },
      {
        name: 'gate.jpg',
        alt: 'Gus conducts an inspection',
      },
      {
        name: 'sweet.jpg',
        alt: 'Such a sweet boy',
      },
      {
        name: 'butt.jpg',
        alt: 'Gus butt',
      },
      {
        name: 'looking-back.jpg',
        alt: 'Gus sees something interesting',
      },
      {
        name: 'dad.jpg',
        alt: 'Complaints will continue until petting resumes',
      },
      {
        name: 'jenny.jpg',
        alt: 'Gus is cool, and he knows it',
      },
      {
        name: 'sleepy.jpg',
        alt: 'Preparing for a peaceful night\'s sleep',
      },
      {
        name: 'connor.jpg',
        alt: 'Gus making the rounds, greeting his constituents',
      },
      {
        name: 'sleepy2.jpg',
        alt: 'Nap time after a hard day\'s morning',
      },
    ];
  },
};
</script>
