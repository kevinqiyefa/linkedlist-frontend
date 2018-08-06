import { connect } from 'react-redux';
import Profile from '../../components/Profile';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs
  };
}

export default connect(mapStateToProps)(Profile);
