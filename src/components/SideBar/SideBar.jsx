import {
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import style from "../SideBar/SideBar.module.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            row
            className={style.sideBar}
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel
              sx={{ marginLeft: 1 }}
              className={style.inpBar}
              value="пеший"
              control={<Radio className={style.radioInp} />}
              label="Пеший тур"
            />
            <FormControlLabel
              sx={{ marginLeft: 1 }}
              className={style.inpBar}
              value="конный"
              control={<Radio className={style.radioInp} />}
              label="Конный тур"
            />
            <FormControlLabel
              sx={{ marginLeft: 1 }}
              className={style.inpBar}
              value="вело"
              control={<Radio className={style.radioInp} />}
              label="Велозаброска"
            />
            <FormControlLabel
              sx={{ marginLeft: 1 }}
              className={style.inpBar}
              value="снег"
              control={<Radio className={style.radioInp} />}
              label="Горнолыжный"
            />
            <FormControlLabel
              className={style.inpBar}
              value="all"
              control={<Radio className={style.radioInp} />}
              label="Все туры"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
