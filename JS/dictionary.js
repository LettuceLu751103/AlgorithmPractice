

let Dictionary = function () {
  this.items = {}

  this.has = function (key) {
    if (key in this.items) {
      return true
    }
    return false
  }


  this.set = function (key, value) {
    this.items[key] = value
    return true
  }

  this.get = function (key) {
    if (this.has(key)) {
      return this.items[key]
    }
    return false
  }

  this.delete = function (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  this.getItems = function () {
    return this.items
  }

  this.values = function () {
    let valueArray = []
    for (let k in this.items) {
      if (this.has(k)) {
        valueArray.push(this.get(k))
      }
    }
    return valueArray
  }

  this.keys = function () {
    return Object.keys(this.items)
  }
}


let dic = new Dictionary()

dic.set('name', 'Lettuce')
dic.set('phone', '0905911803')

dic.getItems()