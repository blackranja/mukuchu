import React from 'react'

const Items = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#04746efd] pb-4 mb-4">All Premuim Properties</h1>
          <p className="p-2 m-2 text-sm">Elegant and Modern Properties</p>
          <div 
              className="grid grid-rows-none md:grid-cols-5 my-4 gap-2 md:gap-4"
          >
              <img 
              className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" 
                  src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
              />
              <img 
              className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
              />
              <img 
              className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
              />
              <img 
              className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
              />
              <img 
              className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
              />
              </div>

    </div>
  )
}

export default Items