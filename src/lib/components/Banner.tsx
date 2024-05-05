const Banner = () => {
  return (
    <section
      style={{
        background:
          'url("https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
      className="relative h-[600px] !bg-cover !bg-no-repeat"
    >
      <div className="m-auto max-w-7xl">
        <div className=" absolute top-64 flex w-[520px] flex-col gap-5">
          <div className="w-fit rounded-lg bg-[#FFFFFF26]  px-3 py-2 text-xs font-bold text-white">
            ADVENTURE
          </div>
          <div className="text-4xl font-bold text-white">
            Richird Norton photorealistic rendering as real photos
          </div>
          <div className=" flex items-center gap-3 text-xs font-normal text-[#E5E5E5]">
            <div className="text-xs font-normal">08.04.2024</div>
            <div className="h-[0.25px] w-8 bg-white" />
            <div className="text-xs font-normal">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
