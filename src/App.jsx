import './App.css'


// 类组件
import React from "react";

class App extends React.Component {

    constructor(props) {
        // 固定写法
        super(props);
        // 状态值
        this.state = {
            isWash: false
        }
        // 绑定this
        this.handlerClick = this.handlerClick.bind(this)
    }

    /**
     * 渲染
     */
    render() {
        console.log(this)
        return (
            <>
                <div onClick={this.handlerClick}>
                    老王今天{this.state.isWash ? "去" : "没去"}洗脚了
                </div>
            </>
        )
    }

    /**
     * 点击方法 不使用箭头函数的话需要绑定this
     */
    handlerClick () {
        // console.log("点击了");
        // 改变状态值
        this.setState({
            isWash: !this.state.isWash
        })
    }
}

export default App
