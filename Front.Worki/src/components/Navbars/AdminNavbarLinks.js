// Chakra Icons
import { BellIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { Redirect, Route, Switch } from "react-router-dom";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import { IoIosLogOut } from "react-icons/io";
// Custom Icons
import { ProfileIcon, SettingsIcon, SupportIcon, PersonIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { ItemContentLogin } from "components/Menu/ItemContentLogin";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import IconBox from "components/Icons/IconBox";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import ChangeUrl from '../../variables/ChangeUrl';

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }

  const logOut = () => {
    localStorage.setItem('UserInfo', JSON.stringify({}));
    window.location.href = 'http://127.0.0.1:3000/#/auth/login';
  };

  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}
        _focus={{
          borderColor: { mainTeal },
        }}
        _active={{
          borderColor: { mainTeal },
        }}
      >
        <InputLeftElement
          children={
            <IconButton
              bg="inherit"
              borderRadius="inherit"
              _hover="none"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
            ></IconButton>
          }
        />
        <Input
          fontSize="xs"
          py="11px"
          color={mainText}
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />

      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" me="16px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>
          <PersonIcon
            cursor="pointer"
            ms={{ base: "0px", xl: "0px" }}
            // me="16px"
            ref={settingsRef}
            onClick={props.onOpen}
            color={navbarIcon}
            w="18px"
            h="18px"
          />
        </MenuButton>
        <MenuList p="0px 0px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" onClick={logOut}>
              <Flex flexDirection="row" justifyContent="space-between" w="100%">
                <Text fontSize="14px" mb="5px" color={notificationColor} mr="10px">
                  Cerrar Sesion
                </Text>
                <IconBox
                  as="box"
                  h={"30px"}
                  w={"30px"}
                  me="6px"
                // color={iconTeal}
                >
                  <IoIosLogOut h={"15px"} w={"15px"} size="small" />
                </IconBox>

                {/* <ItemContentLogin
                boldInfo="Cerrar Sesion"  
              /> */}
              </Flex>
            </MenuItem>
            {/* <MenuItem borderRadius="8px">
              <p>Cerrar Sesion</p>
            </MenuItem> */}
          </Flex>
        </MenuList>
      </Menu>


    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
