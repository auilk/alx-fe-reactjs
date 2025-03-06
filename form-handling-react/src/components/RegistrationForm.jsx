import { useState } from "react";

function RegistrationForm()
{
    const [username, SetUsername] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, SetError] = useState('');

    const HandleSubmit = (event) =>
    {
        event.preventDefault();

        if (!(username && email && password))
        {
            SetError("All field are required!");
            return;
        }

        console.log("Form Submitted: ", { username, email, password });

        SetUsername('');
        SetEmail('');
        SetPassword('');
        SetError('');
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={HandleSubmit}>
                {error ? <p>{error}</p> : null}

                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" value={username} onChange={(event) => SetUsername(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" value={email} onChange={(event) => SetEmail(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" value={password} onChange={(event) => SetPassword(event.target.value)}/>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;