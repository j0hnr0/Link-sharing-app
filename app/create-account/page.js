import FormBackground from "@/_components/FormBackground";
import Link from "next/link";
import CreateForm from "./_components/CreateForm";

export default function CreateAccount() {
  return (
    <FormBackground>
      <div
        className="w-[476px] bg-white rounded-xl p-10
        max-custom-sm:bg-transparent max-custom-sm:w-full max-custom-sm:p-0"
      >
        <CreateForm />
        
        <div className="mt-6 text-center">
          <p className="instrument-sans font-normal text-base text-custom-grey-500">
            Already have an account?{" "}
            <br className="hidden max-custom-sm:block" />
            <span className="text-custom-purple-600">
              <Link href="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </FormBackground>
  );
}
