import { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";

const InitialForm = {
  amount: 0,
  description: "",
  date: new Date(),
};

const TransactionForm = ({ fetchTransations, editTransations }) => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    if (editTransations.amount !== undefined) setForm(editTransations);
  }, [editTransations]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleDate(newValue) {
    setForm({ ...form, date: newValue });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    editTransations.amount === undefined ? create() : update();
  }

  function reload(res) {
    if (res.ok) {
      setForm(InitialForm);
      fetchTransations();
    }
  }

  async function create() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transation`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    reload(res);
  }

  async function update() {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/transation/${editTransations._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.ok) {
      setForm(InitialForm);
      fetchTransations();
    }
    return res;
  }

  return (
    <div>
      <Card sx={{ minWidth: 275, marginTop: 10 }}>
        <CardContent>
          <Typography variant="h6">Add New Transation</Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              size="small"
              sx={{ marginRight: 5 }}
              id="outlined-basic"
              label="Amount"
              name="amount"
              type={"Number"}
              variant="outlined"
              value={form.amount}
              onChange={handleChange}
            />
            <TextField
              size="small"
              sx={{ marginRight: 5 }}
              id="outlined-basic"
              label="Description"
              name="description"
              variant="outlined"
              value={form.description}
              onChange={handleChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Transation Date"
                inputFormat="MM/DD/YYYY"
                name="date"
                value={form.date}
                onChange={handleDate}
                renderInput={(params) => (
                  <TextField size="small" sx={{ marginRight: 5 }} {...params} />
                )}
              />
            </LocalizationProvider>
            {editTransations.amount !== undefined && (
              <Button variant="secoundary" type="submit">
                Update
              </Button>
            )}
            {editTransations.amount === undefined && (
              <Button variant="contained" type="submit">
                Submit
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionForm;
