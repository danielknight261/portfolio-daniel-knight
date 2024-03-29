import React from 'react';
import redeemImg from '../public/assets/projects/redeem.jpg';
import bootcamperImg from '../public/assets/projects/bootcamper.png';
import openweatherImg from '../public/assets/projects/openweather.png';
import calculatorImg from '../public/assets/projects/logiccalculator.png';
import mywebsiteImg from '../public/assets/projects/mywebiste.png';
import todolistImg from '../public/assets/projects/todolist.png'
import ProjectItem from './ProjectItem';
import printerooImg from '../public/assets/projects/printeroo.png'
import mernprojectImg from '../public/assets/projects/mernproject.png'
import coinpaprikaImg from '../public/assets/projects/coinpaprika.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#1b2651]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Redeem Project'
            backgroundImg={redeemImg}
            projectUrl={'redeem'}
          />
          <ProjectItem
            title='Crypto API'
            backgroundImg={coinpaprikaImg}
            projectUrl={'coinpaprika'}
          />
          <ProjectItem
            title='Printeroo'
            backgroundImg={printerooImg}
            projectUrl={'printeroo'}
          />
          <ProjectItem
            title='MERN Project'
            backgroundImg={mernprojectImg}
            projectUrl={'mernproject'}
          />
          <ProjectItem
            title='Bootcamper Social'
            backgroundImg={bootcamperImg}
            projectUrl={'bootcampersocial'}
          />
          <ProjectItem
            title='Open Weather API'
            backgroundImg={openweatherImg}
            projectUrl={'openweatherapi'}
          />
          <ProjectItem
            title='Calculator'
            backgroundImg={calculatorImg}
            projectUrl={'calculator'}
          />
          <ProjectItem
            title='Portfolio Github'
            backgroundImg={mywebsiteImg}
            projectUrl={'mywebsite'}
          />
          <ProjectItem
            title='TypeScript Todo List'
            backgroundImg={todolistImg}
            projectUrl={'todolist'}
          />
          
       </div>
      </div>
    </div>
  );
};

export default Projects;
