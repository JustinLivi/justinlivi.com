import classNames from 'classnames/bind';
import React from 'react';

import styles from '../../style.scss';

const cx = classNames.bind(styles);

export const ExperienceComponent = () => (
  <div className={cx('page')}>
    <h1>WORK EXPERIENCE</h1>
    <h2>Co-founder and CTO</h2>
    <h3>Brinkbit</h3>
    <h4>August 2013—Present</h4>
    <p>
      I founded Brinkbit with the goal of streamlining the game development
      workflow. As a co-founder and Chief Technology Officer I raised the
      initial seed round, developed the core backend as a service platform, and
      closed initial sales. I&lsquo;m currently focused on growing our early
      customer traction and expanding the feature set of our beta offering.
    </p>
    <hr />
    <h2>Software Engineer</h2>
    <h3>AOL</h3>
    <h4>October 2015—December 2016</h4>
    <p>
      Following AOL’s acquisition of Millennial Media, I worked as a Software
      Engineer on the mobile creative development side of the One Advertising
      Platform. As a software engineer I worked closely with designers,
      engineers, and key stake holders to develop premium advertising products
      and custom ad solutions. Additionally, I developed a front end javascript
      framework based on the flux pattern which was relied upon daily by a team
      of 25 designers and developers.
    </p>
    <hr />
    <h2>Software Developer</h2>
    <h3>Millennial Media</h3>
    <h4>May 2014—October 2015</h4>
    <p>
      As a Software Developer at Millennial Media I maintained and modernized
      legacy php web services and front-end javascript libraries and developed
      new products and services. Products included a &quot;photoshoot&quot; unit
      in which the user captured and edited photos, a mobile 360 video product,
      and several game types including Frogger, Tetris, Match 3, and Catch-it.
    </p>
  </div>
);
