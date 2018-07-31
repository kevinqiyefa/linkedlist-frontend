import { connect } from 'react-redux';
import Header from '../../components';
import { logout } from '../../store/actions/auth';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Header);
