import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import { createUserRequest } from '../../store/actions/users';
import { authRequest } from '../../store/actions/auth';
import { setError, clearError } from '../../store/actions/error';

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error
  };
}

export default connect(
  mapStateToProps,
  { setError, clearError, authRequest, createUserRequest }
)(Signup);
