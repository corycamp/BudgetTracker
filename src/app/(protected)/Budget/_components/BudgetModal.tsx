"use client";

import { CATEGORYLIST } from "@/components/common/constants";
import { budgetOption } from "@/components/common/interfaces";
import Dropdown from "@/components/ui/Dropdown";
import InputField from "@/components/ui/InputField";
import Modal from "@/components/ui/Modal";
import React, { useEffect } from "react";

const BudgetModal = ({
  isOpen = true,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: budgetOption;
}) => {
  const createBudgetForm = () => {
    return (
      <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
        <form onSubmit={() => window.alert("SUBMIT")}>
          <div className="flex-1 flex-col">
            <InputField
              id={"Limit"}
              title={"Limit"}
              placeholder={"0.00"}
              frontAdornment={"$"}
            />
          </div>
          {/* Category */}
          <div className="flex flex-col w-full mt-2">
            <label className="block text-sm/6 font-medium text-white mb-2">
              Category
            </label>
            <Dropdown options={CATEGORYLIST} onSelect={() => {}} />
          </div>
          {/* Add button */}
          <div className="flex md:items-start mt-5">
            <div className="w-full">
              <button
                className="shadow w-full lg:w-auto bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
                type="submit"
              >
                Add Budget
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const updateBudgetForm = () => {
    return (
      <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
        <form onSubmit={() => window.alert("SUBMIT")}>
          <label className="text-gray-300 text-[20px]">
            Enter updated limit for your budget
          </label>
          <div className="flex-1 flex-col">
            <InputField
              id={"Limit"}
              title={"Limit"}
              placeholder={"0.00"}
              frontAdornment={"$"}
            />
          </div>
          {/* Add button */}
          <div className="flex md:items-start mt-5">
            <div className="w-full">
              <button
                className="shadow w-full lg:w-auto bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
                type="submit"
              >
                Update Budget
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const confirmationModal = () => {
    return (
      <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
        <form onSubmit={() => window.alert("SUBMIT")}>
          <label>
            <h1 className="text-white text-[20px]">
              Are you sure, you want to delete?<br></br>
              Click outside modal to exit.
            </h1>
          </label>
          {/* Add button */}
          <div className="flex md:items-start mt-5">
            <div className="w-full">
              <button
                className="shadow w-full lg:w-auto bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const getDisplayForm = () => {
    switch (type) {
      case "createBudget":
        return createBudgetForm();
      case "editBudget":
        return updateBudgetForm();
      case "confirmBudget":
        return confirmationModal();
      default:
        return createBudgetForm();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>{getDisplayForm()}</>
    </Modal>
  );
};

export default BudgetModal;
