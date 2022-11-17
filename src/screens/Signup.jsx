// import React, { useRef } from 'react'
// import { auth, provider } from '../firebase.js';

// const Signup = () => {
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

//     const register = (e)=>{
//         e.preventDefault();
//         auth.createUserWithEmailAndPassword(
//             emailRef.current.value,
//             passwordRef.current.value
//         ).then((authUser)=>{
//             console.log(authUser);
//         }).catch((e)=>{
//             alert(e.message);
//         });
//     };
//     const registerButton = ()=>{
//         auth.signInWithPopup(provider).catch(alert);
//     }

//   return (
//     <div className='login_screen'>
//         <h1>SignUp</h1>
//         <input ref = {emailRef} type="email" placeholder='Email' />
//         <input ref = {passwordRef} type="password" placeholder='Password' />
//         <button type='submit' onClick={register}>Sign Up</button>
//         <button style={{"marginTop" : "200px"}} 
//         onClick={registerButton}>Sign In with Google</button>
//     </div>
//   )
// }

// export default Signup