import './App.css'
// 类组件
import React, {useState} from "react";


const App = () => {

    const [counte,setCounte] = useState(0);
    const [title,setTitle] = useState('react');
    console.log(counte, setCounte)

    const add = ()=> {
        setCounte((count) => {
            count++;
            console.log("更新的值",count)
            return count
        })
    }

    const changName = ()=> {
        setTitle('vue')
    }

    return <div>
        <h1>{title}</h1>
        <div>当前的计数：{counte}</div>
        <button onClick={add} >增加</button>
        <button onClick={changName} >更改title</button>
    </div>
}

export default App
