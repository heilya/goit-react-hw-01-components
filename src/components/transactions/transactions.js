import { Direction, Table, Tbody, Title } from "./transaction.styled";

export const TransactionHistory = ({ items }) => (
    <Table>
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

  <Tbody>
    {items.map(item =>(<tr>
      <Direction>{item.type}</Direction>
      <Direction>{item.amount}</Direction>
      <Direction>{item.currency}</Direction>
    </tr>))}
  </Tbody>
</Table>
);