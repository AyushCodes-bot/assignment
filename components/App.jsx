import React, { useState } from 'react';
import ModuleList from './ModuleList';
import AddModule from './AddModule';
import '../App.css';

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (name) => {
    setModules([...modules, { id: Date.now(), name, resources: [] }]);
  };

  const deleteModule = (id) => {
    setModules(modules.filter(module => module.id !== id));
  };

  const addResource = (moduleId, newResource) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          resources: [...module.resources, newResource]
        };
      }
      return module;
    }));
  };

  const deleteResource = (moduleId, resourceId) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          resources: module.resources.filter(resource => resource.id !== resourceId)
        };
      }
      return module;
    }));
  };

  return (
    <div className="app">
      <h1>Course Builder</h1>
      <AddModule addModule={addModule} />
      <ModuleList 
        modules={modules} 
        deleteModule={deleteModule} 
        addResource={addResource} 
        deleteResource={deleteResource} 
      />
    </div>
  );
};

export default App;