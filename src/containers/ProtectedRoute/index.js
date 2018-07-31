import { connect } from 'react-redux';
import ProtectedRoute from '../../components/ProtectedRoute';

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
