import React from 'react';
import './styles.css'; // Import your CSS file for styling

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="user-name">User Name:</label>
        <input type="text" id="user-name" name="user name" />
      </div>
      <div className="input-group">
        <label htmlFor="company-name">Company Name:</label>
        <input type="text" id="company-name" name="company name" />
      </div>
      <div className="input-group">
        <label htmlFor="contract-info">Contract Info:</label>
        <input type="text" id="contract-info" name="contract" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" />
      </div>
      <button className="registration-button">Registration</button>
      {children}
    </div>
  );
}

export default Layout;
