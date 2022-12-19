import React from 'react';
import defaultAvatar from '../images/default_image.jpg';

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <>
      <div className='form__fill__boxThree--1'>
        <label className='form__fill__label--cover' htmlFor='photo'>
          Añadir imagen
        </label>
        <input
          className='form__fill__input js_input js_image_upload_btn'
          type='file'
          id='photo'
          name='photo'
          accept='.png, .svg, .webp, .jpg, .jpeg, .jfif, .pjpeg, .pjp'
          hidden
          onChange={uploadImage}
          ref={myFileField}
        />
      </div>
      <div className='form__fill__boxThree--2' style={{ backgroundImage: `url(${avatar})` }}></div>
    </>
  );
}

export default GetAvatar;
