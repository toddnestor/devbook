import React from 'react';

const AboutCard = ({ user }) => (
  <div className="panel panel-default visible-md-block visible-lg-block">
        <div className="panel-body">
          <h5 className="m-t-0">About</h5>
          <ul className="list-unstyled list-spaced">
            <li>
              <span className="text-muted icon icon-info m-r"></span>Works at <a href="#">{user.works_at}</a>
            </li>
            <li>
              <span className="text-muted icon icon-home m-r"></span>Lives in <a href="#">{user.lives_at}</a>
            </li>
            <li>
              <span className="text-muted icon icon-location-pin m-r"></span>From <a href="#">{user.hometown}</a>
            </li>
          </ul>
        </div>
      </div>
);

export default AboutCard;
