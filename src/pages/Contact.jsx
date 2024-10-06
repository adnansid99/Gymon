import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Handle form submission (e.g., send data to a backend API)
      console.log("Form data:", data);
      setMessageSent(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto py-12 max-w-xl mt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {messageSent ? (
        <div className="mb-6 text-green-500">Message sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-red-500">Please enter a valid email address</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-red-500">Message is required</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
