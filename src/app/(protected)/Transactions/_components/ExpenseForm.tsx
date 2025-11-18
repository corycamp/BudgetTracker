import { createExpense } from "@/app/api/graphql/resolvers";
import { CATEGORYLIST } from "@/components/common/constants";
import Dropdown from "@/components/ui/Dropdown";
import InputField from "@/components/ui/InputField";
import { addExpenses } from "@/redux/expenseSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExpenseForm = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formValues, setFormValues] = useState({
    Amount: "",
    Date: "",
    Merchant: "",
    Notes: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expenseObject = {
      amount: Number(formValues.Amount),
      category: selectedCategory,
      merchant: formValues.Merchant,
      email: `${user.email}`,
      createdAt: Number(new Date(formValues.Date).getTime()),
    };
    const response = await createExpense(expenseObject);
    if (!!response) {
      dispatch(addExpenses(expenseObject));
    }
  };

  const isDisabled =
    !formValues.Amount ||
    !formValues.Date ||
    !formValues.Merchant ||
    !selectedCategory.length;
  return (
    <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
      <form onSubmit={handleSubmit}>
        {/* Amount and date selection */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
          <div className="flex-1 flex-col">
            <InputField
              id={"Amount"}
              title={"Amount"}
              placeholder={"0.00"}
              frontAdornment={"$"}
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="flex-1 flex-col">
            <InputField
              id={"Date"}
              title={"Date"}
              placeholder={"mm/dd/yyyy"}
              type={"date"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-2">
          <label className="block text-sm/6 font-medium text-white mb-2">
            Category
          </label>
          <Dropdown
            options={CATEGORYLIST}
            onSelect={(value: string) => setSelectedCategory(value)}
          />
        </div>
        {/* Merchant */}
        <div className="flex flex-col w-full mt-2">
          <InputField
            id={"Merchant"}
            title={"Merchant"}
            placeholder={"e.g., Grocery Store"}
            onChange={handleChange}
          />
        </div>
        {/* Notes */}
        {/* Future update */}
        {/* <div className="flex flex-col w-full mt-2 min-h-30">
          <InputField
            id={"Notes"}
            title={"Notes"}
            placeholder={"Optional notes about the expense"}
            customInputClass="min-h-20"
            inputType="textarea"
          />
        </div> */}
        {/* Add button */}
        <div className="flex md:items-start mt-5">
          <div className="w-full">
            <button
              className={`shadow w-full lg:w-auto bg-green-700 hover:bg-green-600 disabled:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer`}
              type="submit"
              disabled={isDisabled}
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
