import styled from 'styled-components'
import { StyledContainer } from '../../UI/utils/container'
import './Loader.css'

const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoaderContainer = () => {
  return(
    <Container>
      <span className="loader"></span>
    </Container>
  )
}

export default LoaderContainer