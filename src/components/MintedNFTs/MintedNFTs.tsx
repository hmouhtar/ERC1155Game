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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ethers } from "ethers";
import { LoadingButton } from "@mui/lab";

type MintedNFTsProps = {};
export default function MintedNFTs(props: MintedNFTsProps) {
  const [isSuccessNoticeOpen, setIsSuccessNoticeOpen] = useState(false);
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props: any,
    ref?: any
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [checkboxStatus, setCheckboxStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const tokensToForge = Object.keys(checkboxStatus).filter(
    (key) => checkboxStatus[key]
  );

  const { address } = useAccount();

  const { data } = useContractRead({
    addressOrName: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    contractInterface: SampleERC1155ABI.abi,
    functionName: "balanceOfBatch",
    args: [Array(3).fill(address), [0, 1, 2]],
    watch: true,
  });

  const { config: initialForgeConfig, refetch: forgeConfigRefetch } =
    usePrepareContractWrite({
      addressOrName: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      contractInterface: ForgeABI.abi,
      functionName: "forge",
      enabled: false,
      args: [tokensToForge],
    });

  const [forgeConfig, setForgeConfig] = useState(initialForgeConfig);

  const { data: txnData, write: forge, error } = useContractWrite(forgeConfig);
  const { isLoading } = useWaitForTransaction({
    hash: txnData?.hash,
    onSuccess(data) {
      setIsSuccessNoticeOpen(true);
    },
  });
  const mintedTokens = data?.map((e, i) => {
    return {
      tokenId: i,
      amount: ethers.BigNumber.from(e).toNumber(),
      image: `https://ipfs.io/ipfs/QmWdd3FVkgYtw1nbQAa1HFA359STX9r2sNU6uo8kB6gdst/0${i}.png`,
    };
  });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    forgeConfigRefetch().then((newForgeConfig) => {
      if (newForgeConfig.data) {
        setForgeConfig(newForgeConfig.data);
      }
    });
  };

  useEffect(() => {
    if (forge) {
      forge?.();
    }
  }, [forgeConfig]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxStatus({
      ...checkboxStatus,
      [name]: checked,
    });
  };

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
          NFT forged succesfully.
        </Alert>
      </Snackbar>
      <h1>Your NFTs </h1>

      <form onSubmit={handleSubmit}>
        <Grid container>
          {mintedTokens?.map((tokenMetadata, i) => {
            if (tokenMetadata.amount > 0) {
              return (
                <Grid xs={4}>
                  <Thumbnail imgUrl={tokenMetadata.image}></Thumbnail>
                  <p>
                    Token {tokenMetadata.tokenId} ({tokenMetadata.amount})
                  </p>

                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        name={`${tokenMetadata.tokenId}`}
                      />
                    }
                    label="Forge"
                  />
                </Grid>
              );
            }
          })}
          <Grid xs={12}>
            <LoadingButton
              type="submit"
              fullWidth={true}
              loading={isLoading}
              variant="contained"
            >
              Forge
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
