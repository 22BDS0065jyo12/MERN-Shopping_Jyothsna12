import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // You can add subscription logic here
    alert("Subscribed!");
  };

  return (
    <div className="text-center py-12 bg-gray-50 rounded-xl px-4">
      <p className="text-2xl font-medium text-gray-800 mb-4">
        Subscribe now & get 20% off
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 mx-auto flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
