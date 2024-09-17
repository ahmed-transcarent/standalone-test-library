import { Box, Link, Text } from "@transcarent/foundation";
import { useContext } from "react";
import { ExternalLinkContext } from "./ExternalLink";

export function PageB() {
  const ExternalLink = useContext(ExternalLinkContext);
  return (
    <>
      <Text>Hello Page B!</Text>
      <Box display="block">
        <ExternalLink href="/me/profile" asChild>
          <Link>
            Navigate to route located in web app but not in standalone library
          </Link>
        </ExternalLink>
      </Box>
    </>
  );
}
