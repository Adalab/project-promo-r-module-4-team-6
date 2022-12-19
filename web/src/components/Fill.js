import GetAvatar from './GetAvatar';

function Fill(props) {
  const handleInput = (ev) => {
    props.handleInput({
      name: ev.target.name,
      value: ev.target.value,
    });
  };

  const renderFill = () => {
    if (props.fillIsOpen === true) {
      return (
        <section className='form__fill__boxTwo js_boxTwo'>
          <label className='form__fill__label js_resetabname' htmlFor='fullname'>
            Nombre completo
          </label>
          <input
            className='form__fill__input js_resetable js_input'
            type='text'
            id='fullname'
            name='name'
            placeholder='Ej: Sally hill'
            value={props.person.name}
            onChange={handleInput}
          />
          <label className='form__fill__label' htmlFor='job'>
            Puesto
          </label>
          <input
            className='form__fill__input short-margin js_resetable js_input'
            type='text'
            id='job'
            name='job'
            placeholder='Ej: Front-end unicorn'
            value={props.person.job}
            onChange={handleInput}
          />
          <h2 className='form__fill__label'>Imagen de perfil</h2>

          <div className='form__fill__boxThree'>
            <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />
          </div>

          <label className='form__fill__label' htmlFor='email'>
            Email
          </label>
          <input
            className='form__fill__input js_resetable js_input'
            type='email'
            id='email'
            name='email'
            placeholder='Ej: sally-hill@gmail.com'
            pattern='/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/'
            value={props.person.email}
            onChange={handleInput}
          />
          <label className='form__fill__label' htmlFor='phone'>
            Teléfono
          </label>
          <input
            className='form__fill__input js_resetable js_input'
            type='tel'
            id='phone'
            name='phone'
            placeholder='Ej: 555-55-55-55'
            pattern='[0-9]{3}-?[0-9]{2}-?[0-9]{2}-?[0-9]{2}'
            value={props.person.phone}
            onChange={handleInput}
          />
          <label className='form__fill__label' htmlFor='linkedin-url'>
            Linkedin
          </label>
          <input
            className='form__fill__input js_resetable js_input'
            type='url'
            id='linkedin-url'
            name='linkedin'
            placeholder='Ej: /sally.hill'
            pattern='^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$'
            value={props.person.linkedin}
            onChange={handleInput}
          />
          <label className='form__fill__label' htmlFor='github-url'>
            Github
          </label>
          <input
            className='form__fill__input js_resetable js_input'
            type='text'
            id='github-url'
            name='github'
            placeholder='Ej: sally-hill'
            value={props.person.github}
            onChange={handleInput}
          />
        </section>
      );
    } else {
      return null;
    }
  };

  return (
    <fieldset className='form__fill' id='fill' onClick={props.handleCollapse}>
      <div className='form__fill__boxOne js_fieldset_boxOne'>
        <i className='fa-regular fa-keyboard keyboard_fill form__fill__keyboard'></i>
        <legend className='form__fill__title'>Rellena</legend>
        <i className={`fa-solid fa-chevron-up js_arrow ${props.fillIsOpen ? '' : 'upsideDown'}`}></i>
      </div>
      {renderFill()}
    </fieldset>
  );
}
export default Fill;
