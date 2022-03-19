import React from 'react'

const ItemGift = ({title, url}) => {
  return (
    <div className='card-grid animate__animated animate__fadeInDown'>
        <img className='card-img' src={url} alt={title}/>
        <p className='title'>{title}</p>
    </div>
  )
}

export default ItemGift