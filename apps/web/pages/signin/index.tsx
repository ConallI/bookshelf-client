import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { GoogleSignInButton, SignInForm } from "../../src/components/auth";
import type { SignInFormVariant } from "../../src/components/auth/SignInForm";
import { Loading } from "../../src/components/ui";
import { useAuth } from "../../src/hooks/useAuth";

const SignIn = () => {
  const { status } = useAuth();
  const formType: SignInFormVariant = "Sign in";
  const altType: SignInFormVariant = "Sign up";
  if (status && (status.loading || status.success)) return <Loading isPage />;
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      }}
      exit={{ opacity: 0, x: -20 }}
      className="flex h-4/5 w-full items-center justify-center py-10 md:h-full md:items-start"
    >
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-md bg-white py-10 shadow-md dark:bg-neutral-800 md:w-3/4 lg:w-3/5 xl:w-2/4">
        <h1 className="py-2 text-xl md:text-3xl lg:py-10 lg:text-6xl">
          {formType}
        </h1>
        <SignInForm type={formType} />
        <div className="flex justify-center">
          <GoogleSignInButton authType={formType} />
        </div>
        <p className="py-4 text-xs md:text-xl lg:py-10">
          {"Don't have an account? "}
          <Link
            className="rounded-sm px-1 underline decoration-bk-blue decoration-2 dark:decoration-bk-orange"
            href="/signup"
          >
            {altType}
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignIn;