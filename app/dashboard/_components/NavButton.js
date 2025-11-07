import clsx from "clsx";
import Link from "next/link";

export default function NavButton({ href, Icon, text, isActive }) {
  return (
    <Link
      href={href}
      className={clsx(
        "py-4 px-6 rounded-lg flex justify-center items-center gap-2 cursor-pointer",
        isActive ? "bg-custom-grey-100" : "bg-transparent"
      )}
    >
      <Icon
        className={clsx(
          isActive ? "text-custom-purple-600" : "text-custom-grey-500"
        )}
      />
      <span
        className={clsx(
          "max-custom-semism:hidden block instrument-sans font-semibold text-base",
          isActive ? "text-custom-purple-600" : "text-custom-grey-500"
        )}
      >
        {text}
      </span>
    </Link>
  );
}
