import React from 'react';
import { ReactReduxContext } from 'react-redux'
import {getSmurf} from '../actions/index'
class Smurf extends React.Component {
    render() {
        const { smurf } = getSmurf();

        return (
            <ReactReduxContext.Consumer>
               
            
                    (<div data-testid="smurf" className="card">
                        <p> {smurf.name}</p>
                        <p> {smurf.position}</p>
                        <p> {smurf.nickname}</p>
                        <p> {smurf.description}</p>
                    </div>);

            </ReactReduxContext.Consumer>
        )
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.