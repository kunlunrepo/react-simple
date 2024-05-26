import {useState} from "react";

const App = () => {
    const [name, setName] = useState("");
    const [person, setPerson] = useState([{id: 0, name: "老王"}]);

    return (
        <>
            <h1>员工列表：</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button
                onClick={() => {
                    setPerson([...person, {id: person.length, name: name}]);
                }}
            >
                添加
            </button>
            <ul>
                {
                    person.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default App;
