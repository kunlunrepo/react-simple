import './App.css'

// 函数组件
/*function App(props) {
    return (
        <>
            <div>小滴课堂{props.text}课程</div>
        </>
    )
}*/


// 类组件
import React from "react";

class Children extends React.Component {
    render() {
        return (
            <>
                <div>正在学习的课程</div>
            </>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <div>小滴课堂{this.props.text}课程</div>
                <Children/>
            </>
        )
    }
}

export default App
