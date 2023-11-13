import { useQuery } from "react-query";
import { IProduct } from "../../interfaces/IProduct";
import { getAllProducts, getByCategory, getCategories } from "../../http/http";
import { Container, StyledContainer } from "../../UI/utils/container";
import { StyledContainerProducts } from "../../components/BestProducts/BestProducts";
import Card from "../../components/Card/Card";
import { StyledLink } from "../../UI/utils/StyledLink";
import LoaderContainer from "../../components/LoaderContainer/LoaderContainer";
import Title from "../../components/Title/Title";
import banner from "../../assets/banners/banner1.png";
import styled from "styled-components";
import Filter from "../../components/Filter/Filter";
import { useEffect, useState } from "react";

const StyledImg = styled.img`
  width: 100%;

  @media screen and (max-width: 500px){
   height: 180px; 
   object-fit: cover;
  }
`;

const StyledDivFilter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  button {
      margin: 0;
  }

  @media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
  }
`;

const Products = () => {
  const [filter, setFilter] = useState("");
  const { data: categories } = useQuery(["categories"], () => getCategories());
  const { data, isLoading } = useQuery<IProduct[]>(["products"], () =>
    getAllProducts()
  );
  const [products, setProducts] = useState<IProduct[] | undefined>([]);
  const { data: category } = useQuery(["category", filter], () =>
    getByCategory(filter)
  );

  useEffect(() => {
    if (filter === "") {
      setProducts(data);
    } else {
      setProducts(category);
    }
  }, [filter, category, data]);

  if (isLoading) return <LoaderContainer />;

  return (
    <>
      <StyledImg src={banner} alt="Banner promocional" />
      <Title text="Produtos" />
      <StyledDivFilter>
        <Filter
          filter={filter}
          setFilter={setFilter}
          options={categories ?? []}
        />
      </StyledDivFilter>
      <StyledContainer>
        <Container>
          <StyledContainerProducts>
            {products?.map((product) => (
              <StyledLink to={`/product/${product.id}`} key={product.id}>
                <Card
                  price={product.price}
                  title={product.title}
                  image={product.image}
                />
              </StyledLink>
            ))}
          </StyledContainerProducts>
        </Container>
      </StyledContainer>
    </>
  );
};

export default Products;
