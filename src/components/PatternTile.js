import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';

export default function PatternTile (props) {
  return (
    <Box align="center" textAlign="center" pad={{vertical: "medium"}}>
      <Heading tag="h3" strong={true} margin="none">
          {props.name}
      </Heading>
      <Paragraph>
        {props.desc}
      </Paragraph>
      <Button label="View Pattern" primary={true} />
    </Box>
  );
};

PatternTile.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.string
};
