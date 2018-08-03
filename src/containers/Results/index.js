import { connect } from 'react-redux';
import Results from '../../components/Results';

function mapStateToProps(reduxState) {
  return {
    search: reduxState.search,
    currentUser: reduxState.currentUser
  };
}

export default connect(mapStateToProps)(Results);
