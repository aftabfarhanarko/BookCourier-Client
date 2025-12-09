import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSchore from "./useAxiosSchore";

const useRole = () => {
  const { user } = useAuth();
  const axioscehore = useAxiosSchore();
  const { data: role = "user", isLoading: roleLoding } = useQuery({
    queryKey: ["user-role"],
    queryFn: async () => {
      const res = await axioscehore.get(`role-findnow?email=${user?.email}`);
      console.log(res);
      return res.data;
    },
  });

  return { roleLoding, role };
};

export default useRole;
