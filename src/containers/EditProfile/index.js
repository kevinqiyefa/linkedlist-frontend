import { connect } from 'react-redux';
import EditProfile from '../../components/EditProfile';
import { setError, clearError } from '../../store/actions/error';
import { updateCurrentUser } from '../../store/actions/users';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    error: reduxState.error
  };
}

export default connect(
  mapStateToProps,
  { setError, clearError, updateCurrentUser }
)(EditProfile);
