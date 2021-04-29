<template>
  <v-row>
    <v-col v-for="photo in $photos" :key="photo.id" cols="4">
      <NuxtLink :to="`/photo/${photo.id}`">
        <v-img :src="photo.download_url" :alt="photo.author" />
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { photos } from '@/store'

@Component
export default class Home extends Vue {
  async asyncData() {
    await photos.list()
  }

  get $photos() {
    return photos.$all
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
