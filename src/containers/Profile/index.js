import { connect } from 'react-redux';
import Profile from '../../components/Profile';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
    // userResults: reduxState.search.userResults
  };
}

export default connect(mapStateToProps)(Profile);
