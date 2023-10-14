"use client";

import useConversation from "@/app/hooks/useConversation";
import { data } from "autoprefixer";
import axios from "axios";
import { set } from "date-fns";
import { tr } from "date-fns/locale";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post(`/api/messages`, {
      ...data,
      conversationId,
    });
  };
  return (
    <div className="py-4 px-4 border-zinc-100 border-t flex items-center gap-2 lg:gap-4 w-full">
      <HiPhoto size={30} className="text-white hover:text-red-500" />
      <form
        className="flex items-center gap-2 lg:gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Post your letter"
        />
        <button
          className="rounded-full p-2 cursor-pointer bg-red-500 hover:bg-red-600 transition "
          type="submit"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
