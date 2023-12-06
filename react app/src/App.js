
import logo from './logo.svg';
import './App.css';
import { AuthProvide } from './component/myapp';
import UserInfo from './component/Userinfo';

function App() {
  return (
    <div className="App">
         <AuthProvide  >
        <h1 className="App">&#128578;MY App&#128578;</h1>
        <UserInfo/>
      </AuthProvide> 
    </div>
    
  );
}
export default App;