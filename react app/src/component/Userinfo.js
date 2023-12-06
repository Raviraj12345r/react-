import { useState } from "react";
import { useAuthContext } from "./myapp";



function UserInfo(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {user,login,logout}=useAuthContext();

    const loginUser= ()=>{
        login({username,password});
        setUsername('');
        setPassword('');
    }

    return(
        <div>
            {
                user?(
                    <>
            < p style={{ color: '#32a852' }} > Welcome:*{user.username}*</p>
            <button style={{ color: 'blue' }} onClick={logout} >Logout</button>
            
            </>
                ):(
                    <>

                    <h3 style={{ color: 'white'}} id className="App"> Please Login Here</h3>

                    <input className="App" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter UserName"/><br></br><br></br>
                    
                    <input  className="App"  type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br/><br></br>                 
                    <button style={{color:'#425af5'}}  className="App"  onClick={loginUser}> Sign up</button>
                    </>
                )

            }
            
        </div>
    );
}

export default UserInfo;