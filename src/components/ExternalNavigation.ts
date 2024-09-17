import { createContext } from "react";
import { navigate } from "wouter/use-browser-location";

export const ExternalNavigationContext =
  createContext<(url: string) => void>(navigate);
