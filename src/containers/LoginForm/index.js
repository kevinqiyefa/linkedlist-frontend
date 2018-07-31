import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { authRequest } from '../../store/actions/auth';
import { setError, clearError } from '../../store/actions/error';

export default connect(
  null,
  { authRequest, setError, clearError }
)(LoginForm);
