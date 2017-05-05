import React from 'react'
import {reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {renderCheckbox} from './reduxFormFields/formFields'



let MedicalChecklist = (props) => {
    const subformPrefix = "checklist.";
    
    return (
        <div>
            <h1>Medical History: Part 1 </h1>
            <h3>Do you have any history with any of the following conditions?</h3>
            <form>
                <div className="panel">
                    <h2>Blood</h2>
                    {renderCheckbox({label:"High Blood Pressure", fieldName: subformPrefix + "bloodPressure"})}
                    {renderCheckbox({label:"High Cholesterol", fieldName: subformPrefix + "cholesterol"})}
                    {renderCheckbox({label:"Hepatitis", fieldName: subformPrefix + "hepatitis"})}

                    {renderCheckbox({label:"Diabetes", fieldName: subformPrefix + "diabetes"})}
                </div>

                <div className="panel">
                    <h2>Heart</h2>
   {renderCheckbox(        {label:"Heart Disease", fieldName: subformPrefix + "heartDisease"})}
                    {renderCheckbox({label:"HeartAttack", fieldName: subformPrefix + "heartAttack"})}
                    {renderCheckbox({label:"Chronic Obstructive Pulmonary Disorder", fieldName: subformPrefix + "chronicPulmonary"})}
                </div>

                <div className="panel">
                    <h2>Psychiatric</h2>
                    {renderCheckbox({label:"Anxiety", fieldName: subformPrefix + "anxiety"})}
                    {renderCheckbox({label:"Depression", fieldName: subformPrefix + "depression"})}
                    {renderCheckbox({label:"Psychotic Disorder", fieldName: subformPrefix + "psychotic"})}
                    {renderCheckbox({label:"Seizures", fieldName: subformPrefix + "seizures"})}
                    {renderCheckbox({label:"Alcohol / Drug Abuse", fieldName: subformPrefix + "drugAlcohol"})}
                </div>
            </form>

            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.previousPage} className="next">Previous</button>
                <button type="button" onClick={props.nextPage} className="next">Next</button>
            </div>
        </div>
    );
};

MedicalChecklist = reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false,
})(MedicalChecklist);
export default MedicalChecklist;
