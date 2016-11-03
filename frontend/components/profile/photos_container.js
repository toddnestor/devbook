import { connect } from 'react-redux';
import Photos from './photos';

const mapStateToProps = ({profile}) => ({
  profile
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
