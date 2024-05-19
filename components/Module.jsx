import React from 'react';
import ResourceList from './ResourceList';
import AddResource from './AddResource';

const Module = ({ module, deleteModule, addResource, deleteResource }) => {
  return (
    <div className="module">
      <h3>{module.name}</h3>
      <button onClick={() => deleteModule(module.id)}>Delete Module</button>
      <AddResource moduleId={module.id} addResource={addResource} />
      <ResourceList 
        resources={module.resources} 
        moduleId={module.id} 
        deleteResource={deleteResource}
      />
    </div>
  );
};

export default Module;