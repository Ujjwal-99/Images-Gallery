const Welcome = () => {
  return (
    <div className="w-3/4 p-8 mb-8 border border-gray-200 rounded-lg ms-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 md:p-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Images Gallery
      </h1>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400">
        This is a simple application that retrieves photos using Unsplash api.
        In order to start enter any search term in the input field.
      </p>
      <a
        className="px-4 py-6 text-xl text-white bg-blue-600 rounded-lg focus:ring-blue-300 dark:focus:ring-blue-900hover:bg-blue-800 focus:ring-4"
        // variant="primary"
        href="https://unsplash.com"
        target="_blank"
      >
        Learn more
      </a>
    </div>
  );
};

export default Welcome;
