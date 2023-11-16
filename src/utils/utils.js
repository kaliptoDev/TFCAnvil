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

    let goal = value
    // const initialGoal = value
    let current = 0

    let path = []

    if (thirdLast) goal = goal - values[thirdLast]
    if (secondLast) goal = goal - values[secondLast]
    if (last) goal = goal - values[last]

    while (current < goal && current <= 145) {
        if (current + values["upset"] <= goal) {
            path.push("upset")
            current = current + values["upset"]
        } else if (current + values["draw"] <= goal) {
            path.push("draw")
            current = current + values["draw"]
        } else if (current + values["bend"] <= goal) {
            path.push("bend")
            current = current + values["bend"]
        } else if (current + values["punch"] <= goal) {
            path.push("punch")
            current = current + values["punch"]
        } else break
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

        if (current < 0 || current > 145) {
            console.warn("Path is not possible")
            return []
        }
    }

    thirdLast && path.push(thirdLast)
    if (thirdLast) current = current + values[thirdLast]

    secondLast && path.push(secondLast)
    if (secondLast) current = current + values[secondLast]

    last && path.push(last)
    if (last) current = current + values[last]

    // console.log(path)
    // console.log("Current is: " + current)
    // console.log("Goal was: " + initialGoal)


    return path
}

export default getOptimizedPath