import React from 'react';
import Container from 'components/layout/Container';
import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

import LogoImage from 'assets/images/aksara-logo-banner.svg';
import BannerImage from 'assets/images/main.svg';
import Button from 'components/ui/Button';

const SectionHero = styled('section')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: 80px ${props => props.theme.dimensions.containerPadding.mobile} 88px;
  z-index: ${props => props.theme.zIndex.content + 5};

  @media (min-width: ${breakpoints.lg}px) {
    padding: 160px ${props => props.theme.dimensions.containerPadding.tablet} 162px;
  }

  @media (max-width: ${breakpoints.lg - 1}px) {
    text-align: center;
  }
`;

const LogoWrapper = styled('div')`
  text-align: left;

  @media (max-width: ${breakpoints.lg - 1}px) {
    text-align: center;
  }
`;

const BanerWrapper = styled('div')`
  text-align: right;

  @media (max-width: ${breakpoints.lg - 1}px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const InnerWrapper = styled('div')`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Intro = styled('span')`
  color: ${props => props.theme.colors.gray.copy};
  font-weight: 700;
  line-height: 20px;
  font-size: ${props => `${props.theme.dimensions.fontSize.medium}px`};
`;

const Description = styled('p')`
  color: ${props => props.theme.colors.gray.copy};
  font-weight: 300;
  line-height: 20px;
  font-size: ${props => `${props.theme.dimensions.fontSize.medium}px`};
  margin: 0px;
  padding-bottom: 32px;
`;

const BannerRow = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.lg}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const BannerCol = styled('div')`
  flex: 0 1 calc(50% - 16px);
`;

const Banner: React.SFC = () => (
  <SectionHero>
    <Container large>
      <BannerRow>
        <BannerCol>
          <BanerWrapper>
            <img src={BannerImage} />
          </BanerWrapper>
        </BannerCol>
        <BannerCol>
          <LogoWrapper>
            <img src={LogoImage} />
          </LogoWrapper>
          <InnerWrapper>
            <Description>
              <Intro>Aksara /ak·sa·ra/ noun</Intro>
            </Description>
            <Description>
              is a system of visual symbol, usually stamped on paper or other media (stone, wood,
              leaf, and fabric), to express thoughts and ideas.
            </Description>
            <Description>
              <Intro>Aksara</Intro> is Kata Design Language System. It contains foundations, voice
              and tone guidelines, component standards, and other guidelines that systematically
              improve quality, timeliness, and consistency to our product.
            </Description>
          </InnerWrapper>
          <Button primary text="Learn More" to="/principles/introduction/" />
        </BannerCol>
      </BannerRow>
    </Container>
  </SectionHero>
);

export default Banner;
