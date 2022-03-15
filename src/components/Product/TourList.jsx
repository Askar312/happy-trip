import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "./TourCard";

import SideBar from "../SideBar/SideBar";
import { useSearchParams } from "react-router-dom";

const TourList = ({ products }) => {
  const { getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <div>
        <SideBar />
      </div>
      <TextField
        color="success"
        label="Живой поиск туров"
        variant="filled"
        focused
        sx={{ backgroundColor: "#cfd8dc", width: "99vw" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ backgroundColor: "#b0bec5", display: "flex" }}>
        <div className="blog-left">
          <Grid container>
            {products ? (
              products.map((item) => (
                <Grid item>
                  <MediaCard item={item} key={item.id} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default TourList;
