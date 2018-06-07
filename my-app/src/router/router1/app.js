import React from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import AboutA from './About/aboutA'
import AboutB from './About/aboutB'
import AboutC from './About/aboutC'
import AboutX from './About/aboutX'
import Btn from './button'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    click = () => {
        window.history.back()
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <button>首页</button>
                </Link>
                <Link to="/about">
                    <button>关于</button>
                </Link>
                <div>都是页面</div>
                <button
                    onClick={this.click}
                >按钮</button>
                <Route path="/1" children={(url)=>{
                    return <Btn url={url}/>
                }}/>
                <Route exact path="/" component={Index}></Route>
                <Route exact strict path="/about" component={AboutX}></Route>
                <Route path="/about/:id" component={AboutX}></Route>
            </div>
        );
    }
}

export default App;