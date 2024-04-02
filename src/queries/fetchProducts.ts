import { ApiCall } from "@/utils/ApiCall";
import { useQuery } from "@tanstack/react-query";

const fetchProductsQuery = async () => {
  const response = await ApiCall("products");
  if (!response) {
    throw new Error("Failed to fetch products");
  }
  return response;
};

const useFetchProductsQuery = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProductsQuery });
};

const fetchProductById = async (id: string) => {
  const response = await ApiCall(`products/${id}`);
  if (!response) {
    throw new Error("Failed to fetch product");
  }
  return response;
};

export const useProductByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};
export default useFetchProductsQuery;
