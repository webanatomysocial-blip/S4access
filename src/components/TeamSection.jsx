import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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
      image: team3,
      color: color1,
      setColor: setColor1
    },
    {
      name: 'Christa Coulter',
      title: 'Director, Sap Security Architect',
      email: 'christa.coulter@s4access.com',
      image: team1,
      color: color2,
      setColor: setColor2
    },
    {
      name: 'Heli Kokkala',
      title: 'Director, Head of Services',
      email: 'heli.kokkala@s4access.com',
      image: team2,
      color: color3,
      setColor: setColor3
    },
    {
      name: 'Sameer Hawaldar',
      title: 'Director, Head of Projects',
      email: 'sameer.hawaldar@s4access.com',
      image: team4,
      color: color4,
      setColor: setColor4
    },
    {
      name: 'Tiina Hartikainen',
      title: 'HR Lead',
      email: 'tiina.hartikainen@s4access.com',
      image: team5,
      color: color5,
      setColor: setColor5
    }
  ];

  return (
    <section className="our-team-section">
      <p className="big-heading-text-black">
        Management Team
      </p>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderCustom: (swiper, current, total) => {
            return `<div class="swiper-pagination-custom">${current} of ${total}</div>`;
          }
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className="inner-about-out-team"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div
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
                <p className="sub-heading-text-black">{member.name}</p>
                <a href={`mailto:${member.email}`} className="text-black">
                  {member.email}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default TeamSection;