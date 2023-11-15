export const getOptimizedPath = (choices, value) => {
    const values = {
        "small-hit": -3,
        "medium-hit": -6,
        "hard-hit": -9,
        "shrink": -15,
        "punch": 2,
        "bend": 7,
        "draw": 13,
        "upset": 16,
    }


    const thirdLast = choices[0]
    const secondLast = choices[1]
    const last = choices[2]

    let path = []
    let iterations = 0

    if (thirdLast) value = value - values[thirdLast]
    if (secondLast) value = value - values[secondLast]
    if (last) value = value - values[last]
    

    while (value > 0) {
        if (value - values["upset"] >= 0) {
            path.push("upset")
            value = value - values["upset"]
            iterations++
        } else break
    }

    while (value > 0) {
        if (value - values["draw"] >= 0) {
            path.push("draw")
            value = value - values["draw"]
            iterations++
        } else break
    }

    while (value > 0) {
        if (value - values["bend"] >= 0) {
            path.push("bend")
            value = value - values["bend"]
            iterations++
        } else break
    }

    while (value > 0) {
        if (value - values["punch"] >= 0) {
            path.push("punch")
            value = value - values["punch"]
            iterations++
        } else break
    }

    while (value > 0) {
        if (value + values["shrink"] >= 0) {
            path.push("shrink")
            value = value - values["shrink"]
            iterations++
            if (path.length % 1000000 == 0) console.log(path.length)
        } else break
    }

    while (value > 0) {
        if (value + values["hard-hit"] >= 0) {
            path.push("hard-hit")
            value = value - values["hard-hit"]
            iterations++
        }
        else break
    }

    while (value > 0) {
        if (value + values["medium-hit"] >= 0) {
            path.push("medium-hit")
            value = value - values["medium-hit"]
            iterations++
        }
        else break
    }

    while (value > 0) {
        if (value + values["small-hit"] >= 0) {
            path.push("small-hit")
            value = value - values["small-hit"]
            iterations++
        }
        else break
    }



    // console.log(value)
    // console.log(iterations)


    thirdLast && path.push(thirdLast)
    secondLast && path.push(secondLast)
    last && path.push(last)

    console.log(path)
    return path
}

export default getOptimizedPath