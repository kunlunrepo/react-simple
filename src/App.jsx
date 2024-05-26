import './App.css'


// 类组件
import React from "react";

class App extends React.Component {

    /**
     * 弹窗方法
     */
    popClick = () => {
        // console.log(document.getElementsByTagName('input')[0].value);
        const { inputRef} = this.refs;
        console.log(inputRef.value)
    }

    /**
     * 渲染
     */
    render() {
        return (
            <>
                <input type="text" placeholder="请输入内容" ref="inputRef"/>
                <button onClick={this.popClick}>点击生成弹窗</button>
            </>
        )
    }
}

export default App
