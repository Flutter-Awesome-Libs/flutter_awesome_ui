/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("about.html")}>View all components</Button>
            <Button href="https://github.com/Flutter-Awesome-Libs" target="_blank">View on github</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const SaveTime = () => (
        <Block background="white">
            {[
                {
                    content: "Dont waste time creating the same widgets in every application. You can use some of our widgets and focus your time on things that matter more.",
                    image: `${baseUrl}img/dev_productivity.svg`,
                    imageAlign: "left",
                    title: "Your time is valuable"
                }
            ]}
        </Block>
    );

    const EaseOfUse = () => (
        <Block background="white">
            {[
            {
                content: 'All components are designed to be simple to integrate in your applications. Simple import, use and forget',
                image: `${baseUrl}img/drop_in.svg`,
                imageAlign: 'right',
                title: 'Easy to use',
            },
            ]}
        </Block>
    );

    return (
      <div>
        {/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
        <div className="mainContainer">
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          <HomeSplash
            siteConfig={siteConfig}/>
          <SaveTime/>
          <EaseOfUse />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
