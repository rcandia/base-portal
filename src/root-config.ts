import { registerApplication, start } from 'single-spa'
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout'

import { useApps, useMountRouter } from '~/hooks'
import { beforeRouting } from '~/helpers'

const layout = useMountRouter()
const routes = constructRoutes(layout)
const applications = constructApplications({
  routes,
  loadApp: async ({ name }) => {
    const apps = useApps()
    return await import(/* @vite-ignore */ apps[name])
  }
})
constructLayoutEngine({ applications, routes })

applications?.forEach(app => {
  registerApplication({
    ...app,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customProps: (name, location) => ({})
  })
})

beforeRouting()

start({
  urlRerouteOnly: true
})
