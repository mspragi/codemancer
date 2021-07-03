
import React from 'react';
import ping from './img/img.png';

export const DisplayImage=(props)=>{
 { 
        return (
            <div className='card col-md-10 mx-auto fetchcard'>
                <div className='card-body fetchbody'>
                    <img src={ping} className='fetchimg'/>
                    <text className='textfetch'>{props.post.value}</text>
                     <img src={props.post.image} className='fetchimage'/> 


                </div>

            </div>
          );
    }
}
 
