import { Route, Router } from "wouter";
import { Text } from "@transcarent/foundation";
import { PageA } from "./components/PageA";
import { PageB } from "./components/PageB";
import { NavigationButtons } from "./components/NavigationButtons";
import { ExternalLinkContext } from "./components/ExternalLink";
import { ExternalNavigationContext } from "./components/ExternalNavigation";

export default function TestLib({
  basePath,
  ExternalLink,
  externalNavigation,
}: {
  basePath: string;
  ExternalLink: React.ComponentType;
  externalNavigation: (url: string) => void;
}) {
  return (
    <ExternalNavigationContext.Provider value={externalNavigation}>
      <ExternalLinkContext.Provider value={ExternalLink}>
        <Router base={basePath}>
          <Route path="/page-a" component={PageA} />
          <Route path="/page-b" component={PageB} />
          <Route path="/">
            <Text>Default route</Text>
          </Route>
          <NavigationButtons />
        </Router>
      </ExternalLinkContext.Provider>
    </ExternalNavigationContext.Provider>
  );
}
