class localCache {
  setCache(key: string, value: any, isLocal?: boolean) {
    if (!isLocal) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string): any {
    let value = window.localStorage.getItem(key)
    if (value) {
      value = JSON.parse(value)
    }
    return value
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
}

export default new localCache()
