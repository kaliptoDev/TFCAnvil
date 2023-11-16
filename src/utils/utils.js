export const getOptimizedPath = (choices, value, maxValue, setMaxValue) => {
    const values = {
        "small-hit": -3,
        "medium-hit": -6,
        "hard-hit": -9,
        "draw": -15,
        "punch": 2,
        "bend": 7,
        "upset": 13,
        "shrink": 16,
        "any-hit": -3
    }

    const thirdLast = choices[0]
    const secondLast = choices[1]
    const last = choices[2]

    let minLimit = 0
    let maxLimit = 145

        choices.map((choice) => {
            if (values[choice] < 0) {
                minLimit = minLimit - values[choice]
            }
        })

        choices.map((choice) => {
            if (values[choice] > 0) {
                maxLimit = maxLimit - values[choice]
            }
        })


    let iterations = 0
    let goal = value
    let current = 0

    let path = []

    if (thirdLast) goal = goal - values[thirdLast]
    if (secondLast) goal = goal - values[secondLast]
    if (last) goal = goal - values[last]

    if (goal < minLimit || goal > maxLimit || goal > 145) {
        return []
    }

    while (current < goal && current <= 145) {
        if (current + values["shrink"] <= goal) {
            path.push("shrink")
            current = current + values["shrink"]
        } else if (current + values["upset"] <= goal) {
            path.push("upset")
            current = current + values["upset"]
        } else if (current + values["bend"] <= goal) {
            path.push("bend")
            current = current + values["bend"]
        } else if (current + values["punch"] <= goal) {
            path.push("punch")
            current = current + values["punch"]
        } else break
        iterations++
    }

    if (current != goal) {
        if (current <= 10) {
            path.push("bend")
            current = current + values["bend"]
            path.push("medium-hit")
            current = current + values["medium-hit"]

        } else {
            path.push("medium-hit")
            current = current + values["medium-hit"]
            path.push("bend")
            current = current + values["bend"]
        }

        if (current < minLimit || current > maxLimit || current > 145) {
            return []
        }
        iterations++

    }


    if (thirdLast) {
        current = current + values[thirdLast]
        thirdLast && path.push(thirdLast)
        iterations++
    }

    if (secondLast) {
        current = current + values[secondLast]
        secondLast && path.push(secondLast)
        iterations++
    }


    if (last) {
        current = current + values[last]
        last && path.push(last)
        iterations++
    }


    if (iterations > maxValue) {
        setMaxValue(iterations)
    }
    return path
}

export default getOptimizedPath