import { connect } from 'react-redux';
import Card from '../../components/Card';
import { applyJob } from '../../store/actions/users';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    search: reduxState.search
  };
}

export default connect(
  mapStateToProps,
  { applyJob }
)(Card);
