export const shouldHideSubsections = (currentSelection, dataQuery) => {
    let hideSubsections = false
    if (currentSelection == 1 && dataQuery === '?switcher=GetFormats') {
        hideSubsections = true
    }
    return hideSubsections
}
