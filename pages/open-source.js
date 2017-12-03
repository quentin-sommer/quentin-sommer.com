import * as React from 'react'
import P from '../components/P'
import H1 from '../components/Titles/H1'
import Page from '../layouts/Page'
import ProjectList from '../components/ProjectList'

const projects = [
  {
    name: 'babel-node-env',
    description: 'no config transparent cli to use babel with node',
    date: '10 November 2017',
    url: 'https://github.com/quentin-sommer/babel-node-env',
  },
  {
    name: 'csv-explorer',
    description:
      'Tool to explore small to large (millions of lines) csv files on the web.',
    date: '5 November 2017',
    url: 'https://github.com/quentin-sommer/csv-explorer',
  },
  {
    name: 'react-useragent',
    description: 'Creator and maintainer',
    date: '6 June 2017',
    url: 'https://github.com/quentin-sommer/react-useragent',
  },
  {
    name: 'feathers-datastore',
    description: '1 pull request',
    date: '26 April 2017',
    url: 'https://github.com/bedeoverend/feathers-datastore',
  },
  {
    name: 'react-jsonschema-form',
    description: '1 pull request',
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
