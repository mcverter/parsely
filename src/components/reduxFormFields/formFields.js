/**
 * Created by mitchell on 5/4/17.
 */
import React from 'react';
import {Field} from 'redux-form';
import {Row, Col, Grid} from 'react-bootstrap';

export const renderTextInput = ({label, fieldName}) => {
    return (
        <div>
            <label>{label}</label>
            <Field name={fieldName} component="input" type="text" placeholder={label}/>
        </div>
    )
};

export const renderCheckbox = ({label, fieldName}) => {
    return (
        <div>
            <label  className="radio-label">{label}</label>
            <Field name={fieldName} component="input" type="checkbox" />
        </div>
    )
};

export const renderShortAnswer = (ynLabel, ynName, answerLabel, answerName) => {
    return (
        <div className="panel" key={ynName}>
            <div>
                {renderCheckbox({label: ynLabel, fieldName: ynName})}
            </div>
            <div>
                <label> {answerLabel} </label>
                <Field name={answerName} component="textarea"  rows="4" cols="50" />
            </div>
        </div>
    )
};


export const renderGenderInput = ({subformPrefix}) => {
    return (
        <div>
            <label>Gender</label>
            <div>
                <label className="radio-label"> Male</label> <Field name={subformPrefix + "gender"} component="input" className="radio-inline" type="radio" value="male"/>
                <label className="radio-label">Female</label><Field name={subformPrefix + "gender"} component="input" type="radio" className="radio-inline" value="female"/>
            </div>
        </div>
    )
};

export const renderMaritalInput = ({subformPrefix}) => {
    return (
        <div>
            <label>Marital Status</label>
            <div>
                <label className="radio-label"><Field name={subformPrefix + "marital"} component="input" type="radio" value="single"/> Single</label>
                <label className="radio-label"><Field name={subformPrefix + "marital"} component="input" type="radio" value="married"/> Married</label>
                <label className="radio-label"><Field name={subformPrefix + "marital"} component="input" type="radio" value="divorced"/> Divorced</label>
                <label className="radio-label"><Field name={subformPrefix + "marital"} component="input" type="radio" value="partnered"/> Life Partner</label>
                <label className="radio-label"><Field name={subformPrefix + "marital"} component="input" type="radio" value="widowed"/> Widowed </label>
            </div>
        </div>
    )
};

export const renderDOBInput = ({subformPrefix}) => {
    return (
        <div>
            <label>Date of Birth</label>
            <div>
                <Field name={subformPrefix + "dob"} component="input" type="date"/>
            </div>
        </div>
    );
};

export const renderFamilyInput = (relationship, fieldName) => {
    return (
        <div className="panel">
            <h2>{relationship}</h2>
            {renderTextInput({label: "Name", fieldName: fieldName + '.name'})}
            {renderDOBInput({subformPrefix: fieldName + "."})}
            {renderTextInput({label: "Any known Medical Conditions", fieldName: fieldName + '.medicalHistory'})}
            {renderCheckbox({label: "Deceased?", fieldName: fieldName + '.deceased'})}
        </div>
    )
};