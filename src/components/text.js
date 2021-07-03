import { Fragment } from "react";
import React, { useState } from "react";
import { DisplayImage } from "./DisplayImage";
import profile from './img/img.png'
import gif from './img/gif.png'

export const Card = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState("");
    const [modal, setmodal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [imgurl, setImgurl] = useState([]);
    const [imgurl1, setImgurl1] = useState([]);
    const [arr, setArr] = useState([]);

    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    const displayModal = (e) => {
      e.preventDefault();
      setmodal(!modal);
    };
    const submitHandler = (e) => {
      e.preventDefault();
      const data = { value: text, image: selectedImage };
      setArr([...arr, data]);
      setText("");
      setSelectedImage("");
    };
  
    const imageHandler = async (e) => {
      e.preventDefault();
      setImg(e.target.value);
      let imgage =
        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=sUz9q2eyp2a3Bngj5TtgjOrvzSKbC2mk&q=${img}&limit=25&offset=0&rating=g&lang=en
      `);
      let datas = await imgage.json();
      let imgage1 =
        await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=sUz9q2eyp2a3Bngj5TtgjOrvzSKbC2mk&limit=25&rating=g
      `);
      let datas1 = await imgage1.json();
      setImgurl(datas.data.map((p) => p.images.original.url));
      setImgurl1(datas1.data.map((p) => p.images.original.url));
    };
  

    return(
        <Fragment>
        <div className=" card container text-center  col-md-5 ">
               
   
               <div className="card-header">
               <ul className=" spanimg">
               <li>
                    <span> <i class="fas fa-pencil-alt"></i></span> Compose Post {"|"}
               </li>
               <li>
                   <span><i class="fas fa-photo-video"></i></span>Photo/video{"|"} </li>
               <li>
                   <span><i class="fas fa-video-plus"></i></span>Live video{"|"}
               </li>
               </ul>
               </div>

            <div className="card-body text">
               <span className='image' ><img src={profile} style={{width:'70px'}}/></span>
               <label htmlFor='Text'></label>
               <input type='text'  id='Text' name='text' className='form-control' placeholder='Whats on your mind' value={text} onChange={(e) => handleChange(e)} style={{width:'100%'}}
               />
               </div>


               {selectedImage ? (<div class="table-wrapper-scroll-x mx-custom-scrollbar">
               <table class="table mb-0"><tbody>
                   <img class="float-left"  src={selectedImage} style={{ height: "100px", width: "80px" }} ></img>
                 </tbody>
               </table>
               </div>
               ) : null}

               <div className='emoji'><span><i class="fal fa-smile-beam"></i></span></div>
               

               <div className='btn'>
               <div className='row'>
               <div className='col-md-6'>
                   <button className='btn btn-light btn1'> <span style={{color:'blue',  padding: '0px 4px'}}><i className="fad fa-user-friends"></i></span>Tag Friend</button>
               </div>
               <div className='col-md-6 '>
               <button className='btn btn-light btn3 '><span style={{color:'red', padding: '0px 4px'}}><i className="fas fa-map-marker-alt"></i></span>Check in</button>
               </div>
               </div>


               <div className='row'>
               <div className='col-md-6 '>
                   <button className='btn btn-light btn2' data-toggle="modal" data-target="#gif"  onClick={displayModal}><span ><img src={gif} className='gifimg'/></span>Gif</button>
                   <div class="hide">
                 {modal ? (
                   <input type="text" id="body" className="form-control searchgif" value={img} onChange={imageHandler} ></input>
                 ) : null}
               
                 <div className="table-wrapper-scroll-x mx-custom-scrollbar" style={{width:' 200%'}}>
                   <table className="table" style={{backgroundColor: 'aliceblue'}}>
                     <tbody>
                       {img ? imgurl.map((images) => {return (<tr> <td><img onClick={() => {setSelectedImage(images);}}  src={images} style={{ width: "100px", height: "auto" }}></img> </td></tr>); }): modal
                       ? imgurl1.map((images) => {return (<tr><td><a><img  onClick={() => {setSelectedImage(images); }}src={images} style={{ width: '200px', height: 'auto', borderRadius:'14px' }}></img></a></td></tr> );}): null}</tbody>
                   </table>
                 </div>
               </div>
               </div>
               

               <div className='col-md-6 '>
                   <button className='btn btn-light btn4'><span style={{color:'red', padding: '0px 4px'}}><i className="far fa-calendar-alt"></i></span>Tag Event</button>
               </div>
               </div>
               
               <div className="card-footer mt-4" id="header">
               <div className="ml-auto">
               <button
               type="button"className="btn " style={{ border: "1px solid black", width:'30%', position:'relative', left:'130px' }}
               >
               <span> <i className="fa fa-lock pr-2" aria-hidden="false"></i></span>Only me
               </button>
               <button
               type="submit"className="btn btn-primary" style={{ width:'30%', position:'relative', left:'120px'  }}  onClick={submitHandler}   >Post</button>
               </div>
               </div>
               </div>
               {arr !== []
                   ? arr.map((p) => { 
                     return <DisplayImage post={p} />;
                   })
                   : null}
               </div>
           
   
        </Fragment>
    )
}














