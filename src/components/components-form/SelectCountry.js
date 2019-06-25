import * as React from 'react';
import SingleOption from './SingleOption';

export default ({ handleChange, country }) => {
    const Countries = ['Poland', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain']
    return (
        <select
            className="form__select"
            onChange={handleChange}
            value={country}
            name='countryReceived'>
            <option className="form__option"
                defaultValue value="">
                Country of origin
            </option>
            {Countries.map((country, i) =>
                <SingleOption
                    key={i}
                    text={country}
                />
            )}
        </select>
    );
}