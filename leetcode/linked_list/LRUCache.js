var LRUCache = (capacity) => {
  this.capacity = capacity;
  this.map = new Map();

  this.head = {};
  this.tail = {};

  this.head.next = this.tail;
  this.tail.prev = this.head;
}


LRUCache.prototype.get = (key) => {

}

LRUCache.prototype.put = (key, value) => {

}