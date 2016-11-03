import React from 'react';

const AboutCard = ({ user }) => {
  user = user || {};

  return (
    <div className="panel panel-default visible-md-block visible-lg-block">
      <div className="panel-body">
        <h5 className="m-t-0">About</h5>
        <p style={{display: user.intro ? 'block' : 'none'}}>
          {user.intro}
        </p>
        <ul className="list-unstyled list-spaced">
          <li style={{display: user.birthday ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-cake m-r"></span>Birthday <a href="#">{moment(user.birthday).format('MMM Do, YYYY')}</a>
          </li>
          <li style={{display: user.works_at ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-briefcase m-r"></span>Works at <a href="#">{user.works_at}</a>
          </li>
          <li style={{display: user.lives_at ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-home m-r"></span>Lives in <a href="#">{user.lives_at}</a>
          </li>
          <li style={{display: user.hometown ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-location-pin m-r"></span>From <a href="#">{user.hometown}</a>
          </li>
          <li style={{display: user.relationship_status ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-users m-r"></span>Relationship Status <a href="#">{user.relationship_status}</a>
          </li>
          <li style={{display: user.gender ? 'list-item' : 'none'}}>
            <span className="text-muted icon icon-info m-r"></span>Gender <a href="#">{user.gender}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
