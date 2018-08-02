import { connect } from 'react-redux';
import Header from '../../components/Header';
import { searchForUsers } from '../../store/actions/search';
import { logout } from '../../store/actions/auth';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    results: reduxState.results
  };
}

export default connect(
  mapStateToProps,
  { logout, searchForUsers }
)(Header);
