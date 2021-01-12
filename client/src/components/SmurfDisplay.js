import React from 'react';
import { ReactReduxContext } from 'react-redux'
import Smurf from './Smurf';
import {  CALL_S,  getSmurf } from '../actions';

export class SmurfDisplay extends React.Component {
    render() {
        getSmurf();
        console.log(getSmurf())
        ({initialState : CALL_S} )?  <p>Your smurf is being fetched!</p> : <p>Something went wrong: </p>; 
       
        return (
            <ReactReduxContext.Consumer>


                    (<div>
                        <Smurf></Smurf>
                    </div>);
            </ReactReduxContext.Consumer>
        )
    }
}

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.