import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderCheckbox} from './reduxFormFields/formFields';

const validate = (values) => {
};

const Acceptance = (props) => {
    const {handleSubmit} = props;

    return (
        <div>
            <h1> Acceptance </h1>
            <div className="panel">
                Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
                Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
            </div>
            <form>
                <div>
                    {renderCheckbox({label: "I Accept", fieldName: "acceptance"})}
                </div>
            </form>
            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.previousPage} className="next">Previous</button>
                <button type="button"  onClick={props.nextPage} className="next">Accept</button>
            </div>

        </div>
    );
};

export default reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false,
    validate: validate
})(Acceptance)
