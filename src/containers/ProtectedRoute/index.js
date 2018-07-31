import { connect } from 'react-redux';
import ProtectedRoute from '../../hocs/ProtectedRoute';

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
