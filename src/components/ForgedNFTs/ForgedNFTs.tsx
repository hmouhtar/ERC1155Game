import { useState, useEffect, FormEvent, ChangeEvent, forwardRef } from "react";
import {
  useContractRead,
  useAccount,
  useContractEvent,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import styled from "styled-components";
import Thumbnail from "../Thumbnail";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SampleERC1155ABI from "../../abi/SampleERC1155.json";
import ForgeABI from "../../abi/Forge.json";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ethers } from "ethers";

type ForgedNFTsProps = {};
export default function ForgedNFTs(props: ForgedNFTsProps) {
  const [isSuccessNoticeOpen, setIsSuccessNoticeOpen] = useState(false);
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props: any,
    ref?: any
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [tokenToBurn, setTokenToBurn] = useState<number>();
  const tokenIds = [3, 4, 5, 6];
  const { address } = useAccount();
  const { data } = useContractRead({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: SampleERC1155ABI.abi,
    functionName: "balanceOfBatch",
    args: [Array(4).fill(address), tokenIds],
    watch: true,
  });
  const mintedTokens = data?.map((e, i) => {
    return {
      tokenId: tokenIds[i],
      amount: ethers.BigNumber.from(e).toNumber(),
      image: `https://ipfs.io/ipfs/QmWdd3FVkgYtw1nbQAa1HFA359STX9r2sNU6uo8kB6gdst/0${tokenIds[i]}.png`,
    };
  });

  const { config: initialBurnConfig, refetch: refetchBurnConfig } =
    usePrepareContractWrite({
      addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      contractInterface: SampleERC1155ABI.abi,
      functionName: "burn",
      enabled: false,
      args: [address, tokenToBurn, 1],
    });

  const [burnConfig, setBurnConfig] = useState(initialBurnConfig);

  const { data: txnData, write: burn, error } = useContractWrite(burnConfig);

  const { isLoading } = useWaitForTransaction({
    hash: txnData?.hash,
    onSuccess(data) {
      setIsSuccessNoticeOpen(true);
    },
  });

  useEffect(() => {
    if (tokenToBurn) {
      refetchBurnConfig().then((newBurnConfig) => {
        if (newBurnConfig.data) {
          setBurnConfig(newBurnConfig.data);
        }
      });
    }
  }, [tokenToBurn]);

  useEffect(() => {
    if (burn) {
      burn?.();
      setTokenToBurn(undefined);
    }
  }, [burnConfig]);

  return (
    <Box textAlign="center">
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
          NFT burned succesfully.
        </Alert>
      </Snackbar>
      <h1>Forged NFTs </h1>

      <Grid container>
        {mintedTokens?.map((tokenMetadata, i) => {
          if (tokenMetadata.amount > 0) {
            return (
              <Grid xs={4}>
                <Thumbnail imgUrl={tokenMetadata.image}></Thumbnail>
                <p>
                  Token {tokenMetadata.tokenId} ({tokenMetadata.amount})
                </p>
                <LoadingButton
                  onClick={() => setTokenToBurn(tokenMetadata.tokenId)}
                  fullWidth={true}
                  loading={
                    isLoading && burnConfig.args[1] == tokenMetadata.tokenId
                  }
                  variant="contained"
                >
                  Burn
                </LoadingButton>
              </Grid>
            );
          }
        })}
        <Grid xs={12}></Grid>
      </Grid>
    </Box>
  );
}
