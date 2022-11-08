import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
        backgroundImg='model-s.jpg'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
        backgroundImg='model-y.jpg'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
        backgroundImg='model-3.jpg'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing inventory'
        backgroundImg='model-x.jpg'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Show now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
