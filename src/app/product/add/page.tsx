"use client";
import { useForm } from 'react-hook-form';
import TextField from '@/components/common/TextField';
import useCreateProductMutation from '@/mutations/createProduct';
import FormDataType from '@/types/FormData';
import { useRouter } from 'next/navigation';


const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();
  const createProductMutation = useCreateProductMutation();
  const router = useRouter();

  const onSubmit = async (data: FormDataType) => {
    const payload = { "images": ["https://placeimg.com/640/480/any"], ...data }
    try {
      await createProductMutation.mutateAsync(payload);
      // Redirect to home page after successful form submission
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
      <h1 className="text-2xl mb-4">Create New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Title"
          {...register("title", { required: true })}
          error={errors?.title}
        />
        <TextField
          label="Price"
          type="number"
          {...register("price", { required: true, valueAsNumber: true })}
          error={errors?.price}
        />
        <TextField
          label="Description"
          {...register("description", { required: true })}
          error={errors?.description}
        />
        <TextField
          label="Category ID"
          type="number"
          {...register("categoryId", { required: true, valueAsNumber: true })}
          error={errors?.categoryId}
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
