import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: `navbar`
    }
  }
  makeNavbarBackgroundWhite() {
    let className = this.state.className;
    if (className = `navbar`) {
      className += ` navbar--scroll`;
    } else {
      return;
    }
    this.setState({ className });
  }
  makeNavbarBackgroundTransparent() {
    let className = this.state.className;
    className = `navbar`;
    this.setState({ className });
  }
  render() {
    window.onscroll = () => {
      if (document.body.scrollTop >= 50) {
        this.makeNavbarBackgroundWhite();
      } else {
        this.makeNavbarBackgroundTransparent();
      }
    }
    return (
      <div className={this.state.className} >
        <a href="#top" className="navbar__title">CV for Parkside</a>
        <ul className="navbar__list">
          <li>
            <a href="#top" className="navbar__listItem">About</a>
          </li>
          <li>
            <a href="#skills" className="navbar__listItem">Skills</a>
          </li>
          <li>
            <a href="#work" className="navbar__listItem">Work</a>
          </li>
          <li>
            <a href="#contact" className="navbar__listItem">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}