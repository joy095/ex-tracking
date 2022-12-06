import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TransactionForm = () => {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card sx={{ minWidth: 275, marginTop: 10 }}>
        <CardContent>
          <Typography variant="h6">Add New Transation</Typography>

          <from>
            <TextField
              size="small"
              sx={{ marginRight: 5 }}
              id="outlined-basic"
              label="Amount"
              variant="outlined"
            />
            <TextField
              size="small"
              sx={{ marginRight: 5 }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Transation Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField size="small" sx={{ marginRight: 5 }} {...params} />
                )}
              />
            </LocalizationProvider>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </from>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionForm;
