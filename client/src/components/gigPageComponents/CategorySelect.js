import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect(theme) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="category-select-label" sx={{ color: "white" }}>
          Wybierz kategorię
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Brak</em>
          </MenuItem>
          <MenuItem value={"Kat 1"}>Kat 1</MenuItem>
          <MenuItem value={"Kat 2"}>Kat 2</MenuItem>
          <MenuItem value={"Kat 3"}>Kat 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
