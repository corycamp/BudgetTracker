import { CreateExpense } from "@/lib/types";

const CREATE_EXPENSE_MUTATION = `
  mutation CreateExpense($input: CreateExpense!) {
    createExpense(input: $input) {
      success
    }
  }
`;
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
