import React, { useState } from 'react';
import '../css/pages/FormPage.css';
import { useForm } from 'react-hook-form';
import {cnpjMask} from '../utils/cnpjMask';

function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(
    {
      nome: data.nome,
      dataInicial: data.dataInicial,
      dataFinal: data.dataFinal,
      infosPropriedade: {
        id: data.idProperty,
        nome: data.nomeProperty,
      },
      cnpj: data.cnpj,
      laboratorio: {
        id: data.idLaboratorio,
        nome: data.nomeLaboratorio,
      },
      observacoes: data.observacoes,
    }
  );

  const [ values, setValues ] = useState({ cnpj: '' })

  const inputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [ name ]: value
    })
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nome">
          <label>Nome</label>
          <input {...register("nome", { required: true })} type='text' />
          {errors.nome?.type === 'required' && "Preenchimento do Nome é obrigatório"}
        </div>

        <div className="dataInicial" >
          <label>Data Inicial</label>
          <input {...register("dataInicial", { required: true })} type='date' />
          {errors.dataInicial?.type === 'required' && "Preenchimento da Data Inicial é obrigatório"}
        </div>

        <div className="dataFinal" >
          <label>Data Final</label>
          <input {...register("dataFinal", { required: true })} type='date' />
          {errors.dataFinal?.type === 'required' && "Preenchimento da Data Final é obrigatório"}
        </div>

        <div className="idProperty" >
          <label>Id da Propriedade</label>
          <input {...register("idProperty", { required: true })} type='number' />
          {errors.idProperty?.type === 'required' && "Preenchimento do Id da Propriedade é obrigatório"}
        </div>

        <div className="nameProperty">
          <label>Nome da Propriedade</label>
          <input {...register("nomeProperty", { required: true })} type='text' />
          {errors.nomeProperty?.type === 'required' && "Preenchimento do Nome da Propriedade é obrigatório"}
        </div>

        <div className="cnpj" >
          <label>CNPJ da Propriedade</label>
          <input {...register("cnpj", { required: true })} name='cnpj'
            value={cnpjMask(values.cnpj)}
            onChange={inputChange}/>
          {errors.cnpj?.type === 'required' && "Preenchimento do CNPJ da Propriedade é obrigatório"}
        </div>

        <div className="idLaboratorio">
          <label>Id do Laboratório</label>
          <input {...register("idLaboratorio", { required: true })} type='number' />
          {errors.idLaboratorio?.type === 'required' && "Preenchimento do Id do Laboratório é obrigatório"}
        </div>

        <div className="nomeLaboratorio">
          <label>Nome do Laboratório</label>
          <input {...register("nomeLaboratorio", { required: true })} type='text' />
          {errors.nomeLaboratorio?.type === 'required' && "Preenchimento do Nome do Laboratório é obrigatório"}
        </div>

        <div className="observacoes">
          <label>Observações</label>
          <textarea {...register("observacoes")} />
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default FormPage;


//   ## Itens Opcionais
//   - Usar styled-compontes.
//   - Usar uma lib de formulario (react-hook-form por exemplo).
//   - Mockar chamadas de dados dos inputs de select.
//   - Caso escolha React, usar hooks