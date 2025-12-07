import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/RouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import ComtextProvider from "./contexts/ComtextProvider";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ComtextProvider>
        <Toaster position="top-center" />
        <RouterProvider router={router}></RouterProvider>
        {/* <ReactQueryDevtoolsPanel initialIsOpen={true} /> */}
      </ComtextProvider>
    </QueryClientProvider>
  </StrictMode>
);
