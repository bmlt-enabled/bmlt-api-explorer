const validHour = (hour) => {
    return parseInt(hour) < 24 && parseInt(hour) >= 0 && !hour.includes(':')
}

const validMinute = (minute) => {
    return (
        parseInt(minute) >= 0 &&
        parseInt(minute) < 60 &&
        !minute.includes(':')
    )
}

export const updateString = (inputTime, inputPhrase, setAllStrings, allStrings) => {
    const hString = `${inputPhrase}H`
    const mString = `${inputPhrase}M`
    if (validHour(inputTime)) {
        setAllStrings({
            ...allStrings,
            [hString]: `&${hString}=${inputTime}`,
        })
    } else if (inputTime.includes(':') && inputTime.length < 6) {
        const [hr, min] = inputTime.split(':')
        if (validHour(hr) && validMinute(min)) {
            setAllStrings({
                ...allStrings,
                [hString]: `&${hString}=${hr}`,
                [mString]: `&${mString}=${min}`,
            })
        } else {
            setAllStrings({
                ...allStrings,
                [hString]: '',
                [mString]: '',
            })
        }
    } else {
        setAllStrings({ ...allStrings, [hString]: '', [mString]: '' })
    }
}