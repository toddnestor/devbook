import React from 'react';

class DropdownButton extends React.Component {
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
    let { buttonContent, children, className } = this.props;

    let classes = className + ' has-dropdown' || 'btn btn-default has-dropdown';

    return (
      <button type="button" className={classes} onClick={this.toggleDropdown.bind(this)}>
        {buttonContent}
        <div className="dropdown" style={{display: this.state.dropdownOpen ? 'block' : 'none'}}>
          { children }
        </div>
      </button>
    );
  }
}

export default DropdownButton;
