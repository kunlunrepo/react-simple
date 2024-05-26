import { useLocation } from "react-router-dom";

const Classify = () => {
    // 获取路由参数
    const state = useLocation();
    console.log(state)


    return <div>
        分类的页面
        <div>父组件传值{state.state.xd}</div>
    </div>
}

export default Classify;
