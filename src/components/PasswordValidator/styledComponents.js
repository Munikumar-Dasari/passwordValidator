// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 12px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const Description = styled.p`
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
