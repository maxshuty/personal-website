<template>
  <div class="home">
    <base-icon alt="Vue logo" :icon="logo" :fileExtension="png" />
  </div>
</template>

<script>
import BaseIcon from '../components/ui/BaseIcon.vue';

export default {
  components: { BaseIcon },
  name: 'Home',
};
</script>
