
const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Optional: Branding/Logo area */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          {/* Login or Signup forms will render here */}
        </div>
        
        {/* Footer links (Help, Privacy, etc) */}
        <p className="mt-6 text-center text-xs text-gray-500">
          &copy; 2024 Your App Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
