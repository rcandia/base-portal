import { UnauthenticatedRoutes } from '~/constants'

export const testUnauthenticatedRoutes = (location: Location): boolean => {
  return UnauthenticatedRoutes.some(route => location.pathname.toLowerCase().includes(route))
}

export const testShowMenu = (location: Location): boolean => !testUnauthenticatedRoutes(location)
