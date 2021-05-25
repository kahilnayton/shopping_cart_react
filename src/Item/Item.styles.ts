import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
height: 100%;

button {
  border-radius: 0 0 20px 20px;
}

img {
  max-height: 250px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}

div {
  font-family: Arial, Arial, Helvetica, sans-serif;
}
`