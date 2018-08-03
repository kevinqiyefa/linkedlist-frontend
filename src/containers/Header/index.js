import { connect } from 'react-redux';
import Header from '../../components/Header';
import {
  searchForUsers,
  searchForCompanies,
  searchForJobs
} from '../../store/actions/search';
import { logout } from '../../store/actions/auth';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    search: reduxState.search
  };
}

export default connect(
  mapStateToProps,
  { logout, searchForUsers, searchForCompanies, searchForJobs }
)(Header);
