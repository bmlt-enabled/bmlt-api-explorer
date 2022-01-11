const differentOptions = [
    {
        title: 'Meeting Search Results',
        value: '?switcher=GetSearchResults',
    },
    {
        title: 'Formats',
        value: '?switcher=GetFormats',
    },
    {
        title: 'Changes',
        value: '?switcher=GetChanges',
    },
    {
        title: 'List of Available Field Keys',
        value: '?switcher=GetFieldKeys',
    },
    {
        title: 'List of Specific Field Values',
        value: '?switcher=GetFieldValues',
    },
    {
        title: 'NAWS Format Export',
        value: '?switcher=GetNAWSDump',
    },
    {
        title: 'Server Information',
        value: '?switcher=GetServerInfo',
    },
    {
        title: 'Geographic Coverage Area',
        value: '?switcher=GetCoverageArea',
    },
]

export const getDisplayOptions = (selectedResponse) => {
    if (selectedResponse == 0) {
        return differentOptions.slice(0)
    } else if (selectedResponse == 1) {
        return differentOptions.slice(0, 2)
    } else {
        return differentOptions.slice(0, 1)
    }
}

export const languageMapping = [
    { name: 'English', value: 'en' },
    { name: 'Español', value: 'es' },
    { name: 'Dansk', value: 'dk' },
    { name: 'Deutsch', value: 'de' },
    { name: 'فارسی', value: 'fa' },
    { name: 'Français', value: 'fr' },
    { name: 'Italiano', value: 'it' },
    { name: 'Polskie', value: 'pl' },
    { name: 'Português', value: 'pt' },
    { name: 'Русский', value: 'ru' },
    { name: 'Svenska', value: 'sv' },
]