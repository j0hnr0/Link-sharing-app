import Image from "next/image";

export default function Logo({ ...props }) {
  return (
    <Image
      src="/images/logo-devlinks-large.svg"
      width={182}
      height={40}
      alt="DevLinks Logo"
      {...props}
    />
  );
}
