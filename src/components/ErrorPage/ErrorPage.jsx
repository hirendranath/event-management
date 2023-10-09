import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='justify-center'>
            <h1 className='text-2xl items-center justify-center' >Oops! there have no pahe on that event management site</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='justify-center' >
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;