import Header from './Header';
import PreviewCard from './PreviewCard';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';
import '../styles/layout/_page.scss';
import '../styles/layout/_form.scss';

function Card(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <Header />

      <main className="create-main">
        <PreviewCard
          avatar={props.avatar}
          person={props.person}
          handleReset={props.handleReset}
          updateAvatar={props.updateAvatar}
        ></PreviewCard>

        <form action="" className="form js_form" onSubmit={handleSubmit}>
          <Design
            person={props.person}
            designIsOpen={props.designIsOpen}
            handleCollapse={props.handleCollapse}
            handleInput={props.handleInput}
          ></Design>
          <Fill
            avatar={props.avatar}
            person={props.person}
            fillIsOpen={props.fillIsOpen}
            handleAvatar={props.handleAvatar}
            updateAvatar={props.updateAvatar}
            handleInput={props.handleInput}
            handleCollapse={props.handleCollapse}
          ></Fill>
          <Share
            dataResult={props.dataResult}
            shareIsOpen={props.shareIsOpen}
            handleShare={props.handleShare}
            handleCollapse={props.handleCollapse}
            showLoading={props.showLoading}
          ></Share>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Card;
