import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import NavAnchor from '../../components/NavAnchor';
import DocsArticle from '../../components/DocsArticle';

export default class PrimaryPage extends Component {
  render() {
    return (
      <DocsArticle title="Primary Page" colorIndex="neutral-2">
        <Section pad={{between: 'medium', vertical: 'medium'}} direction="row">
          <Box basis="2/3">
            <NavAnchor path="/docs/anchor">Anchor</NavAnchor>
            <Paragraph size="large">
              Grommet follows a mobile-first design approach for its main
              navigation. To respond down to smaller device sizes our header
              consists of only the essential elements of an application. We’ve
              instituded a Hub & Spoke design aesthetic to keep the elements
              minimal and promote a contextual navigation experience.
            </Paragraph>
          </Box>
          <Box colorIndex="light-2" pad="medium" textAlign="left" basis="1/3">
            <Heading tag="h4" strong={true} margin="none">
              See it in action
            </Heading>
            <Paragraph>
              View this template on Hewlett Packard Pathfinder a live site built
              with Grommet and the HPE Digital Guidelines.
            </Paragraph>
            <Button label="View Site" primary={true} />
          </Box>
        </Section>
      </DocsArticle>
    );
  }
};
