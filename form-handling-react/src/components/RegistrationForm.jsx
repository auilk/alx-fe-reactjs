import { useState } from "react";

function RegistrationForm()
{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: false, email: false, password: false });

    const HandleSubmit = (event) =>
    {
        event.preventDefault();

        if (!username)
        {
            setErrors((errors) => ({...errors, username: true}));
            return;
        }
        if (!email)
        {
            setErrors((errors) => ({...errors, email: true}));
            return;
        }
        if (!password)
        {
            setErrors((errors) => ({...errors, password: true}));
            return;
        }

        console.log("Form Submitted: ", { username, email, password });

        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({ username: false, email: false, password: false });
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={HandleSubmit}>
                {errors.username && errors.email && errors.password ? <p>All the fields are required</p> : null}

                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                    {errors.username ? <p>Username is required</p> : null}
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    {errors.email ? <p>Email is required</p> : null}
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    {errors.password ? <p>Password is required</p> : null}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;