const fibonacci = function (position, temp = []) {
    if (temp[position]) {
        return temp[position]
    } else {
        if (position <= 2) {
            if (position == 0) {
                temp[position] = 0
            } else {
                temp[position] = 1
            }
        } else {
            temp[position] = fibonacci(position - 1, temp) + fibonacci(position - 2, temp);
        }
        return temp[position]
    }
}

console.log(
    fibonacci(0), // 0
    fibonacci(1), // 1
    fibonacci(2), // 1
    fibonacci(3), // 2
    fibonacci(4)  // 3 
)