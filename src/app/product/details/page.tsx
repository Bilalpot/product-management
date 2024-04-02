"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { useProductByIdQuery } from '@/queries/fetchProducts';

const ProductDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  const { data: product, isLoading } = useProductByIdQuery(id !== null ? id : '');

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={product?.images[0]} alt={product?.title} className="mb-4" />
          <p className="text-lg">{product?.description}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Category: {product?.category.name}</h2>
          <img src={product?.category.image} alt={product?.category.name} className="mb-4" />
          <p className="text-gray-600">Price: ${product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
