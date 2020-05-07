function Queue() {
  
  this.items = []

  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }

  Queue.prototype.dequeue = function (element) {
    return this.items.shift(element)
  }
  
  Queue.prototype.front = function () {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length == 0
  }

  Queue.prototype.size = function () {
    return this.items.length
  }

  Queue.prototype.toString = function () {
    var resultString = ''
    for (var i = 0; i < this.items.length; i++){
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}