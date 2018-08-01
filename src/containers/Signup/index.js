import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import { setError, clearError } from '../../store/actions/error';

export default connect(
  null,
  { setError, clearError }
)(Signup);
