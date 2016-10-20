// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import EditIcon from 'grommet/components/icons/base/Edit';
import DocsArticle from '../../../components/DocsArticle';

Anchor.displayName = 'Anchor';

const USAGE =
`import Anchor from 'grommet/components/Anchor';
<Anchor href={location} label="Label" />`;

export default class AnchorDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Anchor" colorIndex="neutral-3">

        <section>
          <p>A text link. We have a separate component from the
          browser base so we can style it. You can either set the icon and/or
          label properties or just use children.</p>
          <Box direction="row" wrap={true} align="center"
            pad={{ between: 'medium' }}>
            <Anchor href="" onClick={this._onClick}>Child text</Anchor>
            <Anchor href="" label="Label" primary={true}
              onClick={this._onClick} />
            <Anchor href="" icon={<EditIcon id='edit-icon-1' />} label="Label"
              onClick={this._onClick} />
            <Anchor href="" icon={<EditIcon id='edit-icon-2' />}
              onClick={this._onClick} />
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>disabled       true|false</code></dt>
            <dd>Whether to disable the anchor. Defaults to false.</dd>
            <dt><code>href           {"{string}"}</code></dt>
            <dd>Hyperlink reference to place in the anchor.</dd>
            <dt><code>icon           {"{element}"}</code></dt>
            <dd>Icon element to place in the anchor.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
            <dt><code>label          {"{string}"}</code></dt>
            <dd>Label text to place in the anchor.</dd>
            <dt><code>method         push|replace</code></dt>
            <dd>Valid only when used with <code>path</code>. Indicates
              whether the browser history should be appended to or replaced.
              The default is <code>push</code>.</dd>
            <dt><code>onClick        {"{function}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>path           {"{string}"}</code></dt>
            <dd>React-router path to navigate to when clicked.</dd>
            <dt><code>primary        true|false</code></dt>
            <dd>Whether this is a primary anchor.</dd>
            <dt><code>reverse        true|false</code></dt>
            <dd>Whether an icon and label should be reversed so that the icon
              is at the end of the anchor.</dd>
            <dt><code>tag            {"{string}"}</code></dt>
            <dd>The DOM tag to use for the element. The default is {'<a>'}.
              This should be used in conjunction with components like
              Link from React Router. In this case, Link controls the
              navigation while Anchor controls the styling.</dd>
            <dt><code>target         {"_blank|_self|_parent|_top|{string}"}
              </code></dt>
            <dd>Target of the link.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/anchor/examples`}>
            Anchor Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
