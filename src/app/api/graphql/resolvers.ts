import { CreateExpense } from "@/lib/types";

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
  mutation CreateBudget($input: DeleteBudget!){
    createBudget(input: $input){
      success
    }
  }
`;

const UPDATE_BUDGET_MUTATION = `
  mutation CreateBudget($input: UpdateBudget!){
    createBudget(input: $input){
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

export async function deleteBudget(email:string, category:string){

const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:DELETE_BUDGET_MUTATION, variables:{
        email:email,
        category:category
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.deleteBudget;
}

export async function updateBudget(email:string, newLimit:number, category:string){
const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:UPDATE_BUDGET_MUTATION, variables:{
        email:email,
        newLimit:newLimit,
        category:category
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.updateBudget;
}

export async function createBudget(email:string, category:string, limit:number){
const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:CREATE_BUDGET_MUTATION, variables:{
        email:email,
        category:category,
        limit:limit
      } 
    }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.createBudget;
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
            createdAt
            category
            merchant
            notes
        }
    }
  `;
  console.log(process.env.GRAPHQL_URL)
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

export async function getPastExpensess(email:string) {
  const query = `
    query GetPastExpenses($email: String!) {
        getPastExpenses(email: $email) {
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
  return json.data.getPastExpenses;
}

export async function createExpense(input:CreateExpense){
  console.log(input)
  console.log(process.env.NEXT_PUBLIC_URL)
   const res = await fetch(process.env.NEXT_PUBLIC_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query:CREATE_EXPENSE_MUTATION, variables:{
        input:input
    } }),
    cache: "no-store" // avoids stale data
  });
   const json = await res.json();
   console.log(json.data)
  return json.data.createExpense.success;
}
