"use  client";
import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-black hover:text-black hover:bg-red-500`,
        active && "bg-red-500 text-black"
      )}
      onClick={onClick}
      href={href}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
