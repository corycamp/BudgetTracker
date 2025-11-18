"use client";

import {
  createBudget,
  deleteBudget,
  updateBudget,
} from "@/app/api/graphql/resolvers";
import { CATEGORYLIST } from "@/components/common/constants";
import { budgetOption } from "@/components/common/interfaces";
import Dropdown from "@/components/ui/Dropdown";
import InputField from "@/components/ui/InputField";
import Modal from "@/components/ui/Modal";
import {
  addBudget,
  findAndUpdateBudget,
  removeBudget,
} from "@/redux/budgetSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";

const BudgetModal = ({
  isOpen = true,
  onClose,
  type,
  item,
  email,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: budgetOption;
  item?: string;
  email: string;
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formValues, setFormValues] = useState({
    Limit: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formType: string
  ) => {
    setLoading(true);
    e.preventDefault();
    let response = undefined;
    if (formType === "addBudget") {
      response = await createBudget({
        email: email,
        category: selectedCategory,
        limit: Number(formValues.Limit),
      });
      if (!!response) {
        dispatch(
          addBudget({
            category: selectedCategory,
            limit: Number(formValues.Limit),
            createdAt: new Date().toUTCString(),
          })
        );
      }
    } else if (formType === "editBudget") {
      response = await updateBudget({
        email: email,
        newLimit: Number(formValues.Limit),
        category: item ?? "",
      });
      if (!!response) {
        dispatch(
          findAndUpdateBudget({
            limit: Number(formValues.Limit),
            category: item ?? "",
            createdAt: new Date().toUTCString(),
          })
        );
      }
    } else if (formType === "deleteBudget") {
      response = await deleteBudget({ email: email, category: item ?? "" });
      if (!!response) {
        dispatch(
          removeBudget({
            category: item ?? "",
          })
        );
      }
    }
    setTimeout(() => {
      onClose();
      setLoading(false);
    }, 1000);
  };
  const createBudgetForm = () => {
    return (
      <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
        <form onSubmit={(e) => handleSubmit(e, "addBudget")}>
          <div className="flex-1 flex-col">
            <InputField
              id={"Limit"}
              title={"Limit"}
              placeholder={"0.00"}
              frontAdornment={"$"}
              onChange={handleChange}
            />
          </div>
          {/* Category */}
          <div className="flex flex-col w-full mt-2">
            <label className="block text-sm/6 font-medium text-white mb-2">
              Category
            </label>
            <Dropdown
              options={CATEGORYLIST}
              onSelect={(value: string) => setSelectedCategory(value)}
            />
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
        <form onSubmit={(e) => handleSubmit(e, "editBudget")}>
          <label className="text-gray-300 text-[20px]">
            Enter updated limit for your budget
          </label>
          <div className="flex-1 flex-col">
            <InputField
              id={"Limit"}
              title={"Limit"}
              placeholder={"0.00"}
              frontAdornment={"$"}
              onChange={handleChange}
            />
          </div>
          {/* Add button */}
          {item && (
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
          )}
        </form>
      </div>
    );
  };

  const confirmationModal = () => {
    return (
      <div className="flex flex-col min-w-1/4 mb-10 lg:mb-0">
        <form onSubmit={(e) => handleSubmit(e, "deleteBudget")}>
          <label>
            <h1 className="text-white text-[20px]">
              Are you sure, you want to delete?<br></br>
              Click outside modal to exit.
            </h1>
          </label>
          {/* Add button */}
          {item && (
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
          )}
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
      <>
        {loading ? (
          <div className="flex flex-row justify-center">
            <BeatLoader
              className="gap-2"
              color="white"
              loading={loading}
              size={15}
            />
          </div>
        ) : (
          getDisplayForm()
        )}
      </>
    </Modal>
  );
};

export default BudgetModal;
