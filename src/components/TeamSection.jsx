import React, { useState } from 'react';
import '../css/About.css';
import team1 from '../assets/images/About-img/our-team/teammate-1.jpg.webp';
import team2 from '../assets/images/About-img/our-team/teammate-2.jpg';
import team3 from '../assets/images/About-img/our-team/teammate-3.jpg.webp';
import team4 from '../assets/images/About-img/our-team/teammate-4.jpg';
import team5 from '../assets/images/About-img/our-team/teammate-5.jpg';
import WholeWebsiteIcon from '../components/WholeWebsiteIcon.jsx';

const TeamSection = () => {
  const [color1, setColor1] = useState('white');
  const [color2, setColor2] = useState('white');
  const [color3, setColor3] = useState('white');
  const [color4, setColor4] = useState('white');
  const [color5, setColor5] = useState('white');

  const teamMembers = [
    {
      name: 'Matti Halonen',
      title: 'Managing Director',
      email: 'matti.halonen@s4access.com',
      phone: '',
      image: team3,
      color: color1,
      setColor: setColor1
    },
    {
      name: 'Christa Coulter',
      title: 'Director, SAP Security Architect',
      email: 'christa.coulter@s4access.com',
      phone: '',
      image: team1,
      color: color2,
      setColor: setColor2
    },
    {
      name: 'Heli Kokkala',
      title: 'Director, Head of Services',
      email: 'heli.kokkala@s4access.com',
      phone: '',
      image: team2,
      color: color3,
      setColor: setColor3
    },
    {
      name: 'Sameer Hawaldar',
      title: 'Director, Head of Projects',
      email: 'sameer.hawaldar@s4access.com',
      phone: '',
      image: team4,
      color: color4,
      setColor: setColor4
    },
    {
      name: 'Tiina Hartikainen',
      title: 'HR Lead',
      email: 'tiina.hartikainen@4access.com',
      phone: '',
      image: team5,
      color: color5,
      setColor: setColor5
    }
  ];

  return (
    <section className="our-team-section">
      <div className="team-section-container">
        
        <div className="team-members-column">
          <div className="team-members-top">
            <div className="team-heading-column">
          <p className="big-heading-text-black">Managment Team</p>
          <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci officiis architecto, aliquid ea necessitatibus autem, ratione suscipit odit asperiores, iste molestias distinctio! Sit soluta nihil, accusamus eveniet nobis deserunt!</p>
        </div>
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className="about-team-container"
                onMouseEnter={() => member.setColor('#40FFC9')}
                onMouseLeave={() => member.setColor('white')}
              >
                <div className="our-team-img-container">
                  <div className="ourteam-logo">
                    <WholeWebsiteIcon color={member.color} />
                  </div>
                  <img src={member.image} alt={member.name} />
                  <div className="our-team-names">
                    <p className="team-ceo-text">{member.title}</p>
                  </div>
                </div>
                <div className="ourteam-container-contacts">
                  <p className="team-name-text">{member.name}</p>
                  <a href={`mailto:${member.email}`} className="text-black">
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="team-members-bottom">
            {teamMembers.slice(2).map((member, index) => (
              <div
                key={index + 2}
                className="about-team-container"
                onMouseEnter={() => member.setColor('#40FFC9')}
                onMouseLeave={() => member.setColor('white')}
              >
                <div className="our-team-img-container">
                  <div className="ourteam-logo">
                    <WholeWebsiteIcon color={member.color} />
                  </div>
                  <img src={member.image} alt={member.name} />
                  <div className="our-team-names">
                    <p className="team-ceo-text">{member.title}</p>
                  </div>
                </div>
                <div className="ourteam-container-contacts">
                  <p className="team-name-text">{member.name}</p>
                  <a href={`mailto:${member.email}`} className="text-black">
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;