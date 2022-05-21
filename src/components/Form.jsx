import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import dateMask from '../utils/dateMask';
import cnpjMask from '../utils/cnpjMask';
import '../css/components/form.css';

function Form() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ cnpj: '' });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      console.log(
        {
          nome: data.nome,
          dataInicial: new Date(data.dataInicial).toISOString(),
          dataFinal: new Date(data.dataFinal).toISOString(),
          infosPropriedade: {
            id: data.idPropriedade,
            nome: data.nomePropriedade,
          },
          cnpj: data.cnpj,
          laboratorio: {
            id: data.idLaboratorio,
            nome: data.nomeLaboratorio,
          },
          observacoes: data.observacoes,
        },
      );
    }, 3000);
  };

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #00725D;
  margin-bottom: 1em;
`;

  return (
    <>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item-form">
          <label htmlFor="input-nome">Nome</label>
          <input
            {...register('nome', { required: true })}
            type="text"
            id="input-nome"
            data-cy="input-nome"
          />
          {errors.nome?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-dataInicial">Data Inicial</label>
          <input
            {...register('dataInicial', { required: true })}
            data-cy="input-dataInicial"
            id="input-dataInicial"
            name="dataInicial"
            value={dateMask(values.dataInicial || '')}
            onChange={inputChange}
          />
          {errors.dataInicial?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-dataFinal">Data Final</label>
          <input
            {...register('dataFinal', { required: true })}
            data-cy="input-dataFinal"
            id="input-dataFinal"
            name="dataFinal"
            value={dateMask(values.dataFinal || '')}
            onChange={inputChange}
          />
          {errors.dataFinal?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-idPropriedade">Id da Propriedade</label>
          <input
            {...register('idPropriedade', { required: true })}
            type="number"
            data-cy="input-idPropriedade"
            id="input-idPropriedade"
          />
          {errors.idPropriedade?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-nomePropriedade">Nome da Propriedade</label>
          <input
            {...register('nomePropriedade', { required: true })}
            type="text"
            data-cy="input-nomePropriedade"
            id="input-nomePropriedade"
          />
          {errors.nomePropriedade?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-cnpj">CNPJ da Propriedade</label>
          <input
            {...register('cnpj', { required: true })}
            name="cnpj"
            data-cy="input-cnpj"
            id="input-cnpj"
            value={cnpjMask(values.cnpj)}
            onChange={inputChange}
          />
          {errors.cnpj?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-idLaboratorio">Id do Laboratório</label>
          <input
            {...register('idLaboratorio', { required: true })}
            type="number"
            data-cy="input-idLaboratorio"
            id="input-idLaboratorio"
          />
          {errors.idLaboratorio?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-nomeLaboratorio">Nome do Laboratório</label>
          <input
            {...register('nomeLaboratorio', { required: true })}
            type="text"
            data-cy="input-nomeLaboratorio"
            id="input-nomeLaboratorio"
          />
          {errors.nomeLaboratorio?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label htmlFor="input-observacoes">Observações</label>
          <textarea
            {...register('observacoes')}
            data-cy="input-observacoes"
            id="input-observacoes"
          />
        </div>

        <div className="div-submit">
          <input
            className="submit"
            type="submit"
            data-cy="button-enviar"
          />
        </div>
      </form>

      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className="spinner">
            <CircularProgress color="inherit" />
            <h2>Enviando...</h2>
          </div>
        </Backdrop>
      </div>
    </>
  );
}

export default Form;
