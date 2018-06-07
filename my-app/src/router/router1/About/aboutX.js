import React from 'react';
import {Link} from 'react-router-dom';
import AboutA from './aboutA'
import AboutB from './aboutB'
import AboutC from './aboutC'
import About from '../about'

class AboutX extends React.Component {
    render(){ 
        let {match:{params:{id}}} = this.props;
        let temp='';
        switch(id){
            case 'a':
                temp = <AboutA />
            break;
            case 'b':
                temp = <AboutB />
            break;
            case 'c':
                temp = <AboutC />
            break;
            default:
                temp = <AboutA />
            break;
        }
        return (
            <div>
                <About />
                {temp}
            </div>
        )
    }
}
 
export default AboutX;
