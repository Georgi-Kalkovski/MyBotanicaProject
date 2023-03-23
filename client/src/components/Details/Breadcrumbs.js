import React from 'react';
import { Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs({ paths }) {
  return (
    <Breadcrumb className='breadcrumb' id='top'>
      {paths.map((item, index) => (
        <span>
          <Link
            key={index}
            tag="a"
            to={item.url}
            className="breadcrumb-item hover-underline-animation"
          >
            {item.label}
          </Link>
          <span className='breadcrumb-delimiter'>/</span>
        </span>
      ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;