import { Button, Link, Text, VStack } from "@transcarent/foundation";
import { useContext } from "react";
import { ExternalLinkContext } from "./ExternalLink";
import { ExternalNavigationContext } from "./ExternalNavigation";

export function PageB() {
  const ExternalLink = useContext(ExternalLinkContext);
  const navigate = useContext(ExternalNavigationContext);
  return (
    <>
      <Text>Hello Page B!</Text>
      <VStack align="start">
        <Button
          onClick={() => {
            navigate("/me/profile");
          }}
        >
          Navigate to route located in web app but not in standalone library
        </Button>
        <ExternalLink href="/me/profile" asChild>
          <Link>
            Navigate to route located in web app but not in standalone library
          </Link>
        </ExternalLink>
      </VStack>
    </>
  );
}
