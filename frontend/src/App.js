import React from "react";


//import "./App.css";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import TeacherView from "./components/TeacherView";
import CreateAdd from "./components/CreateAdd";
import MyAdd from "./components/MyAdd";
import StudentView from "./components/StudentView";
import EditeAdd from "./components/EditeAdd";
import SupportPage from "./components/SupportPage";
import TeacherLogin from "./components/TeacherLogin";
import Log from "./components/Log";
const App = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home/support" element={<SupportPage/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>  
                    <Route path="/teacher/registration" element={<TeacherRegister/>}></Route> 
                    <Route path="/student/registration" element={<StudentRegister/>}></Route>  
                    <Route path="/teacher" element={<TeacherView/>}></Route>
                    <Route path="/teacher/createadd" element={<CreateAdd/>}></Route>
                    <Route path="/teacher/myadd" element={<MyAdd/>}></Route>
                    <Route path="/teacher/editeadd/:id" element={<EditeAdd />} />
                    <Route path="/student" element={<StudentView/>}></Route>
                    <Route path="/teacher/login" element={<TeacherLogin/>}></Route>
                    <Route path="/login_as" element={<Log/>}></Route>
                    {/* <Route path="/" element={ */}
                        //only show the logout component if the user is logged in
                        {/* user ? <Logout /> : */}
                            {/* <Login /> */}

              

                    
                </Routes>
                <Footer></Footer>
            </Router>
        </div>

    );
};

export default App;
