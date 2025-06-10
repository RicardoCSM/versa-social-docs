import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        priority
        src="/images/contrast-logo.svg"
        alt="Logo"
        className="hidden dark:block w-auto h-auto"
        width={220}
        height={40}
      />
      <Image
        priority
        src="/images/logo.svg"
        alt="Logo"
        className="dark:hidden w-auto h-auto"
        width={220}
        height={40}
      />
    </>
  );
};

export default Logo;
