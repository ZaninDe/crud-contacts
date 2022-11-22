import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import * as S from './styles'

interface User {
  cpf: string,
  name: string,
  lastName: string,
  email: string,
  phone: string,
  cel: string,
  birthDate: string,
  CEP: string,
  state: string,
  city: string,
  street: string,
  district: string,
  HowDidYouKnowAbout: string,
  contactReason: string,
  userType?: 'admin' | 'user'
}

const YupForm = Yup.object().shape({
  cpf: Yup.string().required('CPF/CNPJ é obrigatório!'),
  name: Yup.string().required('name é obrigatório!'),
  lastName: Yup.string().required('lastName é obrigatório!'),
  email: Yup.string().required('Email required').email(),
  phone: Yup.string().required('phone é obrigatório!'),
  cel: Yup.string().required('cel é obrigatório!'),
  birthDate: Yup.string().required('birthDate é obrigatório!'),
  CEP: Yup.string().required('CEP é obrigatório!'),
  state: Yup.string().required('state é obrigatório!'),
  city: Yup.string().required('city é obrigatório!'),
  street: Yup.string().required('street é obrigatório!'),
  district: Yup.string().required('district é obrigatório!'),
  HowDidYouKnowAbout: Yup.string().required('Como soube da Firgun é obrigatório!'),
  contactReason: Yup.string().required('motivo do Contato é obrigatório!'),
})

function App() {
  const resolverForm = { resolver: yupResolver(YupForm) }
  const { register, handleSubmit, watch, formState: { errors } } = useForm(resolverForm);
  async function onSubmit(data: any) {
    const newUser = {
      cpf: data.cpf,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      cel: data.cel,
      birthDate: data.birthDate,
      CEP: data.CEP,
      state: data.state,
      city: data.city,
      street: data.street,
      district: data.district,
      HowDidYouKnowAbout: data.HowDidYouKnowAbout,
      contactReason: data.contactReason,
      userType: 'user'
    }

    console.log(newUser)

  };
  return (
    <S.Wrapper>
      <div>
        <S.Form
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your S.Input into the hook by invoking the "register" function */}
          <S.Input {...register("name")} placeholder="Nome" />
          <S.Input {...register("lastName")} placeholder="Sobrenome" />
          <S.Input {...register("email")} placeholder="E-mail" />
          <S.Input {...register("phone")} placeholder="Telefone" />
          <S.Input {...register("cel")} placeholder="Celular" />
          <S.Input {...register("barthDate")} placeholder="Data de nascimento" />
          <S.Input {...register("CEP")} placeholder="CEP" />
          <S.Input {...register("state")} placeholder="Estado" />
          <S.Input {...register("city")} placeholder="Cidade" />
          <S.Input {...register("street")} placeholder="Rua" />
          <S.Input {...register("district")} placeholder="Bairro" />
          <S.Input {...register("cpf")} placeholder="cpf/cnpj" />
          <S.Input {...register("HowDidYouKnowAbout")} placeholder="Como soube da Firgun?" />
          <S.Input {...register("contactReason")} placeholder="Qual o motivo do Contato?" />

          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.Form>
      </div>
      <div>

      </div>
    </S.Wrapper>
  )
}

export default App
