import { PageProviderProps } from "../common/interfaces";

const PageProvier = (props: PageProviderProps) => {
  const { pageName, pageSubHeading, customButton } = props;

  return (
    <div className="pl-10 pr-10">
      <div className="flex flex-col md:flex-row pt-5 mb-10 mt-15 lg:mt-0">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-[35px] font-bold text-white">{pageName}</h1>
          {!!pageSubHeading && (
            <p className="text-[19px] text-white font-medium">
              {pageSubHeading}
            </p>
          )}
        </div>
        {!!customButton && (
          <div className="w-40 md:w-1/2 flex justify-start md:justify-end items-center mt-4 lg:mt-0">
            {customButton()}
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default PageProvier;
