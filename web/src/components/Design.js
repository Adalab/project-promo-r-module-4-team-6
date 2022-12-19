function Design(props) {
  const handleInput = (ev) => {
    props.handleInput({
      name: ev.target.name,
      value: ev.target.value,
    });
  };

  const renderDesign = () => {
    if (props.designIsOpen === true) {
      return (
        <section className="form__design__colors js_boxTwo">
          <label htmlFor="" className="form__design__label">
            Colores
          </label>
          <div className="form__design__rangeBox">
            <div className="form__design__colorInput">
              <label
                htmlFor="radio1"
                className="form__design__label"
                hidden
              ></label>
              <input
                type="radio"
                name="palette"
                value="1"
                id="radio1"
                className="form__design__radioBtn js_input_palette js_input_palette1 js_default_radio"
                onChange={handleInput}
                checked={props.person.palette === '1'}
              />
              <div className="form__design__p1c1 form__design__colorBox"></div>
              <div className="form__design__p1c2 form__design__colorBox"></div>
              <div className="form__design__p1c3 form__design__colorBox"></div>
            </div>
            <div className="form__design__colorInput">
              <label
                htmlFor="radio2"
                className="form__design__label"
                hidden
              ></label>
              <input
                type="radio"
                name="palette"
                value="2"
                id="radio2"
                className="form__design__radioBtn js_input_palette js_input_palette2"
                onChange={handleInput}
                checked={props.person.palette === '2'}
              />
              <div className="form__design__p2c1 form__design__colorBox"></div>
              <div className="form__design__p2c2 form__design__colorBox"></div>
              <div className="form__design__p2c3 form__design__colorBox"></div>
            </div>
            <div className="form__design__colorInput">
              <label
                htmlFor="radio3"
                className="form__design__label"
                hidden
              ></label>
              <input
                type="radio"
                name="palette"
                value="3"
                id="radio3"
                className="form__design__radioBtn js_input_palette js_input_palette3"
                onChange={handleInput}
                checked={props.person.palette === '3'}
              />
              <div className="form__design__p3c1 form__design__colorBox"></div>
              <div className="form__design__p3c2 form__design__colorBox"></div>
              <div className="form__design__p3c3 form__design__colorBox"></div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  };

  return (
    <fieldset
      className="form__design"
      id="design"
      onClick={props.handleCollapse}
    >
      <div className="form__design__boxOne js_fieldset_boxOne">
        <i className="fa-regular fa-object-ungroup ungroup_design form__design__ungroupIcon"></i>
        <legend className="form__design__title">Diseña</legend>

        <i
          className={`fa-solid fa-chevron-up js_arrow ${
            props.designIsOpen ? '' : 'upsideDown'
          }`}
        ></i>
      </div>
      {renderDesign()}
    </fieldset>
  );
}
export default Design;
