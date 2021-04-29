<template>
  <v-container>
    <v-row>
      <NuxtLink to="/"> Voltar </NuxtLink>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-img :src="$photo.download_url" :alt="$photo.author" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { photos } from '@/store'

@Component
export default class Details extends Vue {
  async asyncData({ params }: any) {
    if (params.id) await photos.show({ id: params.id as any })
  }

  get $photo() {
    return photos.$single
  }
}
</script>

<style lang="scss"></style>
