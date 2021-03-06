import React from 'react';
import styled, { css } from 'utils/styled';
import { brandColors, fontSizes, lineHeights, elevationShadow, colors } from 'styles/variables';

interface Props {
  avatar?: string;
  cardTitle?: string | React.ReactNode;
  cardSubtitle?: string;
  white?: boolean;
  grey?: boolean;
  isHomepage?: boolean;
}

interface State {}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isHomepage, grey, cardTitle, cardSubtitle, avatar, children } = this.props;

    return (
      <Wrapper
        isHomepage={isHomepage}
        grey={grey}
        cardTitle={cardTitle}
        cardSubtitle={cardSubtitle}
        avatar={avatar}
      >
        {(cardTitle || cardSubtitle || avatar) && (
          <CardHeader cardTitle={cardTitle} cardSubtitle={cardSubtitle} avatar={avatar}>
            {avatar && (
              <CardIconWrapper cardTitle={cardTitle} cardSubtitle={cardSubtitle} avatar={avatar}>
                <img src={avatar} />
              </CardIconWrapper>
            )}
            <CardHeaderSpacing>
              {cardSubtitle && <CardSubtitle>{cardSubtitle}</CardSubtitle>}
              <CardTitle>{cardTitle}</CardTitle>
            </CardHeaderSpacing>
          </CardHeader>
        )}
        {children}
      </Wrapper>
    );
  }
}

const HomepageCard = (props: Props) => css`
  height: ${props.cardSubtitle ? '280px' : '232px'};
  z-index: 1;
`;

const CardHeader = styled<Props, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${props => (props.cardSubtitle ? '64px' : '40px')};
`;

const CardHeaderSpacing = styled('div')`
  flex: 0 0 auto;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

const CardIconWrapper = styled<Props, 'div'>('div')`
  display: inline-block;
  position: relative;
  width: ${props => (props.cardSubtitle ? '64px' : '40px')};
  height: ${props => (props.cardSubtitle ? '64px' : '40px')};
  font-size: 1rem;
  line-height: 1;
  vertical-align: middle;
  border-radius: 50%;
  background: ${colors.neutral02};
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTitle = styled('h2')`
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.tera};
  line-height: ${lineHeights.tera};
`;

const CardSubtitle = styled('p')`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.neutral06};
`;

const Wrapper = styled<Props, 'div'>('div')`
  padding: 30px 40px 40px 40px;
  border-radius: 8px;
  font-size: ${fontSizes.hecto};
  font-weight: 300;
  line-height: ${lineHeights.hecto};
  background-color: ${props => (props.grey ? brandColors.grey10 : brandColors.white)};
  box-shadow: ${props => (props.grey ? 'none' : elevationShadow.elevationZ100)};
  transition: ${props => (props.grey ? 'none' : 'transform 0.3s ease, box-shadow 0.3s ease')};

  &:hover,
  &:focus {
    box-shadow: ${props => (props.grey ? 'none' : elevationShadow.elevationZ200)};
    transform: ${props => (props.grey ? 'none' : 'translateY(-2px)')};
  }

  ${props => props.isHomepage && HomepageCard(props)}
`;

export default Card;
