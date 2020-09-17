import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const LoginPage = () => {
  return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" />
                   
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}