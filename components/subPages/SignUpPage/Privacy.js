import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <div className="mt-8">
        <p className="text-gray-500 text-sm text-center underline">
          Already have an account,
          <Link href="/signin" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
      <div className="mx-auto mt-8">
        <p className="mt-6 text-xs text-gray-600 text-center">
          Term of use. Privacy policy
        </p>
      </div>
    </>
  );
};

export default Privacy;
