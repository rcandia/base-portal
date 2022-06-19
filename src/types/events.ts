export interface EventWithSingleSPA extends Event {
  detail: {
    newAppStatuses: {
      [key: string]: string
    }
    appsByNewStatus: {
      MOUNTED: string[]
      NOT_MOUNTED: string[]
      NOT_LOADED: string[]
      SKIP_BECAUSE_BROKEN: string[]
    }
    totalAppChanges: number
    oldUrl: string
    newUrl: string
  }
}
