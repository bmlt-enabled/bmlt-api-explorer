export const showVenueInfo = (version) => {
    // 2.16.4 and above will return true
    const major = parseInt(version.split('.')[0])
    const minor = parseInt(version.split('.')[1])
    const patch = parseInt(version.split('.')[2])
    if (major >= 2 && minor >= 16 && patch >= 4) {
        return true
    } else {
        return false
    }
}
