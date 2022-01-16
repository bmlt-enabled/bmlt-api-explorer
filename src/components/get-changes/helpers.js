export const getAllServiceBodies = (serviceBodies) => {
    let allServiceBodies = []
    for (let i = 0; i < serviceBodies.length; i++) {
        const body = serviceBodies[i].children
        for (let j = 0; j < body.length; j++) {
            allServiceBodies.push({
                label: body[j].label,
                value: body[j].value,
            })
        }
    }
    return allServiceBodies
}
