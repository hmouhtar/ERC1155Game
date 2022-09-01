import * as React from "react";
import { useState, useEffect } from "react";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import SampleERC1155ABI from "../abi/SampleERC1155.json";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type MintableNFTsProps = {};
export default function MintableNFTs(props: MintableNFTsProps) {
  const [isSuccessNoticeOpen, setIsSuccessNoticeOpen] = useState(false);
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props: any,
    ref?: any
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [tokenId, setTokenId] = useState<number>();

  const [publicMintableTokenMetadata, setPublicMintableTokenMetadata] =
    useState([
      {
        tokenId: 0,
        image:
          "https://ipfs.io/ipfs/QmWdd3FVkgYtw1nbQAa1HFA359STX9r2sNU6uo8kB6gdst/00.png",
      },
      {
        tokenId: 1,
        image:
          "https://ipfs.io/ipfs/QmWdd3FVkgYtw1nbQAa1HFA359STX9r2sNU6uo8kB6gdst/01.png",
      },
      {
        tokenId: 2,
        image:
          "https://ipfs.io/ipfs/QmWdd3FVkgYtw1nbQAa1HFA359STX9r2sNU6uo8kB6gdst/02.png",
      },
    ]);

  const { config } = usePrepareContractWrite({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: SampleERC1155ABI.abi,
    functionName: "publicMint",
    args: [0],
  });

  const { data: txnData, write: mint } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: txnData?.hash,
    onSuccess(data) {
      setIsSuccessNoticeOpen(true);
    },
  });

  return (
    <Grid container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSuccessNoticeOpen}
        autoHideDuration={2000}
        onClose={() => setIsSuccessNoticeOpen(false)}
      >
        <Alert
          onClose={() => setIsSuccessNoticeOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          NFT minted succesfully.
        </Alert>
      </Snackbar>
      {publicMintableTokenMetadata.map((token, i) => (
        <Grid key={i} xs={4}>
          <Thumbnail imgUrl={token.image}></Thumbnail>
          <LoadingButton
            onClick={() => {
              setTokenId(token.tokenId);
              mint?.({ recklesslySetUnpreparedArgs: [token.tokenId] });
            }}
            fullWidth={true}
            loading={isLoading && tokenId == token.tokenId}
            variant="contained"
          >
            Mint
          </LoadingButton>
        </Grid>
      ))}
    </Grid>
  );
}
