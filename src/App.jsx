import React, { useState } from "react";

const App = () => {
    const [message, setMessage] = useState({
        name: "旧课程",
        website: "www.baidu.com",
    });

    const changeName = () => {
        setMessage({ ...message, name: "新课程" });
    };

    return (
        <div>
            <h1>{message.name}</h1>
            <h1>{message.website}</h1>
            <button onClick={changeName}>更改title</button>
        </div>
    );
};
export default App;
