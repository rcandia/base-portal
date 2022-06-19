import { createApp, h } from 'vue'
import singleSpaVue from 'single-spa-vue'
import { mountRootParcel } from 'single-spa'

const loader = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h({
        template: '<p>Loader</p>'
      })
    }
  }
})

const element = document.createElement('div')
const domElement = element
document.body.appendChild(element)

export const useLoader = () => {
  const mountLoader = () => mountRootParcel(loader, { domElement })
  return { mountLoader, loader }
}
