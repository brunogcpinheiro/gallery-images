/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

let $axios: NuxtAxiosInstance
let $cookie: NuxtCookies

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export function initializeCookies(cookiesInstance: NuxtCookies) {
  $cookie = cookiesInstance
}

export { $axios, $cookie }
