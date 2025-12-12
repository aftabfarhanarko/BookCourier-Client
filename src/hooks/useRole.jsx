import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSchore from "./useAxiosSchore";

const useRole = () => {
  const { user, loading } = useAuth();
  const axioscehore = useAxiosSchore();

  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["role-findnow", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axioscehore.get(`role-findnow?email=${user.email}`);
      return res.data.role;
    },
  });

  return { role, roleLoading };
};

export default useRole;
