import React from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const activeStyle = ({isActive}) => {
        return isActive ? "background" : "";
    }

    const navigate = useNavigate()

    const toClassify = () => {
        navigate('classify', {state: {xd: "张三", website: 18}})
    }

    return <div>
        首页的页面
        <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
            <div className="link">
                <button onClick={toClassify}>开发分类页面</button>
            </div>
            <div className="link">
                <NavLink to="navigation" className={activeStyle}>打开导航的页面</NavLink>
            </div>
        </div>
        <div style={{background: "red"}}>
            <Outlet/>
        </div>
    </div>
}

export default Home;
