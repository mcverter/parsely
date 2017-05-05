/**
 * Created by mitchell on 5/2/17.
 */
import React, { Component, PropTypes } from 'react';

import DemographicData from '../components/DemographicData';
import MedicalHistory from '../components/MedicalChecklist';
import MedicalShortAnswers from '../components/MedicalShortAnswers';
import Acceptance from '../components/Acceptance';
import FamilyHistory from '../components/FamilyHistory'
import Summary from '../components/Summary';
import Submit from '../components/Submit';

class PatientIngestWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.goToPageNumber = this.goToPageNumber.bind(this);
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }
    goToPageNumber(pgNum) {
        this.setState({page: pgNum})
    }

    render() {
        const {page} = this.state;
        return (
            <div className="patient-ingest-form">
                {page === 1 && <DemographicData nextPage={this.nextPage}/>}
                {page === 2 && <MedicalHistory previousPage={this.previousPage} nextPage={this.nextPage} />}
                {page === 3 && <MedicalShortAnswers previousPage={this.previousPage} nextPage={this.nextPage} />}
                {page === 4 && <FamilyHistory previousPage={this.previousPage} nextPage={this.nextPage} />}
                {page === 5 && <Acceptance previousPage={this.previousPage}  nextPage={this.nextPage}/>}
                {page === 6 && <Summary gotoPage={this.goToPageNumber} previousPage={this.previousPage} nextPage={this.nextPage} />}
                {page === 7 && <Submit
                    previousPage={this.previousPage} onSubmit={this.props.handleSubmit}/>}
            </div>
        );
    }
}

PatientIngestWizard.propTypes = {
    handleSubmit: PropTypes.func
};

export default PatientIngestWizard;
