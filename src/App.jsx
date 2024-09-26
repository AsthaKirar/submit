import React from 'react'

const App = () =>{
  const submitHandler = (e)=>{
    e.preventDefault();
    
  
  const {username,firstname, lastname,email,contact} = e.target;
  
  const user = {
    username: username.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    contact: contact.value,


  };

console.log(user);
  }

return(
  <div className='w-80% mt-10 p-6 bg-slate-400 rounded mx-auto'>
    <form onSubmit={submitHandler} >
      <input name="username" placeholder='username' />
      <input name="firstname" placeholder='firstname' />
      <input name="lastname"  placeholder='lastname'/>
      <input name="email"  placeholder='email'/>
      <input name="contact" placeholder='contact' />
      <button className='bg-blue-700 mt-10'>submit</button>
    </form>
  </div>
)
};

export default App;


