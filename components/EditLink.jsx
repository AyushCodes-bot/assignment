import React, { useState } from 'react';

const EditLink = ({ resource, saveLink }) => {
  const [content, setContent] = useState(resource.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLink(resource.id, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Edit Link"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditLink;