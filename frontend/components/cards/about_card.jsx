import React from 'react';

const AboutCard = ({ user }) => {
  user = user || {};

  return (
    <div className="panel panel-default visible-md-block visible-lg-block about-card">
      <div className="panel-body">
        <h5 className="m-t-0">About</h5>
        <p style={{display: user.intro ? 'block' : 'none'}}>
          {user.intro}
        </p>
        <ul className="list-unstyled list-spaced">
          <li style={{display: user.birthday ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-cake m-r"></span>Birthday <span className="about-detail">{moment(user.birthday).format('MMM Do, YYYY')}</span>
          </li>
          <li style={{display: user.works_at ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-briefcase m-r"></span>Works at <span className="about-detail">{user.works_at}</span>
          </li>
          <li style={{display: user.lives_at ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-home m-r"></span>Lives in <span className="about-detail">{user.lives_at}</span>
          </li>
          <li style={{display: user.hometown ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-location-pin m-r"></span>From <span className="about-detail">{user.hometown}</span>
          </li>
          <li style={{display: user.relationship_status ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-heart m-r"></span>Relationship Status <span className="about-detail">{user.relationship_status}</span>
          </li>
          <li style={{display: user.gender ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-info m-r"></span>Gender <span className="about-detail">{user.gender}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
