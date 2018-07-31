import { connect } from 'react-redux';
import NoAuthRoute from '../../components/NoAuthRoute';

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.auth.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  null
)(NoAuthRoute);
