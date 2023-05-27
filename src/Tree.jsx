import React from 'react';
import { Circle, Popup } from 'react-leaflet';

const Tree = ({ data }) => {
  return (
    <Circle
      center={data.coordinates}
      pathOptions={{ color: 'red' }}
      stroke={false}
      radius={3}
      className={data.isOrnomental ? 'tree' : 'tree nonOrnomental'}
    >
      <Popup>
        <p>
          <span className='span-block'>
            <b>Daraxt nomi: </b>
            {data.name}
          </span>
          <span className='span-block'>
            <b>Ilmiy Nomi: </b>
            {data.scientificName}
          </span>
          <span className='span-block'>
            <b>Daraxt yoshi: </b>
            {new Date().getFullYear() - data.yearOfPlant}
          </span>
          <span className='span-block'>
            <b>Mas'ul: </b>
            {data.maintainedBy}
          </span>
          <span className='span-block'>
            <b>Daraxt IDsi </b>
            {data.id}
          </span>
          <span className='span-block'>
            <b>Daraxt diametri: </b>
            {data.diameter}
          </span>
        </p>
      </Popup>
    </Circle>
  );
};

export default Tree;
