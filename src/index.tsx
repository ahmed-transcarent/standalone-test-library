import { FoundationThemeProvider } from "@transcarent/foundation";
import { GreetingCard } from "./components/HelloWorld";

function DevThemeProvider({ children }: { children: React.ReactNode }) {
  if (import.meta.env.DEV) {
    return <FoundationThemeProvider>{children}</FoundationThemeProvider>;
  }

  return children;
}

export function TestLib({ name }: { name: string }) {
  return (
    <DevThemeProvider>
      <GreetingCard name={name} />;
    </DevThemeProvider>
  );
}

if (import.meta.env.DEV && window) {
  window["TestLib"] = TestLib;
}
