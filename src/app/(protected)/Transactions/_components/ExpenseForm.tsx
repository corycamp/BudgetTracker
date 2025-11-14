import InputField from "@/components/ui/InputField";

const ExpenseForm = () => {
  return (
    <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
      <form onSubmit={() => window.alert("SUBMIT")}>
        {/* Amount and date selection */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
          <div className="flex-1 flex-col">
            <InputField
              id={"Amount"}
              title={"Amount"}
              placeholder={"0.00"}
              frontAdornment={"$"}
              showSelection
              options={["USD", "CAD", "EUR"]}
            />
          </div>
          <div className="flex-1 flex-col">
            <InputField id={"Date"} title={"Date"} placeholder={"mm/dd/yyyy"} />
          </div>
        </div>
        {/* Category */}
        <div className="flex flex-col w-full mt-2">
          <InputField
            id={"Category"}
            title={"Category"}
            placeholder={"Select a category"}
          />
        </div>
        {/* Merchant */}
        <div className="flex flex-col w-full mt-2">
          <InputField
            id={"Merchant"}
            title={"Merchant"}
            placeholder={"e.g., Grocery Store"}
          />
        </div>
        {/* Notes */}
        <div className="flex flex-col w-full mt-2 min-h-30">
          <InputField
            id={"Notes"}
            title={"Notes"}
            placeholder={"Optional notes about the expense"}
            customInputClass="min-h-20"
            inputType="textarea"
          />
        </div>
        {/* Add button */}
        <div className="flex md:items-start mt-5">
          <div className="w-full">
            <button
              className="shadow w-full lg:w-auto bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
