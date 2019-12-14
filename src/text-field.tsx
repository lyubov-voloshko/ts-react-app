import React from 'react';

interface User {
  name: string,
  email: string
}

interface Props {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<Props> = ({ value, onChange }) => {
  return <div>
    <input value={ value } onChange={ onChange }/>
  </div>
}

export default TextField;
