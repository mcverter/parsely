import React from 'react'
import {reduxForm} from 'redux-form'
import {renderShortAnswer} from './reduxFormFields/formFields'

let MedicalShortAnswers = (props) => {
    const subformPrefix = "shortAnswer.";

    const formContents = [
        {ynPrompt: 'Do you smoke any tobacco products?', ynName: "smokingYN", shortAnswerPrompt: 'How much and how often?', shortAnswerName:  "smokingAnswer"},
        {ynPrompt: 'Do you drink alcohol?', ynName: "alcoholYN", shortAnswerPrompt: 'How much and how often?', shortAnswerName:  "alcoholAnswer"},
        {ynPrompt: 'Have you regularly used illicit drugs?', ynName: "drugsYN", shortAnswerPrompt: 'How much and how often?', shortAnswerName:  "drugsAnswer"},
        {ynPrompt: 'Are you currently taking any medications?', ynName: "medicationYN", shortAnswerPrompt: 'Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.', shortAnswerName:  "medicationAnswer"},
        {ynPrompt: 'Do you have any allergies or reactions to any medications?', ynName: "allergiesYN", shortAnswerPrompt: 'Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.', shortAnswerName:  "allergiesAnswer"}
    ];

    return (
        <div>
            <h1> Medical History: Part 2 </h1>
            <h3> Please answer the following questions </h3>
            <form>
                {formContents.map(content => {
                    return renderShortAnswer(
                        content.ynPrompt,
                        subformPrefix + content.ynName,
                        content.shortAnswerPrompt,
                        subformPrefix + content.shortAnswerName)})}
            </form>
            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.previousPage} className="next">Previous</button>
                <button type="button" onClick={props.nextPage} className="next">Next</button>
            </div>
        </div>

    );
};

export default reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false,
})(MedicalShortAnswers);



