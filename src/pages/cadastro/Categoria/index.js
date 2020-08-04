import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log("arô");
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://fepemoflix.herokuapp.com/categorias';

    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault(); /* Essa linha previne que o botão tenha o comportamento default de submit do formulário */
        setCategorias([ /* Esta função é responsável por atualizar o componente <ul> da linha 74 ao clicar no botão de enviar */
          ...categorias,
          values,
        ]);

        clearForm(valoresIniciais);
      }}
      >
        {/* State */}
        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          // Esta propriedade "key" serve para evitar problemas de índice duplicado na exibição da lista. Normalmente é o "id" vindo do back-end
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
