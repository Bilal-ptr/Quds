import React from 'react'
import  'react-bootstrap-icons';
// import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons
import './Team.css';
import TeamMemberCard from './TeamMemcard';
import { Carousel } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      name: 'Osama Ali',
      position: 'Web Developer',
      // profileLink: '/john-doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/in/osama-alibs',
      twitter: 'https://twitter.com/osamaali323',
      github: 'https://github.com/osamaaliweb',
      image: '../../img/team/team-1.jpg', // Provide the path to the image
    },
    {
      name: 'Osama Ali',
      position: 'Web Developer',
      // profileLink: '/john-doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/in/osama-alibs',
      twitter: 'https://twitter.com/osamaali323',
      github: 'https://github.com/osamaaliweb',
      image: '../../img/team/team-1.jpg', // Provide the path to the image
    },
  
    {
      name: 'John Doe',
      position: 'Developer',
      // profileLink: '/john-doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
      image: '../../img/team/team-2.jpg', // Provide the path to the image
    },
    {
      name: 'John Doe',
      position: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
      image: '../../img/team/team-3.jpg',
    },
    {
      name: 'John Doe',
      position: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
      image: '../../img/team/team-4.jpg',
    },
    // Add more team members as needed
  ];
  return (
    <>
 <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2 className='text-center xlg'>Our Team Members</h2>
        </div>
      </div>
    </div>
  <div className="team-carousel"> 
  <Carousel>
    {teamMembers.map((member, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex justify-content-around mt-5">
          <div className='row'>
          {teamMembers.slice(index, index + 3).map((item) => (
            <TeamMemberCard key={item.name} {...item} />
            ))}
            </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</div>
<br/>
<br/>
<div className='nav-color'>
  
  <hr className='nav-color'/>
  
  </div> 
   

  

  </>
  );
};

export default Team;

