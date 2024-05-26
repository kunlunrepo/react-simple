import React, { useState } from "react";

const App = () => {
    const [message, setMessage] = useState({
        name: "旧课程",
        website: "www.baidu.com",
        staff: {
            name: "老王",
            hobby: "按摩"
        }
    });

    const changeName = () => {
        setMessage({ ...message, name: "新课程" }); // 展开运算符相当于浅拷贝
    };

    const changeHobby = () => {
        setMessage({ ...message, staff: { ...message.staff, hobby: "洗脚" } }); // 复杂对象需要多次展开
    };

    return (
        <div>
            <h1>{message.name}</h1>
            <h1>{message.website}</h1>
            <h1>{message.staff.name}</h1>
            <h1>{message.staff.hobby}</h1>
            <button onClick={changeName}>更改title</button>
            <button onClick={changeHobby}>更改hobby</button>
        </div>
    );
};
export default App;
