import styled from "styled-components"
import { darkColor } from "../../UI/variables"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  text-decoration: none;
  gap: 24px;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  span {
    font-weight: 800;
    color: ${darkColor};
  }

  h3 {
    font-weight: 600;
    color: ${darkColor};
  }

  &:hover {
    transition: .3s;
    background-color: #eef5ec;
  }
`

interface Props {
  img: string,
  title: string,
  price: number,
  id: number,
  onClick?: () => void
}

const ItemSearch = ({ img, title, price, id, onClick } : Props) => {
  return(
    <StyledLink to={`/product/${id}`} onClick={onClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <span>R$ {price}</span>
    </StyledLink>
  )
}

export default ItemSearch