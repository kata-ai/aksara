import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import styled from 'utils/styled';
import Page from 'components/docs/Page';
import Container from 'components/layout/Container';
import FooterWrapper from 'components/layout/FooterWrapper';
import Footer from 'components/layout/Footer';

import Layout from 'layouts';
import Row from 'components/layout/Row';
import Col from 'components/layout/Col';
import Banner from 'components/home/Banner';
import Card from 'components/ui/Card';
import GeometricShapes from 'components/home/GeometricShapes';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
  };
}

const IndexPage: React.SFC<PageTemplateProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Page>
        <Helmet>
          <meta property="og:title" content="Home" />
        </Helmet>
        <Banner />
        <SectionFor>
          <GeometricShapes topLeft src={require('assets/images/geometric-1.svg')} />
          <GeometricShapes topRight src={require('assets/images/geometric-2.svg')} />
          <SectionContainer extralarge>
            <TitleSectionFor>Created for Designers and Built for Developers</TitleSectionFor>
            <Row breakAt="lg">
              <Col lg={4}>
                <Card
                  isHomepage
                  cardTitle="Principles"
                  avatar={require('assets/images/guides-icn.png')}
                >
                  <p>Discover the principles we use to design our product.</p>
                  <p>
                    <Link to="/principles/introduction/">View Design Principles</Link>
                  </p>
                </Card>
              </Col>
              <Col lg={4}>
                <Card
                  isHomepage
                  cardTitle="Design"
                  avatar={require('assets/images/design-icn.png')}
                >
                  <p>Explore the design foundation and components behind Kata.ai's product.</p>
                  <p>
                    <Link to="/design/foundation/color/">View Design Guidelines</Link>
                  </p>
                </Card>
              </Col>
              <Col lg={4}>
                <Card
                  isHomepage
                  cardTitle="Voice"
                  avatar={require('assets/images/voice-tone-icn.png')}
                >
                  <p>Find out how we shape and maintain the way we communicate our product.</p>
                  <p>
                    <Link to="/communication/writing-principles/">
                      View Voice &amp; Tone Guidelines
                    </Link>
                  </p>
                </Card>
              </Col>
            </Row>
          </SectionContainer>
          <GeometricShapes bottomLeft src={require('assets/images/geometric-3.svg')} />
          <GeometricShapes bottomRight src={require('assets/images/geometric-4.svg')} />
        </SectionFor>
        <SectionUpdates>
          <SectionContainer extralarge>
            <Row breakAt="lg" centered>
              <Col lg={5}>
                <Card
                  isHomepage
                  grey
                  cardTitle="Aksara v0.18.1"
                  cardSubtitle="What's New"
                  avatar={require('assets/images/aksara.png')}
                >
                  <p>
                    We're excited to announce our first release of Kata Design Language System named
                    Aksara. We release this on Interact 2018 event (December 5th, 2018).
                  </p>
                  <p>
                    <Link to="/version-updates/">View All Updates</Link>
                  </p>
                </Card>
              </Col>
              <Col lg={5}>
                <Card
                  isHomepage
                  grey
                  cardTitle={
                    <Fragment>
                      <span>Wicara v0.6.0</span>
                      <BetaBadge src={require('assets/images/beta-tag.png')} />
                    </Fragment>
                  }
                  cardSubtitle="Component Library"
                  avatar={require('assets/images/wicara.png')}
                >
                  <p>
                    Wicara (previously kata-kit) is Kata’s official React component library based on
                    our design language system.
                  </p>
                  <p>
                    <a
                      href="https://github.com/kata-ai/wicara"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </p>
                </Card>
              </Col>
            </Row>
          </SectionContainer>
        </SectionUpdates>
        <FooterWrapper>
          <Container>
            <Footer />
          </Container>
        </FooterWrapper>
      </Page>
    </Layout>
  );
};

const BetaBadge = styled('img')`
  margin-left: 8px;
  max-height: 14px;
`;

const SectionContainer = styled(Container)`
  position: relative;
  z-index: 5;
`;

const SectionFor = styled('section')`
  position: relative;
  padding: 80px ${props => props.theme.dimensions.containerPadding.mobile};
  min-height: 550px;
  background-image: linear-gradient(
    67deg,
    ${props => props.theme.colors.kata03},
    ${props => props.theme.colors.accentDark} 32%,
    ${props => props.theme.colors.brand} 60%,
    ${props => props.theme.colors.softblue}
  );

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 80 ${props => props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    padding: 80 ${props => props.theme.dimensions.containerPadding.desktop};
  }
`;

const TitleSectionFor = styled('h1')`
  font-weight: 500;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  color: ${props => props.theme.colors.white};
  margin-bottom: 40px;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const SectionUpdates = styled('section')`
  position: relative;
  padding: 80px ${props => props.theme.dimensions.containerPadding.mobile} 0;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.dimensions.containerPadding.tablet};
    padding-right: ${props => props.theme.dimensions.containerPadding.tablet};
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    padding-left: ${props => props.theme.dimensions.containerPadding.desktop};
    padding-right: ${props => props.theme.dimensions.containerPadding.desktop};
  }
`;

export default IndexPage;

export const query = graphql`
  query HomeTemplateQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
        author {
          name
          url
          email
        }
      }
    }
  }
`;
