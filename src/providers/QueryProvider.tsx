import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const QueryProvider = (props: { children: React.ReactElement }) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};

export { QueryProvider };
