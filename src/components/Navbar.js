import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: `navbarSectionContainer`
    }
  }
  makeNavbarBackgroundWhite() {
    let className = this.state.className;
    if (className = `navbarSectionContainer`) {
      className += ` navbarSectionContainer--scroll`;
    } else {
      return;
    }
    this.setState({ className });
  }
  makeNavbarBackgroundTransparent() {
    let className = this.state.className;
    className = `navbarSectionContainer`;
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
        <a href="#top" className="navbarSectionContainer__title">CV for Parkside</a>
        <ul className="navbarSectionContainer__list">
          <li>
            <a href="#top" className="navbarSectionContainer__listItem">About</a>
          </li>
          <li>
            <a href="#skills" className="navbarSectionContainer__listItem">Skills</a>
          </li>
          <li>
            <a href="#work" className="navbarSectionContainer__listItem">Work</a>
          </li>
          <li>
            <a href="#contact" className="navbarSectionContainer__listItem">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}