import {useSelector} from "react-redux";

const Test = () => {
    const { value, list } = useSelector((state) => {
        return state.counter
    });
    return  <div>测试组件 {value}, {list}</div>
}

export default Test
