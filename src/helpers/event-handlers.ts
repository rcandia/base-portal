import { navigateToUrl } from 'single-spa'
import { routes } from '~/assets/json/layout.json'

import { useLoader } from '~/hooks/useLoader'
import { testUnauthenticatedRoutes, getStorageItem } from '~/helpers'
import { EventWithSingleSPA } from '~/types/events'

const { mountLoader } = useLoader()

export const beforeRouting = (): void => {
  const loader = mountLoader()
  window.addEventListener('single-spa:before-routing-event', event => {
    if (testUnauthenticatedRoutes(window.location)) return

    const token = getStorageItem('@token')

    if (!token) navigateToUrl('/account/login')

    const windowEvent = event as EventWithSingleSPA
    if (!windowEvent.detail.appsByNewStatus.MOUNTED.length) {
      if (routes.some(item => window.location.pathname.includes(item.path || ''))) return
      navigateToUrl('/error/404')
    }
  })
  window.addEventListener('single-spa:routing-event', event => {
    const windowEvent = event as EventWithSingleSPA
    Object.entries(windowEvent.detail.newAppStatuses).forEach(([key]) => {
      const el = document.querySelector(`[id*='${key}']`)
      if (!el) return
      setTimeout(() => {
        el.className = 'route-fade-in'
        setTimeout(() => {
          if (loader.getStatus() === 'MOUNTED') {
            loader.unmount()
          }
          el.className = ''
        }, 300)
      }, 150)
    })
  })
  window.addEventListener('single-spa:before-app-change', event => {
    const windowEvent = event as EventWithSingleSPA
    Object.entries(windowEvent.detail.newAppStatuses).forEach(([key]) => {
      if (loader.getStatus() === 'NOT_MOUNTED') {
        loader.mount()
      }
      const el = document.querySelector(`[id*='${key}']`)
      if (!el) return
      el.className = 'route-fade-out'
    })
  })
}
