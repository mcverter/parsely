/**
 * Created by mitchell on 5/4/17.
 */
import React from 'react';
const style={
    backgroundColor: '#efefef',
    color: 'maroon',
    fontWeight: '700',
    fontSize: '200%',
    padding: '50px',
    margin: '30px'
};

const AppHeader = () => {
    return (
        <div style={style} className="jumbotron">
            Parsely Health Ingest Form
        </div>
    )
};

export default AppHeader;