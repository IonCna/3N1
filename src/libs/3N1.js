function main(number) {
    let N = (number * 3) + 1
    let res = [number, N]

    let counter = 0
    let count = [counter]

    do {
        N % 2 == 0 ? N /= 2 : N = (N * 3) + 1

        res.push(N)

        counter++
        count.push(counter)
    } while (N > 1)

    count.push(counter + 2)

    return {
        data: res,
        labels: count
    }
}

export default main
