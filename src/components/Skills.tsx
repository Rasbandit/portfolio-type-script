import React from 'react';
import { Skill } from '../types'

export default function Skills(props: { skills: Skill[], fontSize: string }) {
  const { skills, fontSize } = props
  return (
    <div className="content">
      <h1>Skills</h1>
      <ul>
        {skills.map(({ img, title, className }) =>
          <li key={title} className={className} style={{ fontSize }}>
            <img src={img} alt="" style={{ fontSize }} />
            <h3>{title}</h3>
          </li>
        )}
      </ul>
    </div>
  )
}
