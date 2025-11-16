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
  return json.data;
}

export async function getCurrentExpenses() {
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

  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.expenses;
}

export async function getPastExpensess() {
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
    body: JSON.stringify({ query }),
    cache: "no-store" // avoids stale data
  });

  const json = await res.json();
  return json.data.expenses;
}

const CREATE_EXPENSE_MUTATION = `
  mutation CreateExpense($input: CreateExpense!) {
    createExpense(input: $input) {
      success
    }
  }
`;