// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, cloneElement } from 'react';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Form from 'grommet/components/Form';
import Section from 'grommet/components/Section';
import Columns from 'grommet/components/Columns';
import CheckBox from 'grommet/components/CheckBox';
import Filter from 'grommet/components/icons/base/Filter';
import DocsArticle from '../../components/DocsArticle';
import PatternTile from '../../components/PatternTile';

const TAGS = {
  ALL: "ALL",
  PAGE: "PAGE_TEMPLATES",
  INFOGRAPHICS: "INFOGRAPHICS_TEMPLATES",
  FORMS: "FORMS"
};

const PATTERNS = [
  {
    name: 'Page Template 1',
    slug: 'pattern-1',
    img: '../img/img.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: [TAGS.PAGE]
  },
  {
    name: 'Page Template 2',
    slug: 'pattern-2',
    img: '../img/img.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: [TAGS.PAGE]
  },
  {
    name: 'Infographic Template',
    slug: 'pattern-3',
    img: '../img/img.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: [TAGS.INFOGRAPHICS]
  },
  {
    name: 'Form Template',
    slug: 'pattern-4',
    img: '../img/img.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque',
    tags: [TAGS.FORMS]
  }
];

export default class PatternsOverview extends Component {
  constructor() {
    super();

    this._onFormClick = this._onFormClick.bind(this);
    this._isFilterActive = this._isFilterActive.bind(this);

    this.state = {
      filters: {
        [TAGS.ALL]: true,
        [TAGS.PAGE]: false,
        [TAGS.INFOGRAPHICS]: false,
        [TAGS.FORMS]: false
      }
    };
  }

  _onFormClick(event) {
    const currFilterValue = this.state.filters[event.target.id];
    const updatedFilters = Object.assign({}, this.state.filters, {
      [event.target.id]: !currFilterValue,
      ALL: false
    });

    if (this._shouldFormReset(updatedFilters)) {
      this.setState({
        filters: {
          [TAGS.ALL]: true,
          [TAGS.PAGE]: false,
          [TAGS.INFOGRAPHICS]: false,
          [TAGS.FORMS]: false
        }
      });
    } else {
      this.setState({ filters: updatedFilters });
    }
  }

  _shouldFormReset(filters) {
    for (let i in filters) {
      if (filters[i] === true) return false;
    }
    return true;
  }

  _isFilterActive(patternFilters) {
    for (let i in patternFilters) {
      if (this.state.filters[patternFilters[i]] || this.state.filters[TAGS.ALL])
        return true; 
    };
    return false;
  }

  render () {
    this._isFilterActive("ALL");
    const patternElems = PATTERNS.map((pattern, index) => {
      if(this._isFilterActive(pattern.tags)) {
        return cloneElement(<PatternTile name={pattern.name} 
        desc={pattern.desc} />, {key: `pattern-${index}`});
      }
      return undefined;
    });

    return (
      <DocsArticle title="Introduction to Patterns" colorIndex="neutral-2">
        <Section pad={{between: 'medium', vertical: 'medium'}} direction="row" 
          separator="bottom">
          <Box alignSelf="stretch" flex="grow">
            <Paragraph size="large">
              Grommet follows a mobile-first design approach for its main
              navigation. To respond down to smaller device sizes our header
              consists of only the essential elements of an application. We’ve
              instituded a Hub & Spoke design aesthetic to keep the elements
              minimal and promote a contextual navigation experience.
            </Paragraph>
          </Box>
          <Box colorIndex="light-2" pad="medium">
            <Box direction="row" responsive={false} justify="between">
              Filter by tags <Filter />
            </Box>
            <Box pad={{vertical: 'medium'}}>
              <Form ref={(ref) => this.filterForm = ref}
                onChange={this._onFormClick} style={{width:'auto'}}>
                <Box pad={{between: 'small'}}>
                  <CheckBox id={TAGS.PAGE} label="Page Templates" />
                  <CheckBox id={TAGS.INFOGRAPHICS} 
                    label="Infographics Templates" />
                  <CheckBox id={TAGS.FORMS} label="Forms" />
                </Box>
              </Form>
            </Box>
          </Box>
        </Section>
        <Section>
          <Columns maxCount={3} justify="center">
            {patternElems}
          </Columns>
        </Section>
      </DocsArticle>
    );
  }
};
