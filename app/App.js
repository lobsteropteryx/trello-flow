import '../style.css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import filterSlice from './Filter/filterSlice';
import Filters from './Filter/Filters';
import AuthPortalContainer from './Trello/AuthPortal/AuthPortalContainer';
import ScatterPlotContainer from './ScatterPlot/ScatterPlotContainer';
import HistogramContainer from './Histogram/HistogramContainer';
import StatsContainer from './Stats/StatsContainer';
import settingsSlice from './Settings/settingsSlice';
import SettingsContainer from './Settings/SettingsContainer';
import StartDateContainer from './Date/StartDateContainer';
import EndDateContainer from './Date/EndDateContainer';
import dateSlice from './Date/dateSlice';

const rootReducer = combineReducers({
    filter: filterSlice,
    settings: settingsSlice,
    date: dateSlice
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

const App = () => {
    return (
        <div className="container">
            <AuthPortalContainer />
            <div className="wrapper">
                <div className="filter">
                    <Filters />
                    <div className="settings">
                        <SettingsContainer />
                        <StartDateContainer />
                        <EndDateContainer />
                    </div>
                    <StatsContainer />
                </div>
                <div className="chart">
                    <HistogramContainer />
                    <ScatterPlotContainer />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);