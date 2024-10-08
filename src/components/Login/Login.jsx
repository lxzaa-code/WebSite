import React, { useEffect, useState } from "react";
import "./Login.css";
import ReturnMainPage from "../mess/ReturnMainPage";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Login | Mdr-C-Tutorial";
    }, []);

    const go = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Login">
            <ReturnMainPage />
            <div className="Login_C">
                <div className="Login_main">
                    <h1>登录</h1>
                    <form onSubmit={go}>
                        <label>
                            账号：
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </label>
                        <br />
                        <label>
                            密码：
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </label>
                        <br />
                        <button type="submit">登录</button>
                        <a href="/register">
                        <h3>没有账号？前去注册</h3>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
