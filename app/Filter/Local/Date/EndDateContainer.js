import { connect } from 'react-redux';
import { setEndDate } from './dateSlice';
import Date from './Date';

const mapStateToProps = state => {
    return {
        label: 'End Date',
        date: state.date.endDate
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: date => {
            dispatch(setEndDate(date))
        }
    }
};

const StartDateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Date);

export default StartDateContainer;