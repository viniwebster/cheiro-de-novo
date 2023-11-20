import ItemSearch from "../ItemSearch/ItemSearch";
import { useQuery } from "react-query";
import { getAllProducts } from "../../http/http";
import { IProduct } from "../../interfaces/IProduct";
import InputText from "../InputSearch/InputSearch";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledContainerInput = styled.div`
  width: 50%;
  display: grid;
  grid-template-rows: auto;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 500px) {
    width: 100%;
    grid-area: 2/1;
    grid-column-end: 4;
  }
`;

const StyledContainerSearch = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
`;

const Search = () => {
  const { data } = useQuery(["products"], () => getAllProducts());
  const [itensFind, setItensFind] = useState<IProduct[] | undefined>(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length) {
        const filter = data?.filter((itens) =>
        itens.title.toLowerCase().includes(search.toLowerCase())
      );
      return setItensFind(filter?.slice(0, 4));
    }
    return setItensFind([]);
  }, [search, data]);

  return (
    <StyledContainerInput>
      <InputText
        placeholder="Busque aqui..."
        value={search}
        setSearch={setSearch}
      />
      <StyledContainerSearch>
        {itensFind?.map((item) => (
          <ItemSearch
            key={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
            id={item.id!}
            onClick={() => setSearch("")}
          />
        ))}
      </StyledContainerSearch>
    </StyledContainerInput>
  );
};

export default Search;
