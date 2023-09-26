"use client";

import { setCookie, deleteCookie } from "cookies-next";
import React, { ReactNode, useState } from "react";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "react-query";
import { toast } from "react-toastify";


const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error: any, _variables, _context, mutation) => {
            if (mutation.options.onError) return;
            const message =
              error?.response?.data?.message ||
              error?.response?.message ||
              "Something went wrong, please try again";
            toast.error(message);
          },
        }),
        queryCache: new QueryCache({
          onError: (error: any) => {
            if (error.response.status == 401) {
              deleteCookie("token");
              window.location.href = "/auth/login";
            }
            const message =
              error?.response?.data?.message ||
              error?.response?.message ||
              "Something went wrong, please try again";
            toast.error(message);
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5mins
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
