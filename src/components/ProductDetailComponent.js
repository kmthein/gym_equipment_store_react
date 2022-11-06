import React from 'react';

const RenderProduct = ({product}) => {
    if (product != null) {
        return(
            <div className='col-12 row' >
                <div className='col-12 col-md-4 offset-md-1'>
                    <img src={product.image} alt={product.name} width='100%'/>
                </div>
                <div className='col-12 col-md-4 offset-md-2'>
                    <h2>{product.name}</h2>
                    <p><strong>${product.price}</strong></p>
                        <li>SIMPLE & EASY TO USE - 3D Pedometer for Steps Only. It is ready to use straight out of the package. The simple feature and design makes it user friendly for men, women, kids & the elderly who want to track their steps and stay motivated towards achieving their fitness goal. It´s the simplest pedometer to start with, if you don't want complicated set ups.</li>
                        <li>TRACK YOUR DAILY STEPS – Created with simplicity but effectively counts your steps so you can still view your progress on the move motivating you more to achieve your fitness goal. No more other complicated programs, just press the button at the back to start with.</li>
                        <li>ACCURATE READING - It has advanced 3D Tri-Axis Sensor technology - much more accurate than most pedometers. 3D Tri-Axis Sensor technology is known to provide superior accuracy in reading steps in any position - up, down, flat on its side, or any angle. Multiple wearing options – Clip to your pocket or hip, wear around your neck or place in your pocket or bag.</li>
                        <li>BATTERY INCLUDED - Enjoy Great Battery Life. Pedometer auto sleeps when you are not moving and auto wakes and counts steps when you start moving again.</li>
                </div>
                </div>
        )
    }
    else 
    return (
        <div></div>
    )
}

const ProductDetail = (props) => {
    if(props.product != null) 
    return(
        <div className='product-detail'>
            <div className='row'>
                    <RenderProduct product={props.product} />
                </div>
            </div>
    )
}

export default ProductDetail;