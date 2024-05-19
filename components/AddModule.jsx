import React, { useState } from 'react';
const AddModule = ({ addModule }) => {
  const [moduleName, setModuleName] = useState('');

  const handleAddModule = () => {
    if (moduleName) {
      addModule(moduleName);
      setModuleName('');
    }
  };

  return (
    <div className="add-module">
      <h2>Add Module</h2>
      <input 
        type="text" 
        placeholder="Module name" 
        value={moduleName} 
        onChange={(e) => setModuleName(e.target.value)} 
      />
      <button onClick={handleAddModule}>Add Module</button>
    </div>
  );
};

export default AddModule;