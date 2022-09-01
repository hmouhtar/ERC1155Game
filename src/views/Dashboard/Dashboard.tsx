import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import MintableNFTs from "../../components/MintableNFTs";
import MintedNFTs from "../../components/MintedNFTs/MintedNFTs";
import ForgedNFTs from "../../components/ForgedNFTs/ForgedNFTs";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <Container sx={{ mt: 5, backgroundColor: "lightgray" }}>
    <Grid container spacing={4}>
      <Grid xs={12}>
        <MintableNFTs></MintableNFTs>
      </Grid>
      <Grid xs={12}>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <MintedNFTs></MintedNFTs>
          <ForgedNFTs></ForgedNFTs>
        </Stack>
      </Grid>
    </Grid>
  </Container>
);

export default Dashboard;
