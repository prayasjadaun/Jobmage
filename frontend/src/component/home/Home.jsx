import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './home.css';

function Home() {
  useEffect(() => {
    gsap.to('.home-heading span', {
      color: '#007bff',
      duration: 2,
      delay: 1,
    });
  }, []);

  return (
    
    <section className='home'>
      <div className="home-left">
        <h1 className='home-heading'>
          <span>Get closer to your</span>
          <span> Dream Job !</span>
        </h1>
        <p className='home-para'>A comprehensive platform for CSE freshers in the industry.</p>
        <p className='home-para'>Find job opportunities, enhance your skills, connect with professionals, self-assessment.</p>
        <button className='get-started-btn'><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Get Started</Link></button>
      </div>
      <div className="home-right">
        <div className='home-image'>
          <img src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif" alt="coding gif" />
        </div>
      </div>
    </section>
  );
}

export default Home;
