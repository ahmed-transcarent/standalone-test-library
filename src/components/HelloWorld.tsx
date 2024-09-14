import { Card, CardVariant, Text } from "@transcarent/foundation";

export function GreetingCard({
  greeting = "Hello",
  name = "World",
}: {
  greeting?: string;
  name?: string;
}) {
  return (
    <Card variant={CardVariant.container}>
      <Text>
        {greeting} {name}!
      </Text>
    </Card>
  );
}
