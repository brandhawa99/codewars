var LRUCache = (capacity) => {
  this.capacity = capacity;
  this.map = new Map();

  this.head = {};
  this.tail = {};

  this.head.next = this.tail;
  this.tail.prev = this.head;
}



LRUCache.prototype.get = (key) => {

  const hasKey = this.map.has(key);
  if (!hasKey) return -1;

  const node = this.map.get(key);
  this.removeNode(node);
  // move node to front


  return node.value;

}

LRUCache.prototype.removeNode = function (node) {

  node.next.prev = node.prev;
  node.prev.next = node.next;

}

LRUCache.prototype.moveToFront = function () {

  const [prev, next] = [this.tail.prev, this.tail];


}

LRUCache.prototype.put = (key, value) => {

}