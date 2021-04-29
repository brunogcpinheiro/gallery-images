import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators'
import { Photo } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'photos', stateFactory: true, namespaced: true })
export default class Photos extends VuexModule {
  private photos = [] as Photo[]
  private photo = {} as Photo

  public get $all() {
    return this.photos
  }

  public get $single() {
    return this.photo
  }

  @Mutation
  private SET_ALL(photos: Photo[]) {
    this.photos = photos
  }

  @Mutation
  private SET_SINGLE(photo: Photo) {
    this.photo = photo
  }

  @Action({ commit: 'SET_ALL' })
  public async list() {
    return await $axios.$get('/v2/list')
  }

  @Action({ commit: 'SET_SINGLE' })
  public async show({ id }: Pick<Photo, 'id'>) {
    return await $axios.$get(`id/${id}/info`)
  }
}
