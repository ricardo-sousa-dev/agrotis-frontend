import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import cnpjMask from '../utils/cnpjMask';
import dateMask from '../utils/dateMask';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../css/components/form.css';

function Form() {
  const [ open, setOpen ] = useState(false);
  const [ values, setValues ] = useState({ cnpj: '' })

  const inputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [ name ]: value
    })
  }

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
        }
      );
    }, 3000);
  }

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
          <label>Nome</label>
          <input {...register("nome", { required: true })}
            type='text'
            data-cy="input-nome" />
          {errors.nome?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Data Inicial</label>
          <input {...register("dataInicial", { required: true })}
            data-cy="input-dataInicial"
            name='dataInicial'
            value={dateMask(values.dataInicial || '')}
            onChange={inputChange} />
          {errors.dataInicial?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Data Final</label>
          <input {...register("dataFinal", { required: true })}
            data-cy="input-dataFinal"
            name='dataFinal'
            value={dateMask(values.dataFinal || '')}
            onChange={inputChange} />
          {errors.dataFinal?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Id da Propriedade</label>
          <input {...register("idPropriedade", { required: true })}
            type='number'
            data-cy='input-idPropriedade' />
          {errors.idPropriedade?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Nome da Propriedade</label>
          <input {...register("nomePropriedade", { required: true })}
            type='text'
            data-cy='input-nomePropriedade' />
          {errors.nomePropriedade?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>CNPJ da Propriedade</label>
          <input {...register("cnpj", { required: true })}
            name='cnpj'
            data-cy="input-cnpj"
            value={cnpjMask(values.cnpj)}
            onChange={inputChange} />
          {errors.cnpj?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Id do Laboratório</label>
          <input {...register("idLaboratorio", { required: true })}
            type='number'
            data-cy="input-idLaboratorio" />
          {errors.idLaboratorio?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Nome do Laboratório</label>
          <input {...register("nomeLaboratorio", { required: true })}
            type='text'
            data-cy="input-nomeLaboratorio" />
          {errors.nomeLaboratorio?.type === 'required' && <span className="alert">Campo obrigatório</span>}
        </div>

        <div className="item-form">
          <label>Observações</label>
          <textarea {...register("observacoes")}
            data-cy="input-observacoes"
          />
        </div>

        <div className="div-submit">
        <input className="submit" type="submit"
          data-cy="button-enviar" />
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
