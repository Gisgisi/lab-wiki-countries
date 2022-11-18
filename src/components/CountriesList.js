import React from 'react'

function CountriesList({ country }) {
    return (
        <div>
            {country.map((theCountry) => {
                return (
                    <div>
                        <h3>{theCountry.name.official}</h3>
                        <P></P>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CountriesList