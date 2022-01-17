
import React from "react";


function Login() {
    return (
        <>
            
            <form>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <br/>

                <input type="text" placeholder="Email or Phone" id="username" />
                <br /><br />

                <label for="password">Password</label>
                <br />
                <input type="password"  placeholder="Password" id="password" />
                <br />
                <br />

                <button className="btn3">Log In</button>
                
            </form>
        </>
    )

}

export default Login