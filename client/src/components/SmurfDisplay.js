import React from 'react';
import { ReactReduxContext } from 'react-redux'
import Smurf from './Smurf';
import initialState from '../reducers/index'

export class SmurfDisplay extends React.Component {
    render() {
        if ({initialState : error}) {
            return <h2>Something went wrong: {state.error}</h2>;
          }
        
          if ({initialState : isLoading}) {
            return <h2>Your smurf is being fetched!</h2>;
          }
        return (
            <ReactReduxContext.Consumer>
                {({ store }) => {
                    return

                    (<div>
                        <Smurf></Smurf>
                    </div>);

                }}
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