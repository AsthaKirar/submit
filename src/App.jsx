// import React from 'react'

// const App = () =>{
//   const submitHandler = (e)=>{
//     e.preventDefault();
    
  
//   const {username,firstname, lastname,email,contact} = e.target;
  
//   const user = {
//     username: username.value,
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     contact: contact.value,


//   };

// console.log(user);
//   }

// return(
//   <div className='w-80% mt-10 p-6 bg-slate-400 rounded mx-auto'>
//     <form onSubmit={submitHandler} >
//       <input name="username" placeholder='username' />
//       <input name="firstname" placeholder='firstname' />
//       <input name="lastname"  placeholder='lastname'/>
//       <input name="email"  placeholder='email'/>
//       <input name="contact" placeholder='contact' />
//       <button className='bg-blue-700 mt-10'>submit</button>
//     </form>
//   </div>
// )
// };

// export default App;


import {useState} from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [error, seterror] =  useState("false");
  const [gender,setgender] = useState("others");
  const submithandler = (e) => {
    e.preventDefault();
    console.log(username);
  };


  return (
    <div className='w-[80%] mt-10 mx-auto rounded p-3 bg-zinc-400'>
      <form onSubmit={submithandler}>
        <input  
        type = "text"
        name="username"  
        placeholder="username"
        onInput={(e)=>
          e.target.value.length < 5
          ? seterror(true)
          : seterror(false)
        }
        onChange={(e) => setusername(e.target.value)}
        value = {username}

        />
        {error && (
          <p className="bg-red-500">
            username must have at least 5 character long
          </p>
        )}
        <input type="radio" 
        name="gender"
        checked = {gender === "others"?true:false}

         defaultValue="others"
         onChange={(e) => setgender(e.target.value)}
         />{""}
         others
         <br />
         <br />
         <input type="radio" 
        name="gender"
        checked = {gender === "female"?true:false}

         defaultValue="female"
         onChange={(e) => setgender(e.target.value)}
         />{""}
         female
         <br />
         <br />
         <input type="radio" 
        name="gender"
        checked = {gender === "male"?true:false}

         defaultValue="male"
         onChange={(e) => setgender(e.target.value)}
         />{""}
         male
         <br />
         <br />






        <button>submit</button>
        <br />
        <br />
      </form>
    </div>
  )
};
export default App;
