import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao etc.
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // infosDoEvento = variável que captura vários parâmetros durante a mudança do campo
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm
  };
}

export default useForm;