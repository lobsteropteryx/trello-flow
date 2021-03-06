import { connect } from 'react-redux';
import { setStartDate } from './dateSlice';
import Date from './Date';

const mapStateToProps = state => {
    return {
        label: 'Start Date',
        date: state.date.startDate
    }
};  

const mapDispatchToProps = dispatch => {
    return {
        onChange: date => {
            dispatch(setStartDate(date))
        }
    }
};

const StartDateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Date);

export default StartDateContainer;