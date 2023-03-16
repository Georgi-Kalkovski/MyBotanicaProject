import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs({ paths }) {
  return (
    <Breadcrumb>
      {paths.map((item, index) => (
        <span>
          <Link
            key={index}
            tag="a"
            to={item.url}
            className="breadcrumb-item"
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