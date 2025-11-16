export async function getAllExpenses() {
  const query = `
    query GetAllExpenses {
        getAllExpenses {
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
