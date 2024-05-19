import React from 'react';
import Resource from './Resource';

const ResourceList = ({ resources, moduleId, deleteResource }) => {
  return (
    <div className="resource-list">
      {resources.map(resource => (
        <Resource 
          key={resource.id} 
          resource={resource} 
          moduleId={moduleId} 
          deleteResource={deleteResource}
        />
      ))}
    </div>
  );
};

export default ResourceList;