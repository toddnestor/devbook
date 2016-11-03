import { connect } from 'react-redux';
import Friends from './friends';

const mapStateToProps = ({profile}) => ({
  profile
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
