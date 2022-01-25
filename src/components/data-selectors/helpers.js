export const getDisplayOptions = (selectedResponse) => {
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
            title: 'Service Bodies',
            value: '?switcher=GetServiceBodies',
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

    if (selectedResponse === 0) {
        return differentOptions.slice(0)
    } else if (selectedResponse === 1) {
        return differentOptions.slice(0, 2)
    } else {
        return differentOptions.slice(0, 1)
    }
}

export const FormatLanguage = ({ formatLanguageFunction, serverDetails }) => {
    const languageMapping = [
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

    return (
        <div className="mt-3">
            <label>Format Language</label>
            <select
                className="form-control custom-select"
                onChange={(e) => {
                    formatLanguageFunction(`&lang_enum=${e.target.value}`)
                }}
            >
                <option
                    default
                    value={serverDetails[0].nativeLang}
                    key={serverDetails[0].nativeLang}
                >
                    Server Language
                </option>
                {serverDetails[0].langs.split(',').map((lang) => {
                    const langName = languageMapping
                        .filter((language) => {
                            return language.value === lang
                        })
                        .map((language) => {
                            if (language.name) {
                                return language.name
                            } else {
                                return language.value
                            }
                        })
                    return (
                        <option value={lang} key={lang}>
                            {langName}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export const getFormats = (dataQuery) => {
    let formats = [
        {
            name: 'CSV',
            value: 'csv',
        },
        {
            name: 'XML',
            value: 'xml',
        },
        {
            name: 'JSON',
            value: 'json',
        },
        {
            name: 'KML',
            value: 'kml',
        },
        {
            name: 'GPX',
            value: 'gpx',
        },
        {
            name: 'POI CSV',
            value: 'poi',
        },
        {
            name: 'Simple HTML (Block Elements)',
            value: 'simple-block',
        },
        {
            name: 'Simple HTML (Table)',
            value: 'simple',
        },
    ]

    if (dataQuery === '?switcher=GetNAWSDump') {
        return formats.slice(0, 1)
    }
    return formats
}
