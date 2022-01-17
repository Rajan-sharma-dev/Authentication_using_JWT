import React from "react";


function Regist(){
    return (
        <>
       
        <form>
                <h3>Register here</h3>

                <label for="username">Username</label>
                <br/>

                <input type="text" placeholder="Username" id="username" />
                <br /><br />
                <label for="username">Email/Phone</label>
                <br/>

                <input type="text" placeholder="Email or Phone" id="username" />
                <br /><br />

                <label for="password">Password</label>
                <br />
                <input type="password"  placeholder="Password" id="password" />
                <br />
                <br />
                <label for="password">Confirm Password</label>
                <br />
                <input type="password"  placeholder="Password" id="password" />
                <br />
                <br />

                <button className="btn3">Register</button>
                
            </form>

        </>
        )

}

export default Regist