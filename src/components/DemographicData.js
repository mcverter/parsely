import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {renderTextInput, renderGenderInput, renderMaritalInput, renderDOBInput} from './reduxFormFields/formFields'

const DemographicData = (props) => {
    const subformPrefix = 'demographic.';

    return (
        <div>
            <h1> Demographic Information </h1>
            <form>

                <div className="panel">
                    <h2> Personal Data </h2>
                    {renderTextInput({label:'First Name', fieldName: subformPrefix + 'firstName'})}
                    {renderTextInput({label:'Last Name', fieldName: subformPrefix + 'lastName'})}
                    {renderDOBInput({subformPrefix})}
                    {renderGenderInput({subformPrefix})}
                    {renderMaritalInput({subformPrefix})}
                </div>

                <div className="panel">
                    <h2> Home Address </h2>
                    {renderTextInput({label:'Street Address', fieldName: subformPrefix + 'street'})}
                    {renderTextInput({label:'City', fieldName: subformPrefix + 'city'})}
                    {renderTextInput({label:'State', fieldName: subformPrefix + 'state'})}
                    {renderTextInput({label:'Zip Code', fieldName: subformPrefix + 'zip'})}
                </div>
                <div className="panel">
                    <h2>Contact</h2>
                    {renderTextInput({label:'Phone', fieldName: subformPrefix + 'phone'})}
                    {renderTextInput({label:'Email', fieldName: subformPrefix + 'email'})}
                </div>

            </form>
            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.nextPage} className="next">Next</button>
            </div>
        </div>
    )
};

export default reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false
})(DemographicData)

