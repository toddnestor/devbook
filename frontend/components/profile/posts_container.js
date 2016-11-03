import { connect } from 'react-redux';
import Posts from './posts';

const mapStateToProps = ({profile}) => ({
  profile
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
