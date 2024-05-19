import React from 'react';

const Resource = ({ resource, moduleId, deleteResource }) => {
  return (
    <div className="resource">
      {resource.type === 'link' ? (
        <a href={resource.content} target="_blank" rel="noopener noreferrer">{resource.content}</a>
      ) : resource.type === 'pdf' ? (
        <embed src={resource.content} type="application/pdf" width="100%" height="400px" />
      ) : (
        <img src={resource.content} alt="Resource" style={{ maxWidth: '100%' }} />
      )}
      <button onClick={() => deleteResource(moduleId, resource.id)}>Delete Resource</button>
    </div>
  );
};

export default Resource;