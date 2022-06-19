export const getStorageItem = <T>(key: string, storage: Storage = localStorage): T | null | string => {
  const foundItem = storage.getItem(key)
  if (!foundItem) return null
  if (
    (foundItem.startsWith('{') && foundItem.endsWith('}')) ||
    (foundItem.startsWith('[') && foundItem.endsWith(']'))
  ) {
    return JSON.parse(foundItem)
  }
  return foundItem
}
export const deleteStorageItem = (key: string, storage: Storage = localStorage) => storage.removeItem(key)
