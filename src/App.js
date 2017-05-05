import React, { Component } from 'react';
import './App.css';
import PatientIngestWizard from './containers/PatientIngestWizard'
import AppHeader from './components/AppHeader';
class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
              <AppHeader/>
              <PatientIngestWizard />
            </div>
        );
    }
}

export default App;
