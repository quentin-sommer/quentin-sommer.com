import * as React from 'react'
import Page from '../layouts/Page'
import ProjectList from '../components/ProjectList'
import H1 from '../components/Titles/H1'
import P from '../components/P'

const projects = [
  {
    name: 'Strasbourg Loyer',
    description: 'Visualisation and stats of scrapped Strasbourg housing data',
    date: '11 March 2017',
    url: 'https://www.strasbourg-loyer.fr/',
  },
  {
    name: 'Beautiful New Tab',
    description:
      'A very lightweight chrome extension that displays a random Unsplash image on your new tab page',
    date: '18 August 2016',
    url:
      'https://chrome.google.com/webstore/detail/beautiful-new-tab/kojfjmoaofonodapbhpnmcbnanbhckon',
  },
  {
    name: 'Get Epitech Ranking',
    description:
      'Our internal dashboard was bad at figuring out students rank amongst other 11 cities',
    date: '1 March 2016',
    url: 'https://github.com/quentin-sommer/get-epitech-ranking',
  },
]

const WorkPage = () =>
  <Page url="/work">
    <H1>Projects</H1>
    <P>
      <b>sort by</b> date <b>desc</b>
    </P>
    <ProjectList projects={projects} />
  </Page>

export default WorkPage
