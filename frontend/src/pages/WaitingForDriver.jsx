import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
         props.setWaitingForDriver(true);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div className='flex items-center justify-between'>
        <img className='h-20' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="car"></img>
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Aaditya</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>RJ14 XX 9999</h4>
          <p className='text-sm text-gray-600'>Range Rover</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 ">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 ">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm text-gray-600 ">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
