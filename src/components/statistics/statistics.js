import { Label, StatList, StatListItem, Title, Wrapper, generateDarkBackgroundColor } from "./statistics.styled";

export const Statistics = ({ title, stats }) => (
    <Wrapper>
        {title?(<Title>{title}</Title>):<></>}
  <StatList>
{stats.map(item => (<StatListItem style={{
            backgroundColor: generateDarkBackgroundColor()
          }}>
      <Label>{item.label}</Label>
      <Label>{item.percentage}%</Label>
    </StatListItem>
    ))}
  </StatList>
</Wrapper>
);

