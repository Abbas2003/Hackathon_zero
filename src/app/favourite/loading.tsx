'use client'
import { RotatingLines } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loading;
