import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import defaultAvatar from '../images/default_image.jpg';
// Services
import callToApi from '../services/api';
import ls from '../services/localStorage';
//Components
import Card from './Card';
import Landing from './Landing';

function App() {
  // State Variables
  const [person, setPerson] = useState(
    ls.get('data', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: { defaultAvatar },
    })
  );
  const [dataResult, setDataResult] = useState({});
  const [avatar, setAvatar] = useState('');

  // Collapse
  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);

  // Events
  const handleInput = (data) => {
    setPerson({ ...person, [data.name]: data.value });
    ls.set('data', person);
  };

  const handleCollapse = (ev) => {
    const sectionId = ev.currentTarget.id;
    if (sectionId === 'design') {
      setDesignIsOpen(true);
      setFillIsOpen(false);
      setShareIsOpen(false);
    } else if (sectionId === 'fill') {
      setDesignIsOpen(false);
      setFillIsOpen(true);
      setShareIsOpen(false);
    } else if (sectionId === 'share') {
      setDesignIsOpen(false);
      setFillIsOpen(false);
      setShareIsOpen(true);
    }
  };

  const handleReset = () => {
    setPerson({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    setAvatar('');
    ls.clear();
  };

  const handleShare = () => {
    callToApi(person).then((data) => {
      setDataResult(data);
    });
  };

  const updateAvatar = (avatar) => {
    setPerson({
      ...person,
      photo: avatar,
    });
    setAvatar(avatar);
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route
          path='/card'
          element={
            <Card
              avatar={avatar}
              person={person}
              dataResult={dataResult}
              designIsOpen={designIsOpen}
              fillIsOpen={fillIsOpen}
              shareIsOpen={shareIsOpen}
              handleInput={handleInput}
              handleShare={handleShare}
              handleReset={handleReset}
              updateAvatar={updateAvatar}
              handleCollapse={handleCollapse}
            ></Card>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
