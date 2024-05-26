import { useSearchParams } from "react-router-dom";

const Classify = () => {
    // 获取路由参数
    const [search, setSearch] = useSearchParams();
    const xd = search.get("xd");
    const website = search.get("website");

    return <div>
        分类的页面
        <div>父组件的参数{xd} {website}</div>
        <button onClick={()=>setSearch({xd: 1, website: 2})}>改变路由参数</button>
        <button onClick={()=>setSearch("xd=老张&website=dddd")}>改变路由参数2</button>
    </div>
}

export default Classify;
