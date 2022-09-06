function main(number) {
    let res = [], count = []
    let N = 0, counter = 0

    res.push(number)
    count.push(counter)

    number % 2 == 0 ? N = number / 2 : N = (3 * number) + 1

    res.push(N)
    counter++
    count.push(counter)

    do {
        N % 2 == 0 ? N /= 2 : N = (N * 3) + 1

        res.push(N)

        counter++
        count.push(counter)
    } while (N > 1)

    return {
        data: res,
        labels: count
    }
}

export default main
