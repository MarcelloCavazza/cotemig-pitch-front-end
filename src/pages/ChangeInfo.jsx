import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Nothing from '../components/containers/Nothing';
import Input from '../components/inputs/Input';
import InputContainer from '../components/containers/InputContainer';
import FormButton, {ButtonContainer} from '../components/buttons/FormButton'
import FormContainer from '../components/containers/FormContainer';
import Title from '../components/texts/Title';
import { Combobox, Option } from '../components/inputs/Combobox'
import colors from '../global-styles/colors';



const ChangeInfo = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    cpf: "",
    birthday: "",
    gender: "",
    telephone: ""
  });

  const header = {
    method: 'PUT',
    title: 'Change Profile',
    label: 'Mude as informações do seu perfil aqui.',
    buttonEnter: 'Atualizar',
    buttonBack: 'Voltar'
  };
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };

  return (
    <>
      <Nothing />
      <FormContainer
        className='neumorph'
        method={header.method}>
          <Title size={2} color={colors.logoGreenOne}>
            {header.title}
          </Title>
          <div className="label">
            <span>{header.label}</span>
          </div>
          <InputContainer>
            <Input
              type="text"
              name="name"
              id="userName"
              onChange={onChange}
              isRequired
            >
              Nome
            </Input>
            <Input
              type="text"
              name="email"
              id="userEmail"
              onChange={onChange}
              isRequired
            >
              Email
            </Input>
            <Input
              type="text"
              name="telephone"
              id="userTelephone"
              onChange={onChange}
              isRequired
            >
              Telephone
            </Input>
            <Input
              type="text"
              name="cpf"
              id="userCpf"
              onChange={onChange}
              isRequired
            >
              CPF
            </Input>
            <Input
              type="text"
              name="birthday"
              id="userBirthday"
              onChange={onChange}
              isRequired
            >
              Data de nascimento
            </Input>
            <Combobox title="Sexo" name="gender" id="userGender">
              <Option value="masculino">Masculino</Option>
              <Option value="feminino">Feminino</Option>
              <Option value="outro">Outro</Option>
            </Combobox>
          </InputContainer>
          <ButtonContainer>
            <FormButton>
              <Link to='/'>{header.buttonBack}</Link>
            </FormButton>
            <FormButton primary>
              {header.buttonEnter}
            </FormButton>
          </ButtonContainer>
      </FormContainer>
      <Nothing />
    </>
  )
}

export default ChangeInfo