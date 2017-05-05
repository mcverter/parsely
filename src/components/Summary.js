import React from 'react'
import { Field, reduxForm, formValueSelector} from 'redux-form'
import {connect} from 'react-redux';

const renderEntry = (label, content) => {
    if (content) {
        return (
            <div>
                <div className="summary-label">{label}</div>
                <div className="summary-content">{content}</div>
            </div>
        )
    } else {
        return ' '
    }
};

const renderFamilyEntry = (memberlabel, familyMember) => {
    if (familyMember) {
        return (
            <div>
                <h2> {memberlabel} </h2>
                {renderEntry('Name', familyMember.name)}
                {renderEntry('Birthday', familyMember.dob)}
                {renderEntry('Medical History', familyMember.medicalHistory)}
                {renderEntry('Deceased', familyMember.deceased)}

            </div>
        )
    } else {
        return ''
    }
};
/*
 {
 "demographic": {
 "firstName": "MITCHELL",
 "lastName": "VERTER",
 "street": "73 ST PAULS PLACE F5",
 "city": "BROOKLYN",
 "state": "NEW YORK",
 "zip": "11226",
 "phone": "6467057784",
 "email": "MITCHELL.VERTER@GMAIL.COM",
 "dob": "2017-05-17"
 },
 "checklist": {
 "bloodPressure": true,
 "hepatitis": true,
 "heartAttack": true,
 "chronicPulmonary": true,
 "seizures": true
 },
 "shortAnswer": {
 "smokingAnswer": "aaww",
 "smokingYN": true,
 "drugsYN": true,
 "drugsAnswer": "dddd"
 },
 "family": {
 "father": {
 "name": "iweaf",
 "dob": "2017-05-09",
 "medicalHistory": "wef",
 "deceased": true
 },
 "paternalGF": {
 "name": "awefa",
 "dob": "2017-05-10",
 "medicalHistory": "u",
 "deceased": true
 }
 }
 } } */

let Summary = (props) => {
    const showDemographicPanel = (demographic) => {
        return (
            <div>
                <h1> Summary</h1>
            <div className="panel">
                <h2> Demographic Data </h2>
                {renderEntry('First Name', demographic.firstName)}
                {renderEntry('Last Name', demographic.lastName)}
                {renderEntry('Email', demographic.email)}
                {renderEntry('Phone', demographic.phone)}
                {renderEntry('Street Address', demographic.street)}
                {renderEntry('City', demographic.city)}
                {renderEntry('State', demographic.state)}
                {renderEntry('Zip', demographic.zip)}
                {renderEntry('Gender', demographic.gender)}
                {renderEntry('Marital Status', demographic.marital)}
                <button onClick={()=>props.gotoPage(1)}> Edit this information </button>
            </div>
            </div>
        )
    };

    const showChecklistPanel  = (checklist) => {
        return (
            <div className="panel">
                <h2> Preexisting Conditions </h2>
                {renderEntry('First Name', checklist.cancer)}
                {renderEntry('Heart Disease', checklist.heartDisease)}
                {renderEntry('Diabetes', checklist.diabetes)}
                {renderEntry('Blood Pressure', checklist.bloodPressure)}
                {renderEntry('Cholesterol', checklist.cholesterol)}
                {renderEntry('Liver', checklist.liver)}
                {renderEntry('Drugs & Alcohol', checklist.drugAlcohol)}
                {renderEntry('Anxiety', checklist.anxiety)}
                {renderEntry('Depression', checklist.depression)}
                {renderEntry('Genetic', checklist.genetic)}
                {renderEntry('HeartAttack', checklist.heartAttack)}
                {renderEntry('Chronic Pulmonary', checklist.chronicPulmonary)}
                {renderEntry('Hepatitis', checklist.hepatitis)}
                {renderEntry('Psychotic', checklist.psychotic)}
                {renderEntry('Seizures', checklist.seizures)}
                <button onClick={()=>props.gotoPage(2)}> Edit this information </button>
            </div>
        )
    };

    const showShortAnswerPanel = (shortAnswer) => {
        console.log('short answer', shortAnswer);
        return (
            <div className="panel">
                <h2>Short Answers </h2>
                {renderEntry("Do you smoke?", shortAnswer.smokingYN)}
                {renderEntry("Description", shortAnswer.smokingAnswer)}
                {renderEntry("Do you drink?", shortAnswer.alcoholYN)}
                {renderEntry("Description", shortAnswer.alcoholAnswer)}
                {renderEntry("Do you do drugs?", shortAnswer.drugsYN)}
                {renderEntry("Description", shortAnswer.drugsAnswer)}
                {renderEntry("Do you do take medications?", shortAnswer.medicationYN)}
                {renderEntry("Description", shortAnswer.medicationsExplanation)}
                <button onClick={()=>props.gotoPage(3)}> Edit this information </button>
            </div>
        )

    };

    const showFamilyPanel = (family) => {
        return (
            <div className="panel">
                <h2>Family History</h2>
                {renderFamilyEntry('Mother', family.mother)}
                {renderFamilyEntry('Father', family.father)}
                {renderFamilyEntry('Maternal Grandmother', family.maternalGM)}
                {renderFamilyEntry('Maternal Grandfather', family.maternalGF)}
                {renderFamilyEntry('Pathernal Grandmother', family.paternalGM)}
                {renderFamilyEntry('Paternal Grandfather', family.paternalGF)}
                <button onClick={()=>props.gotoPage(4)}> Edit this information </button>
            </div>
        )

    };


    return (
        <div>
            {props.demographic && showDemographicPanel(props.demographic)}
            {props.checklist && showChecklistPanel(props.checklist)}
            {props.shortAnswer && showShortAnswerPanel(props.shortAnswer)}
            {props.family && showFamilyPanel(props.family)}
            <div className="wizard-navigation-buttons">
                <button type="button" onClick={props.previousPage} className="next">Previous</button>
                <button type="button" onClick={props.nextPage} className="next">Next</button>
            </div>
        </div>
    );

};


/*
 <div>
 <h2>Demographic Data</h2>
 <p> {props.demographic.firstName} </p>
 <p> {props.demographic.lastName} </p>
 </div>

 */


Summary = reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false,
    // validate
})(Summary);


const selector = formValueSelector('ingestWizard');
Summary = connect(
    state => {
        const { demographic, checklist, shortAnswer, family } =
            selector(state, 'demographic', 'checklist', 'shortAnswer', 'family');
        return {
            demographic,
            checklist,
            shortAnswer,
            family
        }
    }
)(Summary);

export default Summary;
