"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { use, useMemo } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <div className="bg-zinc-200 w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm text-black">
      <div className="flex gap-3 items-center">
        <Link
          className="lg:hidden block text-red-500 hover:text-red-600 transition cursor-pointer"
          href={"/conversations"}
        >
          <HiChevronLeft size={32} />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-black">{statusText}</div>
        </div>
      </div>
      <HiEllipsisHorizontal
        className="text-black hover:text-red-500 transition cursor-pointer"
        size={32}
        onclick={() => {}}
      />
    </div>
  );
};

export default Header;