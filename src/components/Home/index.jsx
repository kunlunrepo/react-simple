import React from "react";
import {NavLink, Outlet} from "react-router-dom";

class Home extends React.Component {
    activeStyle = ({isActive}) => {
        return isActive ? "background" : "";
    }
    state={
        name: "张三三",
        website: "www.baidu.com"
    }
    render() {
        return (
            <div>
                首页的页面
                <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
                    <div className="link">
                        <NavLink
                            to={`classify`}
                            state={{xd: this.state.name, website: this.state.website}}
                            className={this.activeStyle}>打开分类的页面</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to="navigation" className={this.activeStyle}>打开导航的页面</NavLink>
                    </div>
                </div>
                <div style={{background: "red"}}>
                    <Outlet/>
                </div>
            </div>
        )
    }
}

export default Home;
