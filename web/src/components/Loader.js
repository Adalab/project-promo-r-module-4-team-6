import '../styles/components/Loader.scss';
function Loader(props) {
  return props.showLoading ? (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
}

export default Loader;
