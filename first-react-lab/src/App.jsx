import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ];

  const mySkillsList = mySkills.map((skill, index) => {
   return <div>
            <h1>{skill.name}</h1>
            <li>Comfort:{skill.comfort}/10</li>
            <li>Front End:{skill.frontEnd ? '✅' : '❌'}</li>
            <li>Back End:{skill.backend ? '✅' : '❌'}</li>
          </div>
  }
  );

  return (
    <body>
      <h1>My Skills</h1>
      <div className='mylist'>{mySkillsList}</div>
    </body>
  )
}

export default App
