import {useState} from "react";
import { useImmer } from "use-immer";
const App = () => {
    const [name, setName] = useState("");
    // 数组
    const [person, setPerson] = useImmer([{id: 0, name: "老王", checked: false}]);

    const handleDelete = (item) => {
        setPerson(person.filter((person) => person.id !== item.id));
    };

    const handleCheck = (item, checked) => {
        setPerson((draft) => {
            console.log(draft)
            const checkedItem = draft.find((person) => person.id === item);
            console.log(checkedItem)
            checkedItem.checked = checked;
        })
        console.log(person)
    }

    return (
        <>
            <h1>员工列表：</h1>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button
                onClick={() => {
                    setPerson([...person, {id: person.length, name: name, checked: false}]);
                }}
            >
                添加
            </button>
            <ul>
                {
                    person.map((item) => (
                        <li key={item.id}>
                            <label>
                                <input type="checkbox" checked={item.checked}
                                       onChange={(e) => handleCheck(item.id, e.target.checked)}/>
                            </label>
                            {item.name}
                            <button onClick={() => handleDelete(item)}>删除</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default App;
