import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from '../firebase.js';



const LoginScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message);
        });
    }

    const registerButton = ()=>{
        auth.signInWithPopup(provider).catch(alert);
    }

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((e)=>{
            alert(e.message);
        });
    };
    // const registerButton = ()=>{
    //     auth.signInWithPopup(provider).catch(alert);
    // }

  return (
    <div className='login_screen'>
        <form>
            <input ref = {emailRef} type="email" placeholder='Email' />
            <input ref = {passwordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <button type='submit' onClick={register}>Register</button>
        </form>
        <button style={{"marginTop" : "200px"}} 
        onClick={registerButton}>Sign In with Google</button>
        {/* <p>Want To SignUp?<Link to ="/signup" ></Link> </p> */}
    </div>
  )
}

export default LoginScreen