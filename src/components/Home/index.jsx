import React, {Suspense} from "react";
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
                {/*<div onClick={toClassify} >开发分类页面</div>*/}
                <NavLink to="classify" className={activeStyle}>打开分类的页面</NavLink>
            </div>
            <div className="link">
                <NavLink to="navigation" className={activeStyle}>打开导航的页面</NavLink>
            </div>
        </div>
        <div style={{background: "red"}}>
            <Suspense fallback={<h2>加载中</h2>}>
                <Outlet/>
            </Suspense>
        </div>
    </div>
}

export default Home;
