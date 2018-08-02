import { connect } from 'react-redux';
import Profile from '../../components/Profile';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(mapStateToProps)(Profile);
