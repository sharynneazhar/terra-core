/* eslint import/no-extraneous-dependencies: [ "error", { "devDependencies": true } ] */
import React, { PropTypes } from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';
import { setOptions } from '@kadira/storybook-addon-options';
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import Arrange from '../src/Arrange';

setOptions({
  name: 'Terra Arrange Storybook',
  url: 'https://github.com/cerner/terra-arrange',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);
addDecorator(withKnobs);

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" style={{ display: 'block' }} fill="#8bc34a" viewBox="0 0 1000 1000"><path d="M525 841.3c-7.5 6.7-16 10.2-25 10.2-9.6 0-17.8-3.4-24.3-10.2L204.5 571.2c-1.2-.5-7-6.6-17.5-18-10.4-11.4-21.9-26.5-34-45-12.5-18.7-23.7-40.1-34-64.5-10.2-24.2-15.4-50.2-15.4-77.8 0-40.2 6.3-74.2 19-101.9 12.6-27.7 29-50.1 49.4-67.3 20.4-17.2 43.4-29.4 68.8-37 25.5-7.4 51.5-11.2 77.9-11.2 18.5 0 36.8 3.2 54.8 9.4 18.4 6.4 35 14.2 50.6 23.7 15.6 9.3 29.8 19.7 42.7 30.8 13 11.1 23.9 21.1 33 29.9 9-9.1 20.1-19.2 33.4-30.1 13.3-11.1 27.6-21.3 43.1-30.6 15.5-9.5 32.1-17.3 49.8-23.7 17.8-6.3 36.5-9.4 55.7-9.4 25.8 0 51.5 3.8 76.9 11.2 25.7 7.6 48.4 19.9 68.9 37 20.5 17.2 36.7 39.5 49.5 67.3 12.5 27.7 18.9 61.7 18.9 101.9 0 27.6-5.1 53.6-15.1 77.8-10.1 24.5-21.3 45.8-33.7 64.5-12.3 18.5-23.8 33.6-34.9 45-10.7 11.4-16.4 17.7-17 18.8L525 841.3z" /></svg>;
// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="100" width="150" src="http://3w6kx9401skz1bup4i1gs9ne.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/telegraph-1.jpg" alt="a happy panda" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const textWithPadding = <div style={{ paddingLeft: '10px', paddingRight: '10px', border: '1px solid red' }}>{ipsum}</div>;

const ArrangeWrapper = props => (
  <div style={{ width: '500px', border: '1px solid black' }}>
    {props.children}
  </div>
);

ArrangeWrapper.propTypes = {
  children: PropTypes.element,
};

const IconWrapper = props => (
  <div style={{ backgroundColor: '#ff5722', height: '100%' }}>
    {props.children}
  </div>
);

IconWrapper.propTypes = {
  children: PropTypes.element,
};

const alignmentLabel = 'Overall Alignment';
const alignmentFitStartLabel = 'Fit Start Alignment';
const alignmentFitEndLabel = 'Fit End Alignment';
const alignmentFillLabel = 'Fill Alignment';
const alignmentOptions = {
  center: 'center',
  bottom: 'bottom',
  stretch: 'stretch',
};

storiesOf('Terra Arrange Align All', module)
  .add('FitStart and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        align={select(alignmentLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
    ))

  .add('FitEnd and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fitEnd={icon}
        fill={simpleText}
        align={select(alignmentLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ))

  .add('FitStart, FitEnd, and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        fitEnd={icon}
        align={select(alignmentLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ));

storiesOf('Terra Arrange Individual Alignments', module)
  .add('FitStart and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        alignFitStart={select(alignmentFitStartLabel, alignmentOptions, 'center')}
        alignFill={select(alignmentFillLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ))

  .add('FitEnd and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fill={simpleText}
        fitEnd={icon}
        alignFill={select(alignmentFillLabel, alignmentOptions, 'center')}
        alignFitEnd={select(alignmentFitEndLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ))

  .add('FitStart, FitEnd, and Fill', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        fitEnd={icon}
        alignFitStart={select(alignmentFitStartLabel, alignmentOptions, 'center')}
        alignFill={select(alignmentFillLabel, alignmentOptions, 'center')}
        alignFitEnd={select(alignmentFitEndLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ));
storiesOf('Terra Arrange With Custom Props', module)
  .add('With a custom class', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        align={select(alignmentLabel, alignmentOptions, 'center')}
        className="TestClass"
      />
    </ArrangeWrapper>
  ))
  .add('With a custom id', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={simpleText}
        align={select(alignmentLabel, alignmentOptions, 'center')}
        id="TestKey"
      />
    </ArrangeWrapper>
  ));

storiesOf('Terra Arrange In The Wild', module)
  .add('Fill with horizontal padding', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={textWithPadding}
        fitEnd={icon}
        alignFitStart={select(alignmentFitStartLabel, alignmentOptions, 'center')}
        alignFill={select(alignmentFillLabel, alignmentOptions, 'center')}
        alignFitEnd={select(alignmentFitEndLabel, alignmentOptions, 'center')}
      />
    </ArrangeWrapper>
  ))

  .add('Fit with a background color', () => (
    <ArrangeWrapper>
      <Arrange
        fitStart={image}
        fill={textWithPadding}
        fitEnd={<IconWrapper>{icon}</IconWrapper>}
        alignFitStart={select(alignmentFitStartLabel, alignmentOptions, 'center')}
        alignFill={select(alignmentFillLabel, alignmentOptions, 'center')}
        alignFitEnd={select(alignmentFitEndLabel, alignmentOptions, 'stretch')}
      />
    </ArrangeWrapper>
  ));