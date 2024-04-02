"use client";
import Link from 'next/link';
import useFetchProductsQuery from '@/queries/fetchProducts';
import { Product } from '@/types/Product';
export default function Home() {
  const { data: products, isLoading, isError } = useFetchProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Link href="/product/add" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add New Product
        </Link>
      </div>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product: Product) => (
          <Link key={product?.id} href={{
            pathname: '/product/details',
            query: { id: product?.id },
          }}>
            <div className="border rounded-md p-4 transition duration-300 ease-in-out hover:bg-gray-100 transform hover:scale-105">
              <img src={product?.images?.[0]} alt={product?.title} className="mb-2" />
              <h2 className="text-lg font-semibold">{product?.title}</h2>
              <p className="text-gray-600">${product?.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
