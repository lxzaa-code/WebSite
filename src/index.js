import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Discussion from "./components/Discussion/Discussion";
import Mdr from "./components/Mdr/Mdr";
import Story from "./components/Story/Story";
import TechStack from "./components/TechStack/TechStack";
import Tutorial from "./components/Tutorial/Tutorial";
import Credits from "./components/Credits/Credits";
import FeedBack from "./components/FeedBack/FeedBack";
import About from "./components/About/About";
import Handout from "./components/Handout/Handout";
import Search from "./components/Nav/Search";
import HelloWorld from "./components/Tutorial/HelloWorld/HelloWorld";
import Numbers from "./components/Tutorial/Numbers/Numbers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/discussion" element={<Discussion />} />
                <Route path="/mdr" element={<Mdr />} />
                <Route path="/story" element={<Story />} />
                <Route path="/tech" element={<TechStack />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/feedback" element={<FeedBack />} />
                <Route path="/about" element={<About />} />
                <Route path="/handout" element={<Handout />} />
                <Route path="/search" element={<Search />} />
                <Route path="/tutorial/01/:id" element={<HelloWorld />} />
                <Route path="/tutorial/02/:id" element={<Numbers />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
