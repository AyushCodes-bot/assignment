import React from 'react';
import Module from './Module';

const ModuleList = ({ modules, deleteModule, addResource, deleteResource }) => {
  return (
    <div className="module-list">
      {modules.map(module => (
        <Module 
          key={module.id} 
          module={module} 
          deleteModule={deleteModule} 
          addResource={addResource} 
          deleteResource={deleteResource}
        />
      ))}
    </div>
  );
};

export default ModuleList;