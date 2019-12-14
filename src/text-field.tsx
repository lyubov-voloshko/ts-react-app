import React from 'react';

interface Props {
  id?: string;
  label?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<Props> = ({ id, label, value, onChange }) => {
  return <div>
    <label htmlFor={ id }>{label}</label>
    <input id={ id } value={ value } onChange={ onChange }/>
  </div>
}

export default TextField;
