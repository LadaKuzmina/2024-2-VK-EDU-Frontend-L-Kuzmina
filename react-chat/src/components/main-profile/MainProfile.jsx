import React, { useState } from 'react';
import './main-profile.css';
import {PhotoCamera} from '@mui/icons-material';

function ProfileForm () {
  const [fullName, setFullName] = useState('Tony Jackobson');
  const [username, setUsername] = useState('tony');
  const [bio, setBio] = useState('Subtitle 1');

  return (
    <div className="container">
      <div className="profilePicture">
        <PhotoCamera className="image"/>
      </div>

      <div className="inputGroup">
        <label className="label">Full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input"
        />
      </div>

      <div className="inputGroup">
        <label className="label">Username</label>
        <input
          type="text"
          value={`@${username}`}
          onChange={(e) => setUsername(e.target.value.slice(1))}
          className="input"
        />
        <p className="helperText">Minimum length is 5 characters</p>
      </div>

      <div className="inputGroup">
        <label className="label">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="textarea"
          placeholder="Any details about you"
        />
      </div>
    </div>
  );
}

export default ProfileForm;
