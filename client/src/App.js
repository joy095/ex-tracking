import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

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
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
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
            <tr>
              <td>4</td>
              <td>ghdx</td>
              <td>nasjkajkt6723</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
