function Node(data) {
    this.data = data
    this.next = null
}

function Stack() {
    this.top = null
    this.size = 0
}

Stack.prototype.push = function (data) {
    var newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
    this.size++
}

Stack.prototype.pop = function () {
    var topItem = this.top
    this.top = this.top.next
    this.size--
    return topItem.data
}

Stack.prototype.length = function () {
    return this.size
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(
    stack.pop(),
    stack.length() //因不確定為何不能使用size命名，所以使用length取代size
)
