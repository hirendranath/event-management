import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');


    const handelLogin = e =>{
        e.preventDefault ();
        const email  = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

         //For  reset Error 
         setLoginError('');
         setSuccess(' ');

        // For add validation
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setSuccess("User Successfully logged In");
        })
        .catch(error => {
            console.log(error);
            setLoginError(error.message);
        })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        
                    </form>
                    {
                            loginError && <p className="text-red-700" > {loginError} </p>
                        }
                        {
                            success && <h2 className="text-2xl text-green-600" > {success} </h2>
                        }
                        <p>Are you new here? so <Link className="text-xl font-bold text-blue-800" to="/register">Register Now</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;