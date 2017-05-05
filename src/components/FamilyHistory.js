import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderFamilyInput} from './reduxFormFields/formFields'

const FamilyHistory = (props) => {
    const subformPrefix = 'family.';
    const { handleSubmit } = props;
    return (
        <div>
            <h1>Family History </h1>
            <form>
                {renderFamilyInput("Mother", subformPrefix + 'mother')}
                {renderFamilyInput("Father", subformPrefix +  'father')}
                {renderFamilyInput("Maternal Grandfather", subformPrefix + 'maternalGF')}
                {renderFamilyInput("Maternal Grandmother",subformPrefix +  'maternalGM')}
                {renderFamilyInput("Paternal Grandfather", subformPrefix + 'paternalGF')}
                {renderFamilyInput("Paternal Grandmother", subformPrefix + 'paternalGM')}
            </form>
            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.previousPage} className="next">Previous</button>
                <button type="button" onClick={props.nextPage} className="next">Next</button>
            </div>
        </div>
    )
};

export default reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false
})(FamilyHistory)

