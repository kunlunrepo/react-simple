import {useParams} from "react-router-dom";

const Classify = () => {
    // 获取路由参数
    const params = useParams();
    console.log(params)

    return <div>
        分类的页面
        <div>父组件的参数{params.xd}</div>
    </div>
}

export default Classify;
