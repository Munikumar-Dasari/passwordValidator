// Write your code here

import {useState} from 'react'

import {
  BgContainer,
  AppContainer,
  MainHeading,
  Description,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <BgContainer>
      <AppContainer>
        <MainHeading>Password Validator</MainHeading>
        <Description>Check How strong and secure is your password </Description>
        <Input type="password" value={password} onChange={onChangePassword} />
        {showErrorMessage && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </AppContainer>
    </BgContainer>
  )
}

export default PasswordValidator
