import * as React from 'react'
import Link from './Link'
import P from './P'
import H2 from './Titles/H2'
import styled from 'styled-components'

const Ul = styled('ul')`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
`

const ProjectList = ({projects}) => (
  <Ul>
    {projects.map(project => (
      <li key={project.name}>
        <Link external href={project.url}>
          <H2>{project.name}</H2>
        </Link>
        <P>
          <b>{project.date}</b> -{' '}
          {project.role ? project.role : project.description}
          {project.role && (
            <span>
              <br />
              {project.description}
            </span>
          )}
        </P>
      </li>
    ))}
  </Ul>
)

export default ProjectList
