// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { useState } from 'react';


// let name="vikas";
function App() {
  const [Mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
}
  
  const toogleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#052658";
      showAlert("Dark mode has been enable", "success")
      document.title="Dark-Mode";
    }
    else if (Mode==="dark") {
      setMode("Green");
      document.body.style.backgroundColor="green";
      showAlert("green mode has been enable", "success")
    }
    else if (Mode==="Green") {
      setMode("Red");
      document.body.style.backgroundColor="red";
      showAlert("Red mode has been enable", "success")
    }
    else if (Mode==="Red") {
      setMode("crimson");
      document.body.style.backgroundColor="crimson";
      showAlert("Crimson mode has been enable", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enable", "success")
    }
  }
 
  return (
    <>
   
    <BrowserRouter>
    <Navbar title="TextUtils" mode={Mode} toogleMode={toogleMode} />
    <Alert alert={alert}/>
      <Routes>
      {/* <Route path="/" element={ <Navbar title="TextUtils" mode={Mode} toogleMode={toogleMode} />}/> */}
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>} />
        {/* <Route path="users" element={<Users />}> */}
          <Route path="/about" element={<About mode={Mode} />} />
          {/* <Route path=":id" element={<UserProfile />} /> */}
          {/* <Route path="me" element={<OwnUserProfile />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
