import './App.css'


// 类组件
import React from "react";

class App extends React.Component {

    // 创建容器
    inputRef = React.createRef();
    inputRef2 = React.createRef(); // 不要过度使用ref

    popClick = () => {
        console.log(this)
        console.log(this.inputRef.current.value)
        console.log(this.inputRef2.current.value)
    }

    /**
     * 渲染
     */
    render() {
        return (
            <>
                {/*<input type="text" placeholder="请输入内容" ref={
                    (e) => ((this.inputRef = e), console.log("ref执行了"))
                }/>*/}
                <input type="text" placeholder="请输入内容" ref={this.inputRef}/>
                <input type="text" placeholder="请输入内容" ref={this.inputRef2}/>
                <button onClick={this.popClick}>点击生成弹窗</button>
            </>
        )
    }
}

export default App
