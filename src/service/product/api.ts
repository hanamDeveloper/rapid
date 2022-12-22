import { API } from "../service";
import { UpdateProductDTO, PaginationType, ProductResponseType } from "./model";

export const getProductList = async (
  params: PaginationType
): Promise<ProductResponseType> => {
  const response = await API.get("/product/list", { params });

  response.data.list.forEach((product: any) => {
    for (let key in product) {
      if ((product as any)[key] === null || key === "createdAt") {
        delete (product as any)[key];
      }
    }
  });
        
  return response.data;
};

export const editProductList = async (
  params: UpdateProductDTO,
  productId: number,
) => {
  const response = await API.put(
    `/product/${productId}`,
    params
  );
  return response.data;
};
