import React from 'react';

const LinkItUp = ({ children, options = {}, style={}, className='', title='', rel='' }) => {
  let re = /(?:^|\ |\n)(((?:(?:http(?:s)?\:)?(?:\/\/))|(?:\/\/))?(?:(?=[a-z0-9\-\.]{1,255}(?=\/|\ |$|\:|\n|\?|\,|\!))(?:(?:(?:[a-z0-9]{1}(?:[a-z0-9\-]{1,62})?\.){1,127})[a-z]{2,}(?:\.[a-z]{2})?))(?:[a-z0-9\/\-\_\%\?\&\!\$\'\,\.\(\)\*\+\=\;])*?)(?=$|\.(?=\ |$)|\:|\n|\ |\?(?=\ |$)|\,|\!)/ig;

  let elements = [];
  let lastIndex = 0;
  let matchData;

  while((matchData = re.exec(children)) != null) {
    if( matchData ) {
      let match = matchData[0];
      let p1 = matchData[1];
      let p2 = matchData[2];
      let segmentEnd = matchData.index;
      let newIndex = segmentEnd + p1.length + 1;

      elements.push(
        <span key={`segment_${elements.length}`}>
          {` ${children.slice(lastIndex, segmentEnd)} `}
        </span>
      );

      elements.push(
        <a key={`link_${elements.length}`} target={options.newTab ? "_blank" : ""} style={style} className={className} title={title} rel={rel} href={( p2 ? '' : '//' ) + p1}>
          {p1}
        </a>
      );

      lastIndex = newIndex;
    }
  }

  elements.push(
    <span key={`segment_${elements.length}`}>
      {children.slice(lastIndex)}
    </span>
  );

  return <span>{elements}</span>;
}

export default LinkItUp;
