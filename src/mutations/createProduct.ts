import FormData from "@/types/FormData";
import { ApiCall } from "@/utils/ApiCall";
import { useMutation } from "@tanstack/react-query";

const createProductMutation = async (payload: FormData) => {
  const response = await ApiCall("products", null, "POST", payload);

  if (!response) {
    throw new Error("Failed to create product");
  }

  return response;
};

const useCreateProductMutation = () => {
  return useMutation({ mutationFn: createProductMutation });
};

export default useCreateProductMutation;
