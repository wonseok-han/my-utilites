const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="font-sans text-4xl font-extrabold text-gray-900">
          404 - Page Not Found
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 space-y-4 text-gray-900">
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
