import * as React from 'react'
import P from '../components/P'
import H1 from '../components/Titles/H1'
import Page from '../layouts/Page'
import ProjectList from '../components/ProjectList'

const projects = [
  {
    name: 'babel-node-env',
    role: 'Creator and maintainer',
    description: 'Zero config command line tool to use babel with node',
    date: '10 November 2017',
    url: 'https://github.com/quentin-sommer/babel-node-env',
  },
  {
    name: 'CSV-Explorer',
    role: 'Creator and maintainer',
    description:
      'Web-based tool to explore large (millions of lines) CSV files.',
    date: '5 November 2017',
    url: 'https://github.com/quentin-sommer/csv-explorer',
  },
  {
    name: 'react-useragent',
    role: 'Creator and maintainer',
    description: 'Integrate user-agent detection in an idiomatic React way',
    date: '6 June 2017',
    url: 'https://github.com/quentin-sommer/react-useragent',
  },
  {
    name: 'feathers-datastore',
    role: '1 pull request',
    description: 'Use google datastore with the node.js framework feathers',
    date: '26 April 2017',
    url: 'https://github.com/bedeoverend/feathers-datastore',
  },
  {
    name: 'react-jsonschema-form',
    role: '1 pull request',
    description: 'Generate rich html forms from json-schema definitions',
    date: '7 April 2017',
    url: 'https://github.com/mozilla-services/react-jsonschema-form',
  },
]

const OpenSourcePage = () => (
  <Page url="/open-source">
    <H1>Open Source Software</H1>
    <P>
      <b>sort by</b> date <b>desc</b>
    </P>
    <ProjectList projects={projects} />
  </Page>
)

export default OpenSourcePage
