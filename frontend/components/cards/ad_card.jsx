import React from 'react';
import PhotoItem from '../items/photo_item';

const AdCard = ({ children, imageSrc, url, cta}) => (
  <div className="panel panel-default m-b-md hidden-xs ad-card">
    <div className="panel-body">
      <h5 className="m-t-0">Sponsored</h5>
      <PhotoItem photo={{url: imageSrc}} />
      { children }
      <a href={ url || '#'} className="btn btn-primary-outline btn-sm">{ cta || "Click Here" }</a>
    </div>
  </div>
);

export default AdCard;
