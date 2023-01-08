import axios from 'axios'
import "./Form.css"

const Form=  ()=>{
    let userData={}


   const title=(e)=>{  userData.title=e.target.value }
   const name=(e)=>{userData.name=e.target.value}
   const phone=(e)=>{ userData.phone=e.target.value }
    const email=(e)=>{ userData.email=e.target.value }
     const password=(e)=>{ userData.password=e.target.value }
  
     const Handleclick=()=>{
  console.log(userData)
  axios.post("http://localhost:3001/register",userData)
  .then(res => {
    console.log(res.data);
})
.catch( (err)=> {
    console.log(err);
});
     }

    return(
<div id="form">
    <h1>Signup</h1>
    <label>title</label><br/>
    <input placeholder="title" onChange={title}/> <br/>
    <label>name</label><br/>
    <input placeholder="name"onChange={name} /><br/>
    <label>phone</label><br/>
    <input placeholder="phone" onChange={phone}/><br/>
    <label>email</label><br/>
    <input placeholder="email" onChange={email}/><br/>
    <label>password</label><br/>
    <input placeholder="password" onChange={password}/><br/> <br/>
    <button onClick={Handleclick}>submit</button>
</div>
    )
}

export default Form