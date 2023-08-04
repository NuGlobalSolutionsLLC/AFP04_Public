<script setup>
import { LImageOverlay } from "@vue-leaflet/vue-leaflet";

defineProps({
  overlays: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div v-if="overlays.length !== 0">
    <l-image-overlay
      v-for="(overlay, index) in overlays"
      :key="index"
      :url="`img/${overlay.url}`"
      :bounds="overlay.bounds"
      :opacity="0.8"
    />
  </div>
</template>
