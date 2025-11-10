const PageProvier = (props: PageProviderProps) => {
  const { pageName, pageSubHeading, customButton } = props;

  return (
    <div className="pl-10 pr-10">
      <div className="flex flex-row pt-5 mb-10 mt-15 lg:mt-0">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-[35px] font-bold">{pageName}</h1>
          {!!pageSubHeading && (
            <p className="text-[19px] text-gray-500 font-medium">
              {pageSubHeading}
            </p>
          )}
        </div>
        {!!customButton && (
          <div className="w-1/2 flex justify-end items-center">
            {customButton()}
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default PageProvier;
