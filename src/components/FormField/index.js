import React from 'react';

function FormField({ label, type, name, value, onChange }) { /* Este { label, type, name, value, onChange } é uma desestruturação da variável "props" */
  return(
    <div>
      <label>
        {label}: 
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;