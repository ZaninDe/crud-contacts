import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
`

export const Form = styled.form`
  background-color: var(--orange-500);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
`

export const Input = styled.input`
  width: 30rem;
  height: 2.2rem;
  border-radius: 6px;
  border: none;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 1rem;
  background: var(--black-400);
  color: #fff;
`

export const SubmitButton = styled.button`
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: var(--green-500);
  color: #fff;
  font-size: 1.6rem;
  transition: 0.2s;

  &:hover{
    background: var(--green-400)
  }
`