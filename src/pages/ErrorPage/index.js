import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <img src="/images/pareto-logo.webp" alt='Pareto Economics' className='max-w-[300px] mx-auto mb-10'/>
        <h1>Opps! Page not found.</h1>
        go to{" "}
        <Link to="/" className="underline mt-10 inline-block">
          Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage