import './App.css'


// 类组件
import React from "react";

class App extends React.Component {

    state = {
        xd: true
    }

    popClick = () => {
        // console.log(document.getElementsByTagName('input')[0].value);

        // const { inputRef} = this.refs;
        // console.log(inputRef.value)

        console.log(this.inputRef.value)
    }

    handleClick = () => {
        this.setState({
            xd: !this.state.xd
        })
    }

    refFun = (e) => ((this.inputRef = e), console.log("ref执行了"))

    /**
     * 渲染
     */
    render() {
        return (
            <>
                {/*<input type="text" placeholder="请输入内容" ref={
                    (e) => ((this.inputRef = e), console.log("ref执行了"))
                }/>*/}
                <input type="text" placeholder="请输入内容" ref={this.refFun}/>
                <button onClick={this.popClick}>点击生成弹窗</button>
                <button onClick={this.handleClick}>点击更新组件</button>
            </>
        )
    }
}

export default App
