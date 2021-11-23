import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ChangeUrl from '../../variables/ChangeUrl';

// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Icon,
    Image,
    Link,
    Switch,
    Text,
    useColorModeValue,
    FormControl,
    FormLabel,
    HStack,
    Input,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { MdCheckCircle } from "react-icons/md";
import { FaEllipsisV, FaUserEdit } from "react-icons/fa";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import { updateYield } from "typescript";

function Profile(props) {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    const bgProfile = useColorModeValue(
        "hsla(0,0%,100%,.8)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
    );
    const borderProfileColor = useColorModeValue(
        "white",
        "rgba(255, 255, 255, 0.31)"
    );
    const emailColor = useColorModeValue("gray.400", "gray.300");
    const bgColor = useColorModeValue("white", "gray.700");

    const [userSession, setUserSession] = useState(false);
    const [user, setUser] = useState();
    const infoUser = JSON.parse(localStorage.getItem('UserInfo'))

    useEffect(() => {
        console.log('infoUser ' + JSON.stringify(infoUser));
        if (infoUser == undefined || infoUser.state != true) {
            localStorage.setItem('UserInfo', JSON.stringify({}));
            ChangeUrl(props, '/auth/login')
        } else {
            setUserSession(true)
        }
    }, []);

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_GATEWAY_WORKI}/user/${infoUser.id_user}`
        ).then((response) => {
            const result = response.data.body.user;
            console.log('RESULT: ' + JSON.stringify(result));
            setUser(result);
        });
    }, [userSession==true]);

    const handleUpdateUser = () => {
        ChangeUrl(props, '/admin/update_profile')
    };

    return (
        <React.Fragment>
            {user == undefined ? '': (

            <Flex direction="column">
                <Box
                    mb={{ sm: "22px", md: "22px", xl: "22px" }}
                    borderRadius="15px"
                    px="0px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    align="center"
                >
                    <Box
                        bgImage={ProfileBgImage}
                        w="100%"
                        h="100px"
                        borderRadius="25px"
                        bgPosition="50%"
                        bgRepeat="no-repeat"
                        position="relative"
                        display="flex"
                        justifyContent="center"
                    >
                    </Box>
                </Box>
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
                    <GridItem colSpan={2}>
                        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
                            <CardHeader p="12px 5px" mb="12px">
                                <Flex direction="column" w="100%">
                                    <Flex justifyContent="space-between" mb="21px">
                                        <Text fontSize="lg" color={textColor} fontWeight="bold">
                                            Perfil
                                        </Text>
                                        <Button p="0px" bg="transparent" onClick={handleUpdateUser}>
                                            <Icon as={FaUserEdit} color="gray.400" cursor="pointer" style={{fontSize: '25px'}} />
                                        </Button>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody px="5px">
                                <Flex direction="column" w="100%" >
                                    <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                                        Datos personales / Actualizar datos
                                    </Text>

                                    <Flex
                                        direction={{sm: "column", xl: "row" }}
                                        w="100%"
                                        background="transparent"
                                        borderRadius="15px"
                                        bg={bgColor}
                                        justifyContent="space-between"
                                    >
                                        <Flex align="center" mb="18px" w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Compañia:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.company}
                                            </Text>
                                        </Flex>

                                        <Flex align="center" mb="18px" w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Nit compañia:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.nit}
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    <Flex
                                        direction={{sm: "column", xl: "row" }}
                                        w="100%"
                                        background="transparent"
                                        borderRadius="15px"
                                        bg={bgColor}
                                        justifyContent="space-between"
                                    >
                                        <Flex align="center" mb="18px"w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Nombre:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.nameuser}
                                            </Text>
                                        </Flex>
                                        <Flex align="center" mb="18px" w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Apellido:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.lastname}
                                            </Text>
                                        </Flex>
                                    </Flex>


                                    <Flex
                                        direction={{sm: "column", xl: "row" }}
                                        w="100%"
                                        background="transparent"
                                        borderRadius="15px"
                                        bg={bgColor}
                                        justifyContent="space-between"
                                    >
                                        <Flex align="center" mb="18px" w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Email:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.email}
                                            </Text>
                                        </Flex>

                                        <Flex align="center" mb="18px" w={{sm: "100%", xl: "48%" }}>
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                me="10px"
                                            >
                                                Cargo:{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                {user.position == null ? '' : user.position}
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    <Text
                                        fontSize="sm"
                                        color={textColor}
                                        fontWeight="bold"
                                        me="10px"
                                        mb="20px"
                                    >
                                        Hobbies:{" "}
                                    </Text>
                                    <List spacing={3} mb="15px">
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color="#4FD1C5" />
                                            Dibujar
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color="#4FD1C5" />
                                            Leer
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color="#4FD1C5" />
                                            Ver peliculas
                                        </ListItem>
                                    </List>

                                    <Flex align="center" mb="18px" w="100%">
                                        <Text
                                            fontSize="sm"
                                            color={textColor}
                                            fontWeight="bold"
                                            me="10px"
                                        >
                                            Gustos profesionales:{" "}
                                        </Text>
                                        <Text fontSize="sm" color="gray.500" fontWeight="400">
                                            {user.professional_tastes == null ? '' : user.professional_tastes}
                                        </Text>
                                    </Flex>

                                </Flex>

                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Card p="16px">
                            <CardHeader p="12px 5px" mb="12px">
                                <Flex direction="column" w="100%">
                                    <Flex justifyContent="center">
                                        <Avatar
                                            src={avatar2}
                                            w="120px"
                                            h="120px"
                                            borderRadius="full"
                                            me="10px"
                                        />
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody px="5px">
                                <Flex direction="column" w="100%">
                                    <Flex justifyContent="center" mb="21px" align="center" direction="column">
                                        <Text fontSize="sm" color={textColor} fontWeight="bold">
                                            {user.nameuser}{" "}
                                        </Text>
                                        <Text fontSize="xs" color="gray.500" fontWeight="400">
                                            {user.email}
                                        </Text>
                                    </Flex>
                                    <Flex justifyContent="space-between" mb="21px">
                                        <Flex align="center" alignItems="flex-start">
                                            <Flex direction="column">
                                                <Text fontSize="sm" color="gray.500" fontWeight="bold" mb="10px">
                                                    Estado{" "}
                                                </Text>
                                                <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                    {user.state}{" "}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </GridItem>
                </Grid>
            </Flex >
            )}
        </React.Fragment>
    );
}

export default Profile;
