import React from 'react';
import '../css/pages/FormPage.css';
import { useForm } from 'react-hook-form';

function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label>Nome</label>
          <input {...register("name", { required: true })} />
          {errors.name?.type === 'required' && "Preenchimento do Nome é obrigatório"}
        </div>

        <div className="initDate" >
          <label>Data Inicial</label>
          <input {...register("dataInicial")} />
          {errors.dataInicial?.type === 'required' && "Preenchimento da Data Inicial é obrigatório"}
        </div>

        <div className="endDate" >
          <label>Data Final</label>
          <input {...register("dataFinal")} />
          {errors.dataFinal?.type === 'required' && "Preenchimento da Data Final é obrigatório"}
        </div>

        <div className="idProperty" >
          <label>Id da Propriedade</label>
          <input {...register("idProperty")} />
          {errors.idProperty?.type === 'required' && "Preenchimento do Id da Propriedade é obrigatório"}
        </div>

        <div className="nameProperty">
          <label>Nome da Propriedade</label>
          <input {...register("nameProperty")} />
          {errors.nameProperty?.type === 'required' && "Preenchimento do Nome da Propriedade é obrigatório"}
        </div>

        <div className="cnpjProperty" >
          <label>CNPJ da Propriedade</label>
          <input {...register("cnpj")} />
          {errors.cnpj?.type === 'required' && "Preenchimento do CNPJ da Propriedade é obrigatório"}
        </div>

        <div className="idLab">
          <label>Id do Laboratório</label>
          <input {...register("idLaboratorio")} />
          {errors.idLaboratorio?.type === 'required' && "Preenchimento do Id do Laboratório é obrigatório"}
        </div>

        <div className="nameLab">
          <label>Nome do Laboratório</label>
          <input {...register("nomeLaboratorio")} />
          {errors.nameLaboratorio?.type === 'required' && "Preenchimento do Nome do Laboratório é obrigatório"}
        </div>

        <div className="comments">
          <label>Observações</label>
          <textarea {...register("observacoes")} />
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default FormPage;

// {
//   nome: 'Jon doe',
//   dataInicial: '2022-02-02T17:41:44Z',
//   dataFinal: '2022-02-02T17:41:44Z',
//   infosPropriedade: {
//   id: 12345,
//   nome: 'Nome Exemplo da fazenda'
//   },
//   cnpj: 'XX. XXX. XXX/0001-XX',
//   laboratorio: {
//   id: 1234,
//   nome: 'Laboratorio exemplo'
//   },
//   observacoes: 'Observacao exemplo de teste'
//   } ```
//   ## Itens Opcionais
//   - Usar styled-compontes.
//   - Usar uma lib de formulario (react-hook-form por exemplo).
//   - Mockar chamadas de dados dos inputs de select.
//   - Caso escolha React, usar hooks