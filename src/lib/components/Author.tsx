const Author = () => {
  return (
    <div className="flex items-center gap-5">
      <img
        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="h-12 w-12 rounded-full "
      />

      <div className="flex flex-col">
        <div className="text-xs font-bold leading-5 text-darkGray">
          By Jennifer Lawrence
        </div>
        <div className="text-xs font-normal leading-5 text-lightGray">
          Thinker & Designer
        </div>
      </div>
    </div>
  );
};

export default Author;
