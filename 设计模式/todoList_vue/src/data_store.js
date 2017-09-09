/*
 * 只封了 get 与 set
 */
let store = {
  storage: window.localStorage
}

const api = {
  /*
   * @param key 为localStorage 的key值
   * @param defaults 当本地存储的数据为空时的默认值 
   */
  get(key, defaults) {
    let val = deserialize(this.storage.getItem(key))
    return val !== undefined ? val : defaults
  },

  set(key, val) {
    if (typeof val === "undefined") {
     return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
  },

  remove(key) {
    this.storage.removeItem(key)
  }
}

function serialize(val) {
  return JSON.stringify(val)
}

function deserialize(val) {
  if (typeof val !== "string") {
    return
  }
  return JSON.parse(val)
}

Object.assign(store, api)

export default store
