import { connect } from 'react-redux';
import moment from 'moment';
import { setStartDate } from './dateSlice';
import Date from './Date';

const mapStateToProps = state => {
    return {
        label: 'Start Date',
        date: state.filter.startDate
    }
};  

const mapDispatchToProps = dispatch => {
    return {
        onChange: date => {
            dispatch(setStartDate(moment(date)))
        }
    }
};

const StartDateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Date);

export default StartDateContainer;