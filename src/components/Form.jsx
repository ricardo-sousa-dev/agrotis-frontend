import React, { useState } from 'react';
import '../css/pages/Form.css';
import { useForm } from 'react-hook-form';
import { cnpjMask } from '../utils/inputMask';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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
  color: palevioletred;
`;

  return (
    <>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nome">
          <label>Nome</label>
          <input {...register("nome", { required: true })}
            type='text'
            data-cy="input-nome" />
          {errors.nome?.type === 'required' && "Preenchimento do Nome é obrigatório"}
        </div>

        <div className="dataInicial" >
          <label>Data Inicial</label>
          <input {...register("dataInicial", { required: true })}
            data-cy="input-dataInicial"
            type="date"
            name='dataInicial' />
          {errors.dataInicial?.type === 'required' && "Preenchimento da Data Inicial é obrigatório"}
        </div>

        <div className="dataFinal" >
          <label>Data Final</label>
          <input {...register("dataFinal", { required: true })}
            data-cy="input-dataFinal"
            type="date"
            name='dataFinal' />
          {errors.dataFinal?.type === 'required' && "Preenchimento da Data Final é obrigatório"}
        </div>

        <div className="idPropriedade" >
          <label>Id da Propriedade</label>
          <input {...register("idPropriedade", { required: true })}
            type='number'
            data-cy='input-idPropriedade' />
          {errors.idPropriedade?.type === 'required' && "Preenchimento do Id da Propriedade é obrigatório"}
        </div>

        <div className="nomePropriedade">
          <label>Nome da Propriedade</label>
          <input {...register("nomePropriedade", { required: true })}
            type='text'
            data-cy='input-nomePropriedade' />
          {errors.nomePropriedade?.type === 'required' && "Preenchimento do Nome da Propriedade é obrigatório"}
        </div>

        <div className="cnpj" >
          <label>CNPJ da Propriedade</label>
          <input {...register("cnpj", { required: true })}
            name='cnpj'
            data-cy="input-cnpj"
            value={cnpjMask(values.cnpj)}
            onChange={inputChange} />
          {errors.cnpj?.type === 'required' && "Preenchimento do CNPJ da Propriedade é obrigatório"}
        </div>

        <div className="idLaboratorio">
          <label>Id do Laboratório</label>
          <input {...register("idLaboratorio", { required: true })}
            type='number'
            data-cy="input-idLaboratorio" />
          {errors.idLaboratorio?.type === 'required' && "Preenchimento do Id do Laboratório é obrigatório"}
        </div>

        <div className="nomeLaboratorio">
          <label>Nome do Laboratório</label>
          <input {...register("nomeLaboratorio", { required: true })}
            type='text'
            data-cy="input-nomeLaboratorio" />
          {errors.nomeLaboratorio?.type === 'required' && "Preenchimento do Nome do Laboratório é obrigatório"}
        </div>

        <div className="observacoes">
          <label>Observações</label>
          <textarea {...register("observacoes")}
            data-cy="input-observacoes"
          />
        </div>

        <input type="submit"
          data-cy="button-enviar" />
      </form>

      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}

export default Form;
