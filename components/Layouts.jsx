import Link from 'next/link';
import React from 'react';

const Layouts = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/dataScrap">
                  TableData
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/fromScrap">
                  Form Scrap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layouts;
