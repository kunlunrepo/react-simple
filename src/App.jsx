import './App.css'


// 类组件
import React from "react";

class App extends React.Component {

    state = {
        value: '张三'
    }

    handleSubmit = () => {
        alert(this.name.value);
    };

    handleChange = (e) => {
        alert(e.target.value)
        this.setState({value: e.target.value})
    };
   render() {
       return (
           /* 非受控组件 */
           <form onSubmit={this.handleSubmit}>
               <label>
                   名字：
                   <input type="text" ref={(a) => (this.name = a)}/>
               </label>
               <button type="submit">提交</button>
           </form>
       )
       /*return (
           /!* 受控组件 *!/
           <form onSubmit={this.handleSubmit}>
               <label>
                   名字：
                   <input type="text"
                          value={this.state.value}
                          onChange={this.handleChange}/>
               </label>
               <button type="submit">提交</button>
           </form>
       )*/
   }
}

export default App
