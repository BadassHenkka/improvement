import React, { useState, FormEvent, ReactElement } from 'react'
import styles from './Signup.styles'

import { handleRegister } from '../requests/auth'

const onRegisterSubmit = (
    event: FormEvent,
    username: string,
    password: string
): void => {
    event.preventDefault()
    handleRegister(username, password)
}

const Signup = (): ReactElement => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.logoAndHeaderContainer}>
                <img
                    className={styles.headerLogo}
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="improvement"
                />
                <h2 className={styles.headerTxt}>Sign up for your account</h2>
            </div>

            <div className={styles.signUpBoxContainer}>
                <div className={styles.signUpFormWrapper}>
                    <form
                        className={styles.signUpForm}
                        method="POST"
                        onSubmit={(event) =>
                            onRegisterSubmit(event, username, password)
                        }
                    >
                        <div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className={styles.inputLabel}
                                >
                                    Username
                                    <input
                                        id="username"
                                        name="username"
                                        type="username"
                                        title="usernameInput"
                                        required
                                        className={styles.usernameInput}
                                        onChange={(event) =>
                                            setUsername(event.target.value)
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className={styles.inputLabel}
                                >
                                    Password
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        title="passwordInput"
                                        required
                                        className={styles.passwordInput}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                title="signupBtn"
                                className={styles.signUpSubmitBtn}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
