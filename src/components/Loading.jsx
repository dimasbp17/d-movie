import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[500px]">
        <p className="flex items-center gap-2 text-xl font-semibold text-white">
          <Spinner />
          Loading...
        </p>
      </div>
    </>
  );
};

export default Loading;
