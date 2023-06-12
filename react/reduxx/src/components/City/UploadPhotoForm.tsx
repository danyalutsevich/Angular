import React, { useState } from "react";

function UploadPhotoForm() {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoDescription, setPhotoDescription] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    setNick("");
    setPassword("");
    setEmail("");
    setPhoto(null);
    setPhotoDescription("");
    setTags("");
  }

  function handleNickChange(event: any) {
    setNick(event.target.value);
  }

  function handlePasswordChange(event: any) {
    setPassword(event.target.value);
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }

  function handlePhotoChange(event: any) {
    setPhoto(event.target.files[0]);
  }

  function handlePhotoDescriptionChange(event: any) {
    setPhotoDescription(event.target.value);
  }

  function handleTagsChange(event: any) {
    setTags(event.target.value);
  }

  function validateForm() {
    return (
      nick.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      photo !== null &&
      photoDescription.length > 0 &&
      tags.length > 0
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nick">Username</label>
        <input
          type="text"
          id="nick"
          value={nick}
          onChange={handleNickChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" onChange={handlePhotoChange} required />
      </div>
      <div>
        <label htmlFor="photo-description">Photo Description:</label>
        <textarea
          id="photo-description"
          value={photoDescription}
          onChange={handlePhotoDescriptionChange}
          required
        />
      </div>
      <div>
        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={handleTagsChange}
          required
        />
      </div>
      <button type="submit" disabled={!validateForm()}>
        Upload Photo
      </button>
    </form>
  );
}

export default UploadPhotoForm;
