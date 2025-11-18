import { CreateBudget, CreateExpense, DeleteBudget, DeleteExpense, UpdateBudget } from "@/lib/types";

const CREATE_EXPENSE_MUTATION = `
  mutation CreateExpense($input: CreateExpense!) {
    createExpense(input: $input) {
      success
    }
  }
`;

const CREATE_BUDGET_MUTATION = `
  mutation CreateBudget($input: CreateBudget!){
    createBudget(input: $input){
      success
    }
  }
`;

const DELETE_BUDGET_MUTATION = `
  mutation DeleteBudget($input: DeleteBudget!){
    deleteBudget(input: $input){
      success
    }
  }
`;

const UPDATE_BUDGET_MUTATION = `
  mutation UpdateBudget($input: UpdateBudget!){
    updateBudget(input: $input){
      success
    }
  }
`;

const DELETE_EXPENSE_MUTATION = `
  mutation DeleteExpense($input: DeleteExpense!) {
    deleteExpense(input: $input) {
      success
    }
  }
`;

export async function getAllBudgets(email:string){
  const query = `
    query GetAllBudgets($email: String!) {
      getAllBudgets(email: $email) {
        category
        limit
        createdAt
      }
    } 
`;

const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:query, variables:{
        email:email
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.getAllBudgets;
}

export async function deleteBudget(input:DeleteBudget){

const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:DELETE_BUDGET_MUTATION, variables:{
        input:input
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.deleteBudget.success;
}

export async function updateBudget(input:UpdateBudget){
const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:UPDATE_BUDGET_MUTATION, variables:{
        input:input
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.updateBudget.success;
}

export async function createBudget(input:CreateBudget){
const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:CREATE_BUDGET_MUTATION, variables:{
        input:input
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.createBudget.success;
}

export async function getAllExpenses(email:string) {
  const query = `
    query GetAllExpenses($email:String!) {
        getAllExpenses(email:$email) {
            amount
            createdAt
            category
            merchant
            notes
        }
    }
  `;

  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:query, variables:{
        email:email
    } }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.getAllExpenses;
}

export async function getCurrentExpenses(email:string) {
  const query = `
    query GetCurrentExpenses($email: String!) {
        getCurrentExpenses(email: $email) {
            amount
            date
            createdAt
            category
            merchant
            notes
        }
    }
  `;
  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:query, variables:{
        email:email
    } }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.getCurrentExpenses;
}

export async function getPastExpenses(email:string) {
  const query = `
    query GetPastExpenses($email: String!) {
        getPastExpenses(email: $email) {
            amount
            month
        }
    }
  `;

  const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:query, variables:{
        email:email
    } }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.getPastExpenses;
}

export async function createExpense(input:CreateExpense){
   const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:CREATE_EXPENSE_MUTATION, variables:{
        input:input
    } }),
    cache: "no-store" // avoids stale data
  });
   const json = await res.json();
  return json.data.createExpense.success;
}

export async function deleteExpense(input:DeleteExpense){
const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:DELETE_EXPENSE_MUTATION, variables:{
        input:input
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.deleteExpense.success;
}
