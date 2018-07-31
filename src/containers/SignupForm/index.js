import { connect } from 'react-redux';
import SignupForm from '../../components/SignupForm';
import { setError, clearError } from '../../store/actions/error';

export default connect(
  null,
  { setError, clearError }
)(SignupForm);
