export const ShowVenueTypes = ({ selectTypes }) => {
    const venueTypes = [
        { key: 1, value: 'In-Person' },
        { key: 2, value: 'Virtual' },
        { key: 3, value: 'Hybrid' },
    ]

    return venueTypes.map((venue) => {
        return (
            <div key={venue.key}>
                <input
                    id={`format-${venue.key}`}
                    type="checkbox"
                    value={`${venue.key}`}
                    onChange={selectTypes}
                />
                <label className="ml-3 mb-0" htmlFor={`format-${venue.key}`}>
                    {venue.value}
                </label>
            </div>
        )
    })
}
