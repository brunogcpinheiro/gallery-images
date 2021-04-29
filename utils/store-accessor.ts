/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Photos from '@/store/photos'

let photos: Photos

function initializeStore(store: Store<any>): void {
  photos = getModule(Photos, store)
}

export { initializeStore, photos }
