import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-100"></div>
            </div>
        </div>
    );
}

export default Loading;
