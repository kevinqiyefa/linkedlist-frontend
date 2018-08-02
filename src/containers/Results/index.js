import { connect } from 'react-redux';
import Results from '../../components/Results';

function mapStateToProps(reduxState) {
  return {
    search: reduxState.search
  };
}

export default connect(mapStateToProps)(Results);
