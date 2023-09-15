const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-8 h-full flex justify-center items-center bg-slate-900 text-white">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold ">
          {" "}
          Select or start a new conversation!
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
