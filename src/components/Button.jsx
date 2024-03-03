const Button = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block w-full max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
    </a>
  );
};

export default Button;
