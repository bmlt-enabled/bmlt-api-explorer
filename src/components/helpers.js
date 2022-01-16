export const shouldHideSubsections = (currentSelection, dataQuery) => {
    let hideSubsections = false
    if (
        (currentSelection == 0 || currentSelection == 1) &&
        (dataQuery === '?switcher=GetFormats' ||
            dataQuery === '?switcher=GetServiceBodies' ||
            dataQuery === '?switcher=GetChanges' ||
            dataQuery === '?switcher=GetFieldKeys')
    ) {
        hideSubsections = true
    }
    return hideSubsections
}
