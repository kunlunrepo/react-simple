import './App.css'
// 类组件
import React from "react";


class App extends React.Component {

    state={
        counte: 0,
        title: 'react'
    }

    add = ()=> {
        this.setState({counte: this.state.counte + 1})
    }

    changName = ()=> {
        this.setState({title: 'vue'})
    }

    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
                <div>当前的计数：{this.state.counte}</div>
                <button onClick={this.add} >增加</button>
                <button onClick={this.changName} >更改title</button>
            </>
        )
    }
}

export default App
