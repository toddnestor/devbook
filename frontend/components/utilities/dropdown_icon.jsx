import React from 'react';

class DropdownIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setDropdown(!this.state.dropdownOpen);
  }

  closeDropdown() {
    this.setDropdown(false);
  }

  openDropdown() {
    this.setDropdown(true);
  }

  setDropdown(open) {
    this.setState({dropdownOpen: open});
  }

  render() {
    let { content, children, className, notificationCount } = this.props;

    let classes = className + ' has-dropdown' || ' has-dropdown';

    return (
      <div className={classes} onClick={this.toggleDropdown.bind(this)}>
        {content}
        <span className="badge notification" style={{display: notificationCount ? 'inline-block' : 'none'}}>{notificationCount}</span>
        <div className="dropdown" style={{display: this.state.dropdownOpen ? 'block' : 'none'}}>
          { children }
        </div>
      </div>
    );
  }
}

export default DropdownIcon;
