import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    // Foe Google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then (result => {
            const loggedUser = result.user
        })
        .catch( error =>{
            console.log(error);
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        // reset Error
        setRegisterError('');
        setSuccess(' ');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }

        else if (!/\$/.test(password)) {
            setRegisterError('Your password should have at least 1 special character characters.')
            return;
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("User Successfully created");
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleRegister} className="card-body">
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
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                            <div>
                            <button onClick={handleGoogleLogin} > SignIn with Google </button>
                        </div>
                        </form>
                        {
                            registerError && <p className="text-red-700" > {registerError} </p>
                        }
                        {
                            success && <h2 className="text-2xl text-green-600" > {success} </h2>
                        }
                        <p>Have an account? so <Link className="text-xl font-bold text-blue-800" to="/login">Log In</Link> </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;