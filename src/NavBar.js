import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Twitter from "./assets/social-media-icons/twitterlogo.png";
import Discord from "./assets/social-media-icons/discord-mark-white.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="10px">
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://twitter.com/treacherousNFT" target="_blank">
                    <Image src={Twitter} boxSize="30px" margin="0 15px" marginLeft="-260px"/>
                </Link>
                <Link href="https://discord.gg/treacherous" target="_blank">
                    <Image src={Discord} boxSize="30px" margin="0 15px" marginLeft="-560px"/>
                </Link>
            </Flex>

            <div> </div>
            <div> </div>
            <div> </div>


            {isConnected ? (
                <Box margin="0 20px" fontSize="20px">Connected</Box>
            ) : (
                <Button
                    backgroundColor="black"
                    borderRadius="5px"
                    boxShadow="0px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    fontSize="20px"
                    onClick={connectAccount}
                    >
                    Connect
                    </Button>
            )}
        </Flex>
    );
};

export default NavBar;