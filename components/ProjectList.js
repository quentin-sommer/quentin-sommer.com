import * as React from 'react'
import Link from './Link'
import P from './P'
import H2 from './Titles/H2'

const OpensourceTitle = H2.extend``

const ProjectList = ({projects}) =>
  <ul>
    {projects.map(project =>
      <li key={project.name}>
        <Link external href={project.url}>
          <OpensourceTitle>{project.name}</OpensourceTitle>
        </Link>
        <P><b>{project.date}</b> - {project.description}</P>
      </li>
    )}
  </ul>

export default ProjectList
