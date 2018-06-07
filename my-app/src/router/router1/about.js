import React from 'react';
import {Route,Link} from 'react-router-dom';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>关于</h1>
                <Link to="/about/a">
                    <button>关于我们</button>
                </Link>
                <Link to="/about/b">
                    <button>关于你们</button>
                </Link>
                <Link to="/about/c">
                    <button>关于它们</button>
                </Link>
                
            </div>
        );
    }
}

export default About;