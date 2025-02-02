import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { stringify } from "qs";

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      push(path: RoutePath, search?: any) {
        navigate({ pathname: path, search: search ? stringify(search, { indices: false }) : undefined });
      },
    };
  }, [navigate]);
}

export type RoutePath = "/" | "/auth/register" | "/auth/login";
