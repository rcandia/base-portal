import appEnvs from '~/assets/json/app-envs.json'

import { config } from '~/helpers'

interface AppEnvs {
  [key: string]: {
    [key: string]: string
  }
}

const appsEnvs = appEnvs as AppEnvs
export const useApps = () => appsEnvs[config.env || 'local']
