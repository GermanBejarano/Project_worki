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
    Select,
    Textarea,
    Checkbox,
    CheckboxGroup
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function UpdateProfile() {
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

    const [position, setPosition] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [positionValue, setPositionValue] = useState('');
    const [professional, setProfessional] = useState('');
    const [state, setState] = useState('');
    const [status, setStatus] = useState('');
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
            setName(result.nameuser);
            setLastName(result.lastname);
            setPositionValue(result.id_position);
            setProfessional(result.professional_tastes);
            setState(result.state);
            setStatus(result.status);

        });
    }, [userSession == true]);

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_GATEWAY_WORKI}/position`
        ).then((response) => {
            const result = response.data.body;
            console.log('RESULT: ' + JSON.stringify(result));
            let arreglo = [];
            result.map((dato) => (
                arreglo.push({ id: dato.id_position, name: dato.name })
            ));
            setPosition(arreglo);
        });

        axios.get(
            `${process.env.REACT_APP_GATEWAY_WORKI}/hobbie`
        ).then((response) => {
            const result = response.data.body;
            console.log('RESULT: ' + JSON.stringify(result));
            let arreglo = [];
            result.map((dato) => (
                arreglo.push({ id: dato.id_hobbie, name: dato.name })
            ));
            setHobbies(arreglo);
        });
    }, []);

    const handlePosition = (params) => {
        setPositionValue(params.target.value);
        console.log('PO: ' + params.target.value);
        // formik.handleChange(params);
    };

    const handleHobbies = (params) => {
        setPosition(params.target.value);
        // formik.handleChange(params);
    };

    const handleName = (params) => {
        setName(params.target.value);
        // formik.handleChange(params);
    };

    const handleLastName = (params) => {
        setLastName(params.target.value);
        // formik.handleChange(params);
    };

    const handleProfessional = (params) => {
        setProfessional(params.target.value);
        console.log('PRO: ' + params.target.value);
        // formik.handleChange(params);
    };

    const handleState = (params) => {
        setState(params.target.value);
        // formik.handleChange(params);
    };

    const handleStatus = (params) => {
        setStatus(!status);
        // formik.handleChange(params);
    };

    console.log('status: ' + status);

    const onSubmit = async (values) => {
        try {
            // console.log('email: ' + email);
            // console.log('pass: ' + pass);
            // console.log('company: ' + company);

            // const serviceResult = await axios.post(`${process.env.REACT_APP_GATEWAY_DIRECTORY}/users`,
            //     {
            //         user: email,
            //         pass: pass,
            //         nit: company,
            //     });

            // const response = serviceResult.data.body;

        } catch (error) {
            console.log(error.message);
        }
    }


    const onSubmitStatus = async (values) => {
        try {
            // console.log('email: ' + email);
            // console.log('pass: ' + pass);
            // console.log('company: ' + company);

            // const serviceResult = await axios.post(`${process.env.REACT_APP_GATEWAY_DIRECTORY}/users`,
            //     {
            //         user: email,
            //         pass: pass,
            //         nit: company,
            //     });

            // const response = serviceResult.data.body;

        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <React.Fragment>
            {user == undefined ? '' : (
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
                                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                                        Perfil
                                    </Text>
                                </CardHeader>
                                <CardBody px="5px">
                                    <Flex direction="column" w="100%" >
                                        <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                                            Ingresa o actualiza tus datos personales
                                        </Text>
                                        <form onSubmit={() => { onSubmit() }}>
                                            <FormControl>
                                                <div>
                                                    <Flex
                                                        direction="row"
                                                        w="100%"
                                                        background="transparent"
                                                        borderRadius="15px"
                                                        bg={bgColor}
                                                        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                                                        justifyContent="space-between"
                                                    >
                                                        <div style={{ width: '47%' }}>
                                                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                                Nombre
                                                            </FormLabel>
                                                            <Input
                                                                fontSize="sm"
                                                                ms="4px"
                                                                borderRadius="15px"
                                                                type="text"
                                                                placeholder="Tu nombre completo"
                                                                mb="24px"
                                                                size="lg"
                                                                value={name}
                                                                onChange={handleName}
                                                            />
                                                        </div>
                                                        <div style={{ width: '47%' }}>
                                                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                                Apellido
                                                            </FormLabel>
                                                            <Input
                                                                fontSize="sm"
                                                                ms="4px"
                                                                borderRadius="15px"
                                                                type="email"
                                                                placeholder="Tu apellido completp"
                                                                mb="24px"
                                                                size="lg"
                                                                value={lastname}
                                                                onChange={handleLastName}
                                                            />
                                                        </div>
                                                    </Flex>
                                                </div>

                                                <div>
                                                    <Flex
                                                        direction="row"
                                                        w="100%"
                                                        background="transparent"
                                                        borderRadius="15px"
                                                        bg={bgColor}
                                                        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                                                        justifyContent="space-between"
                                                    >
                                                        <div style={{ width: '47%' }}>
                                                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                                Email
                                                            </FormLabel>
                                                            <Input
                                                                fontSize="sm"
                                                                ms="4px"
                                                                borderRadius="15px"
                                                                type="email"
                                                                placeholder="Tu email"
                                                                mb="24px"
                                                                size="lg"
                                                                value={user.email}
                                                                isDisabled
                                                            />
                                                        </div>
                                                        <div style={{ width: '47%' }}>
                                                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                                Cargo
                                                            </FormLabel>
                                                            <FormControl id="country">
                                                                <Select
                                                                    borderRadius="15px"
                                                                    mb="24px"
                                                                    fontSize="sm"
                                                                    type="text"
                                                                    placeholder="Selecciona tu cargo"
                                                                    size="lg"
                                                                    onChange={handlePosition}
                                                                    color="#3C434D"
                                                                    value={positionValue}
                                                                >
                                                                    {position.map((item, i) => (
                                                                        <option key={i} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </Flex>
                                                </div>

                                                <div>
                                                    <Flex
                                                        direction="row"
                                                        w="100%"
                                                        background="transparent"
                                                        borderRadius="15px"
                                                        bg={bgColor}
                                                        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                                                        justifyContent="space-between"
                                                    >
                                                        <div style={{ width: '100%' }}>
                                                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                                Hobbies
                                                            </FormLabel>

                                                            {/* {hobbies.map((item, i) => (
                                                        <Flex align="center" mb="20px" w="32%" key={i}>
                                                            <Switch colorScheme="teal" me="10px" />
                                                            <Text
                                                                noOfLines={1}
                                                                fontSize="md"
                                                                color="gray.500"
                                                                fontWeight="400"
                                                            >
                                                                {item.name}
                                                            </Text>
                                                        </Flex>
                                                    ))} */}

                                                            <CheckboxGroup colorScheme="teal">
                                                                <HStack>
                                                                    <Flex
                                                                        wrap="wrap"
                                                                        direction="row"
                                                                        w="100%"
                                                                        background="transparent"
                                                                        borderRadius="15px"
                                                                        bg={bgColor}
                                                                        justifyContent="space-between"
                                                                    >
                                                                        {hobbies.map((item, i) => (
                                                                            <Flex align="center" mb="20px" w="32%" key={i}>
                                                                                <Checkbox value={item.flexDirection}>{item.name}</Checkbox>
                                                                            </Flex>
                                                                        ))}
                                                                    </Flex>
                                                                </HStack>
                                                            </CheckboxGroup>
                                                        </div>

                                                    </Flex>
                                                </div>

                                                <div>
                                                    <Flex
                                                        direction="column"
                                                        w="100%"
                                                        background="transparent"
                                                        borderRadius="15px"
                                                        bg={bgColor}
                                                        justifyContent="space-between"
                                                        mb="12px"
                                                    >
                                                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                            Gustos profesionales
                                                        </FormLabel>
                                                        <Textarea
                                                            placeholder="Escriba sus gustos profesionales"
                                                            value={professional}
                                                            onChange={handleProfessional}
                                                        />
                                                    </Flex>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    bg="teal.300"
                                                    fontSize="14px"
                                                    color="white"
                                                    fontWeight="bold"
                                                    w="100%"
                                                    h="45"
                                                    mb="24px"
                                                    _hover={{
                                                        bg: "teal.200",
                                                    }}
                                                    _active={{
                                                        bg: "teal.400",
                                                    }}
                                                >
                                                    Guardar
                                                </Button>

                                            </FormControl>
                                        </form>

                                    </Flex>

                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Card p="16px">
                                <form onSubmit={() => { onSubmitStatus() }}>
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
                                            <Flex justifyContent="space-between" mb="21px" w="100%">
                                                <Flex align="center" alignItems="flex-start" w="100%">
                                                    <Flex direction="column" w="100%">
                                                        <Text fontSize="sm" color="gray.500" fontWeight="bold" mb="10px">
                                                            Estado{" "}
                                                        </Text>
                                                        <Textarea
                                                            placeholder="Escribe tu estado actual"
                                                            value={state}
                                                            onChange={handleState}
                                                        />
                                                        <FormControl display="flex" alignItems="center" mt="20px">
                                                            <Switch
                                                                id="remember-login"
                                                                colorScheme="teal"
                                                                me="10px"
                                                                isChecked={status}
                                                                onChange={handleStatus}
                                                            />
                                                            <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                                                                No molestar
                                                            </FormLabel>
                                                        </FormControl>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </CardBody>
                                    <Button
                                        type="submit"
                                        bg="teal.300"
                                        fontSize="14px"
                                        color="white"
                                        fontWeight="bold"
                                        w="100%"
                                        h="45"
                                        _hover={{
                                            bg: "teal.200",
                                        }}
                                        _active={{
                                            bg: "teal.400",
                                        }}
                                    >
                                        Guardar
                                    </Button>
                                </form>
                            </Card>
                        </GridItem>
                    </Grid>
                </Flex >
            )}
        </React.Fragment>
    );
}

export default UpdateProfile;
