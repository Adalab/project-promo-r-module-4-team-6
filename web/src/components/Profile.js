import React from 'react';
import defaultAvatar from '../images/default_image.jpg';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return <div className='preview__box2 js_preview_picture js_cardPic' style={{ backgroundImage: `url(${avatar})` }}></div>;
}

export default Profile;
