function Share(props) {
  const handleShare = (ev) => {
    ev.preventDefault();
    props.handleShare();
  };

  const renderShareDefault = () => {
    return (
      <div className='form__share__boxTwo js_boxTwo js_share_box2'>
        <button className='form__share__btn js_share_btn' onClick={handleShare}>
          <i className='fa-regular fa-address-card form__share__cardIcon'></i>
          Crear tarjeta
        </button>
      </div>
    );
  };

  const renderShareSuccess = () => {
    return (
      <>
        {renderShareDefault()}
        <section className='form__collapsible js_share_section'>
          <h2 className='form__collapsible__cardUrl-message'>La tarjeta ha sido creada:</h2>
          <a className='form__collapsible__cardUrl' href={props.dataResult.cardURL} target='_blank' rel='noopener noreferrer'>
            {props.dataResult.cardURL}
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=Mira%20mi%20super%20tarjeta%20de%20visita%20creada%20con%20StarCards&url=${props.dataResult.cardURL}`}
            target='_blank'
            rel='noopener noreferrer'
            className='form__collapsible__shareBtn js_twitter_btn'
          >
            <i className='fa-brands fa-twitter'></i>
            <span>Compartir en twitter</span>
          </a>
        </section>
      </>
    );
  };

  const renderShareError = () => {
    let errorMessage = '';
    if (props.dataResult.error.includes('ER_DATA_TOO_LONG')) {
      errorMessage = 'Ups, tu imagen es muy grande. Elige una menor de 50KB 😉';
    } else if (props.dataResult.error.includes('Mandatory fields')) {
      errorMessage = 'Asegúrate de rellenar todos los campos y adjuntar una imagen 😉';
    } else {
      errorMessage = `${props.dataResult.error}`;
    }
    return (
      <>
        {renderShareDefault()}
        <section className='form__collapsible js_share_section'>
          <p className='form__collapsible__errorText'>{errorMessage}</p>
        </section>
      </>
    );
  };

  const renderShare = () => {
    if (props.shareIsOpen === true) {
      if (props.dataResult.success) {
        return renderShareSuccess();
      } else if (props.dataResult.error) {
        return renderShareError();
      } else {
        return renderShareDefault();
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <fieldset className='form__share' id='share' onClick={props.handleCollapse}>
        <div className='form__share__boxOne js_fieldset_boxOne'>
          <i className='fa-solid fa-share-nodes nodes_share form__share__nodesIcon'></i>
          <legend className='form__share__title'>Comparte</legend>
          <i className={`fa-solid fa-chevron-up js_arrow ${props.shareIsOpen ? '' : 'upsideDown'}`}></i>
        </div>
        {renderShare()}
      </fieldset>
    </>
  );
}
export default Share;
