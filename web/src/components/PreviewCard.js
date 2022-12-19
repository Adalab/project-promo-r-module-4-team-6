import Profile from './Profile';

function PreviewCard(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  return (
    <section className='preview'>
      <button onClick={handleReset} className='preview__btn js_card_reset_btn'>
        <i className='fa-regular fa-trash-can'></i>Reset
      </button>

      <article className='preview__article'>
        <div className={`preview__box1 palette${props.person.palette}-color2 js_preview_box1`}>
          <p className={`preview__box1__name palette${props.person.palette}-color1 js_preview_name`}>
            {props.person.name !== '' ? props.person.name : 'Nombre Apellidos'}
          </p>

          <p className='preview__box1__job js_preview_job'>{props.person.job !== '' ? props.person.job : 'Front-end Unicorn'}</p>
        </div>

        <Profile avatar={props.avatar} />

        <nav className='preview__nav'>
          <ul className='preview__media'>
            <li className={`preview__media__item palette${props.person.palette}-color3  js_media_item`}>
              <a href={`tel:+34 ${props.person.phone}`} className='preview__media__link js_preview_link' id='phone'>
                <i className='palette1-color1 js_card_icon fa-solid fa-mobile-screen-button'></i>
              </a>
            </li>
            <li className={`preview__media__item palette${props.person.palette}-color3  js_media_item`}>
              <a
                href={`mailto:${props.person.email}`}
                target='_blank'
                rel='noreferrer'
                className='preview__media__link js_preview_link'
                id='email'
              >
                <i className='palette1-color1 js_card_icon fa-regular fa-envelope'></i>
              </a>
            </li>
            <li className={`preview__media__item palette${props.person.palette}-color3  js_media_item`}>
              <a
                href={props.person.linkedin}
                target='_blank'
                rel='noreferrer'
                className='preview__media__link js_preview_link'
                id='linkedin'
              >
                <i className='palette1-color1 js_card_icon fa-brands fa-linkedin-in'></i>
              </a>
            </li>
            <li className={`preview__media__item palette${props.person.palette}-color3  js_media_item`}>
              <a
                href={`https://github.com/${props.person.github}`}
                target='_blank'
                rel='noreferrer'
                className='preview__media__link js_preview_link'
                id='github'
              >
                <i className='palette1-color1 js_card_icon fa-brands fa-github-alt'></i>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}

export default PreviewCard;
