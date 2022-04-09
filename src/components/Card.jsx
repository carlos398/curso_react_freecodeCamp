import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='contenedor-card'>
        <section className='contenedor-imagen-testimonio'>
            <img className='imagen-testimonio' src="" alt="" />
        </section>
        <section className='contenedor-textos-testimonio'>
            <h2 className='nombre-persona'>title</h2>
            <h4 className='titulo-persona'>ingeniero-bachiller-etx</h4>
            <p className='texto-testimonio'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel tempora magnam veniam beatae. Dolores numquam quod doloremque, vitae culpa inventore eligendi at maiores ex ab dicta? Beatae quam minima vitae placeat nam fugit iste sequi assumenda fuga omnis, saepe nostrum repudiandae reiciendis magni accusantium, ea perspiciatis sed, asperiores optio culpa tenetur a eum voluptatem labore.</p>
        </section>
    </div>
  )
}

export default Card