import React from 'react'

const Card = ({ item,handleClick,index  }) => {
  const { image, name, artist, added} = item;
  console.log(added)
  return (
    <div className='w-60 bg-zinc-100 p-4 flex gap-4  relative  rounded-md'>
      <div className='w-32 h-32 bg--600 rounded-md '>
        <img className='w-full h-full object-scale-down' src={image} alt="" />
             
          </div>
            <div className='Text-container'>
                  <h3 className='text-xs leading-none font-semibold'> {name}
                  </h3>
        <h6 className='text-sm'>{artist }</h6>
        <button onClick={() => {
          handleClick(index)
          
        }} className={`absolute translate-y-[50%] left-1/2 -translate-x-[50%] bottom-0 px-2 py-[3px]  ${added===false?"bg-orange-600":"bg-teal-500"} rounded-full text-zinc-100 text-xs`}>{added===false? "Add to favourites":"Added"}</button>
          </div>  
    </div>
  )
}

export default Card
