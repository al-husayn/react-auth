import React, { useState } from 'react'
import Login from './auth/Login';
import useToken from '../hooks/useToken';

    function setToken(userToken) {
      sessionStorage.setItem('token', JSON.stringify(userToken))
    }

    function getToken() {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString)
      return userToken?.token;
    }

const Dashboard = () => {
    const token = useToken();

    if(!token){
        {return <Login setToken={setToken}/>}
    }
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">DashBoard</h1>
    </div>
  );
}

export default Dashboard