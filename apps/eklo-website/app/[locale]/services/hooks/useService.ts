import { usePathname } from "next/navigation";

export const useService = () => {
  const pathName = usePathname();
  const serviceName = pathName.split("services/")[1].split("/")[0];
  return {
    serviceName,
  };
};
