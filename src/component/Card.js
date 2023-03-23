import React from 'react';
const Card= (props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma3 grow'>
            <h1>Robo friend</h1> 
            <img src={`https://robohash.org/ ${props.id}?200x200` } alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email} </p>
            </div>
        </div>
    );
}
export default Card;