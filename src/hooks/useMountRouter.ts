import layout from '~/assets/json/layout.json'

import { config, getStorageItem } from '~/helpers'
import { useApps } from '~/hooks'
import { CustomRoute } from '~/types/mountRouter'

const formatRoute = (route: { path: string; application: string }) => ({
  type: 'route',
  path: route.path,
  routes: [
    {
      type: 'application',
      name: route.application
    }
  ]
})

export const useMountRouter = () => {
  const { routes } = layout

  if (['local', 'dev'].includes(config.env)) {
    const customRoutes = getStorageItem<{ routes: CustomRoute[] }>('@org/custom-routes')
    const apps = useApps()
    if (customRoutes && typeof customRoutes !== 'string') {
      customRoutes.routes?.forEach(route => {
        apps[route.application] = route.appRoute
        routes.push(
          formatRoute({
            path: route.route,
            application: route.application
          })
        )
      })
    }
  }

  return { ...layout, routes }
}
