import styled from "styled-components";
import { Container, StyledContainer } from "../../UI/utils/container";
import Title from "../../components/Title/Title";
import { veryDarkColor } from "../../UI/variables";

const StyledH2 = styled.h2`
  color: ${veryDarkColor};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`
const StyledP = styled.p`
  margin: 10px 0;
  line-height: 20px;
`
const ContainerInfos = styled(Container)`
  padding: 0 32px;
`

const Policies = () => {
  return (
    <StyledContainer>
      <ContainerInfos>
      <Title text="Política de Troca e Devoluções" />
      <StyledP>
        Agradecemos por escolher nossa loja. Visando oferecer a melhor
        experiência de compra, estabelecemos nossa política de trocas e
        devoluções para garantir sua satisfação.
      </StyledP>

      <StyledH2>Trocas:</StyledH2>
      <StyledP>
        1.1. Produto com Defeito: Caso identifique qualquer defeito no produto
        recebido, entre em contato conosco em até 7 dias corridos após o
        recebimento, informando o problema e anexando fotos que evidenciem o
        defeito. Após análise, providenciaremos a troca do item ou o reembolso
        do valor, de acordo com a disponibilidade do produto em estoque.
      </StyledP>
      <StyledP>
        1.2. Tamanho ou Modelo: Se desejar trocar o produto por questões de
        tamanho ou modelo, entre em contato conosco em até 15 dias corridos após
        o recebimento. O produto deve estar sem sinais de uso, em sua embalagem
        original e com a etiqueta fixada. O cliente será responsável pelos
        custos de envio do produto para a troca e pelo pagamento de eventuais
        diferenças de valores.
      </StyledP>

      <StyledH2>Devoluções:</StyledH2>
      <StyledP>
        2.1. Arrependimento da Compra: Se por algum motivo desejar devolver o
        produto sem indícios de uso, poderá fazê-lo em até 30 dias corridos após
        o recebimento. O reembolso será efetuado após a análise do produto
        devolvido, descontando eventuais custos de frete.
      </StyledP>
      <StyledP>
        2.2. Produto Divergente: No caso de receber um produto diferente do
        solicitado, entre em contato conosco em até 7 dias corridos após o
        recebimento para instruções sobre a devolução ou troca do item.
      </StyledP>

      <StyledH2>Condições Gerais:</StyledH2>
      <StyledP>
        3.1. Todos os produtos devolvidos passarão por uma análise para
        verificação de condições. O reembolso ou a troca serão efetuados somente
        após essa verificação.
      </StyledP>
      <StyledP>
        3.2. Não serão aceitos produtos sem prévia comunicação ou fora do prazo
        estabelecido para trocas e devoluções.
      </StyledP>
      <StyledP>
        3.3. Custos de envio e devolução são de responsabilidade do cliente,
        exceto em casos de produto com defeito ou divergente do solicitado.
      </StyledP>

      <StyledP>
        Nossa equipe está à disposição para esclarecer qualquer dúvida e
        garantir sua total satisfação. Obrigado por confiar em nossa loja.
      </StyledP>
      </ContainerInfos>
    </StyledContainer>
  );
};

export default Policies
