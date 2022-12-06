import { useEffect, useState } from "react";
import ButtonAppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";

const InitialForm = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [form, setForm] = useState({
    InitialForm,
  });

  const [transations, setTransations] = useState([]);

  useEffect(() => {
    fetchTransations();
  }, []);

  async function fetchTransations() {
    const res = await fetch("http://localhost:4000/transation");
    const { data } = await res.json();
    setTransations(data);
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transation", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      setForm(InitialForm);
      fetchTransations();
    }
  }

  return (
    <div>
      <ButtonAppBar />
      <TransactionForm />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transation amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Enter transation details"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>

      <br />
      <section>
        <table>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <tbody>
            {transations.map((trx) => (
              <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
