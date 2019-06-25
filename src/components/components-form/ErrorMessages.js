import * as React from 'react';


export default ({
    userNameInBase,
    validationError,
    showErrors
}) => (
        <div>
            <span
                className={userNameInBase ?
                    `input__userInBase--invalid` :
                    `input__userInBase--invalid error__invisible`
                }>
                The user exists in the database
            </span>

            {showErrors &&
                (<span
                    className={
                        validationError.invalidUser ?
                            `input__invalidUser--invalid` :
                            `input__invalidUser--invalid error__invisible`}>
                    First and last name should consist of <br /> two parts.
                    It should contain min. 5 characters.
                </span>)
            }

            {showErrors &&
                (<span
                    className={
                        validationError.invalidEmail ?
                            `input__invalidEmail--invalid` :
                            `input__invalidEmail--invalid error__invisible`}>
                    The email should contain @. Enter the correct format.
                </span>)
            }
        </div>

    );