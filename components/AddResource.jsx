import React, { useState } from 'react';
const AddResource = ({ moduleId, addResource }) => {
  const [resourceType, setResourceType] = useState('link');
  const [resourceContent, setResourceContent] = useState('');
  const handleAddResource = () => {
    if (resourceContent) {
      const newResource = {
        id: Date.now(),
        type: resourceType,
        content: resourceContent
      };
      addResource(moduleId, newResource);
      setResourceContent('');
    }
  };
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newResource = {
            id: Date.now(),
            type: file.type.includes('pdf') ? 'pdf' : 'image',
            content: reader.result
          };
          addResource(moduleId, newResource);
        };
        reader.readAsDataURL(file);
      });
    }
  };
  const handleResourceTypeChange = (e) => {
    setResourceType(e.target.value);
    setResourceContent('');
  };
  return (
    <div className="add-resource">
      <div>
        <label>Type: </label>
        <select value={resourceType} onChange={handleResourceTypeChange}>
          <option value="link">Link</option>
          <option value="pdf">PDF</option>
          <option value="image">Image</option>
        </select>
      </div>
      {resourceType === 'link' ? (
        <div>
          <input
            type="text"
            placeholder="Enter link"
            value={resourceContent}
            onChange={(e) => setResourceContent(e.target.value)}
          />
          <button onClick={handleAddResource}>Add Link</button>
        </div>
      ) : (
        <div>
          <input type="file" accept=".pdf,image/*" multiple onChange={handleFileUpload} />
        </div>
      )}
    </div>
  );
};
export default AddResource;