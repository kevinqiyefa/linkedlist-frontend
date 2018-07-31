import { connect } from 'react-redux';
import Homepage from '../../components/Homepage';
import { fetchJobsRequest } from '../../store/actions/jobs';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs
  };
}

export default connect(
  mapStateToProps,
  { fetchJobsRequest }
)(Homepage);
