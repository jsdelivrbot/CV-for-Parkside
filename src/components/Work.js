import React from 'react';
import Arrow from './Arrow';
import ImageSlide from './ImageSlide';
import randomQuoteMachine from '../images/random-quote-machine.png';
import weatherApp from '../images/weather-app.png';
import wikipediaViewer from '../images/wikipedia-viewer.png';

const projectImages = [weatherApp, randomQuoteMachine, wikipediaViewer];
const projectHeaders = [
  `Weather App`,
  `Random Quote Machine`,
  `Wikipedia Viewer`
];
const projectTexts = [
  `An app shows current weather in user's location and appropriate background image for that weather condition. User can click a button to toggle between Fahrenheit and Celcius.`,
  `An app shows new quote each time user clicks a button. User can also tweet favorite ones.`,
  `An app that user can search for Wikipedia articles. User can also click a button to read a random article.`
];
const projectSourceCodes = [
  `https://github.com/erolaliyev/freeCodeCamp/tree/master/weather-app`,
  `https://github.com/erolaliyev/freeCodeCamp/tree/master/random-quote-machine`,
  `https://github.com/erolaliyev/freeCodeCamp/tree/master/wikipedia-viewer`
];
const projectLivePreviews = [
  `https://erol-fcc-weather-app.surge.sh/`,
  `https://erol-fcc-random-quote-machine.surge.sh/`,
  `https://erol-fcc-wikipedia-viewer.surge.sh/`
];

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.handleIndicator = this.handleIndicator.bind(this);
    this.handleIndicatorActivation = this.handleIndicatorActivation.bind(this);

    this.state = {
      currentIndex: 0,
      indiCatorListItemClassName: `workSectionContainer__about__indicatorListItem`
    };
  }

  previousSlide() {
    const lastIndex = projectImages.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  }

  nextSlide() {
    const lastIndex = projectImages.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: index
    });
  }

  handleIndicator(i) {
    this.setState({
      currentIndex: i,
    });
  }

  handleIndicatorActivation(e) {
    if (e.target.className === `workSectionContainer__about__indicatorListItem`) {
      e.target.className = `workSectionContainer__about__indicatorListItem active`
    } else {
      return;
    }
  }

  render() {
    return (
      <div id="work" className="workSectionContainer" >
        <Arrow direction="left" clickArrow={this.previousSlide} />
        <ImageSlide
          url={projectImages[this.state.currentIndex]}
          header={projectHeaders[this.state.currentIndex]}
          text={projectTexts[this.state.currentIndex]}
          sourceCode={projectSourceCodes[this.state.currentIndex]}
          livePreview={projectLivePreviews[this.state.currentIndex]}
          clickIndicator={this.handleIndicator}
          activateIndicator={this.handleIndicatorActivation}
        />
        <Arrow direction="right" clickArrow={this.nextSlide} />
      </div>
    );
  }
}