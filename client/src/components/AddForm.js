
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index'
import React from 'react';

const mapStateToProps = state => {
    return {
        name: state.name,
        position: state.position,
        nickname: state.nickname,
        description: state.description
    };
};


class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', position: '', nickname: '', description: '', error: '' };
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event) {
        event.preventDefault();
        this.setState({ name: event.target.value });
    }


    render() {
        return (<section>
            <h2>Add Smurf</h2>
            <form onSubmit={console.log(addSmurf())}>
                
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br />
                    <input value={this.state.value} onChange={this.handleChange} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br />
                    <input value={this.state.value} onChange={this.handleChange} name="position" id="position" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label><br />
                    <input value={this.state.value} onChange={this.handleChange} name="description" id="description" />
                </div>


                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button type='submit'>Submit Smurf</button>
            </form>
        </section>);
    }

}

export default connect(mapStateToProps, { AddForm })(AddForm);;

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
