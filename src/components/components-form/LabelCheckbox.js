import * as React from 'react';

export default ({ checkbox, handleChange }) => (
    <label className="form__label">
        <input className="form__checkbox"
            name="checkboxReceived"
            type="checkbox"
            checked={checkbox}
            onChange={handleChange}
        />
        <span className="form__span">I agree to the processing of personal data provided by me</span>
    </label>
);