import React from 'react'
import { Field, reduxForm, formValueSelector} from 'redux-form'
import {connect} from 'react-redux';

let Submit = (props) => {
    const {demographic, checklist, shortAnswer, family} = props;
    const ajaxSubmission = {
        demographic: props.demographic,
        checklist: props.checklist,
        shortAnswer: props.shortAnswer,
        family: props.family
    };

    const propsAsString = JSON.stringify(ajaxSubmission, null, 2);
    return (
        <div>
            <h2> AJAX Payload </h2>

            {propsAsString}
        </div>
    );

};



Submit = reduxForm({
    form: 'ingestWizard',
    destroyOnUnmount: false,
    // validate
})(Submit);


const selector = formValueSelector('ingestWizard');
Submit = connect(
    state => {
        debugger;
        const { demographic, checklist, shortAnswer, family } =
            selector(state, 'demographic', 'checklist', 'shortAnswer', 'family');
        return {
            demographic,
            checklist,
            shortAnswer,
            family
        }
    }
)(Submit);

export default Submit;
