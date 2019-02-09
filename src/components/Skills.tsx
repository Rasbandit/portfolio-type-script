import React from 'react';

export default function Skills({ skills, fontSize }) {
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
