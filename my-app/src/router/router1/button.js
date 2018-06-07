import React from 'react';
import {Link} from 'react-router-dom';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    click = () => {
        let {url:{history:{goBack}}} = this.props;
        goBack();
    }
    render() { 
        return (
            <div>
            <Link to="/1"
                onClick={this.click}
            >
                <button>返回上一次</button>
            </Link>
            </div>
        )
    }
}
 
export default Btn;