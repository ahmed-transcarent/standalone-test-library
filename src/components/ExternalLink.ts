import { createContext } from "react";
import { Link } from "wouter";

export const ExternalLinkContext =
  createContext<React.ComponentType<any>>(Link);
