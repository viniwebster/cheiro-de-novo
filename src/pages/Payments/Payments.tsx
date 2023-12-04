import styled from "styled-components";
import { Container, StyledContainer } from "../../UI/utils/container";
import Title from "../../components/Title/Title";
import { veryDarkColor } from "../../UI/variables";

const StyledH2 = styled.h2`
  color: ${veryDarkColor};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;
const StyledP = styled.p`
  margin: 10px 0;
  line-height: 20px;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: decimal;
`
const ContainerInfos = styled(Container)`
  padding: 0 32px;
`

const Payments = () => {
  return (
    <StyledContainer>
      <ContainerInfos>
        <Title text="Formas de Pagamento" />
        <StyledP>
          Para proporcionar conveniência e facilidade aos nossos clientes,
          oferecemos diversas opções de pagamento seguras e confiáveis. Confira
          as formas de pagamento disponíveis em nossa loja:
        </StyledP>

        <StyledList>
          <li>
            <StyledH2>Cartão de Crédito:</StyledH2>
            <p>
              Aceitamos pagamentos com cartões de crédito das bandeiras Visa,
              Mastercard, American Express e outras. A transação é rápida,
              segura e possibilita parcelamento em até [número de parcelas]
              vezes sem juros, de acordo com as condições estabelecidas pela
              administradora do cartão.
            </p>
          </li>
          <li>
            <StyledH2>Boleto Bancário:</StyledH2>
            <p>
              Disponibilizamos a opção de pagamento via boleto bancário. Ao
              escolher essa modalidade, você poderá efetuar o pagamento em
              qualquer agência bancária, lotérica ou pela internet, antes do
              vencimento do boleto.
            </p>
          </li>
          <li>
            <StyledH2>PayPal ou outras plataformas digitais:</StyledH2>
            <p>
              Aceitamos pagamentos por meio de plataformas digitais como PayPal,
              Mercado Pago, PagSeguro, entre outras. Esses serviços oferecem
              segurança nas transações online, permitindo o uso de saldo,
              cartões de crédito cadastrados ou transferências bancárias,
              dependendo das políticas de cada plataforma.
            </p>
          </li>
          <li>
            <StyledH2>Pix:</StyledH2>
            <p>
              Oferecemos a praticidade e agilidade do Pix como opção de
              pagamento instantâneo. Você pode realizar o pagamento escaneando o
              QR Code ou inserindo a chave Pix fornecida no momento da compra.
            </p>
          </li>
          <li>
            <StyledH2>Transferência Bancária:</StyledH2>
            <p>
              É possível realizar o pagamento por meio de transferência bancária
              diretamente para nossa conta. Ao escolher essa opção, serão
              fornecidos os dados necessários para a realização da
              transferência.
            </p>
          </li>
        </StyledList>
        <p>
          É importante ressaltar que todas as transações são protegidas por
          medidas de segurança para garantir a confidencialidade dos dados do
          cliente. Após a confirmação do pagamento, o pedido será processado e
          enviado conforme os prazos estabelecidos para cada forma de entrega.
        </p>
        <StyledP>
          Estamos sempre à disposição para auxiliar em caso de dúvidas sobre as
          formas de pagamento ou qualquer outra questão relacionada à sua
          compra. Agradecemos por escolher nossa loja!
        </StyledP>
      </ContainerInfos>
    </StyledContainer>
  );
};

export default Payments;
