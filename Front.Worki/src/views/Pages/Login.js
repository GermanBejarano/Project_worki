import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ChangeUrl from '../../variables/ChangeUrl';
// Chakra imports
import {
    Box,
    Flex,
    Button,
    Form,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    Select
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import login_1 from "assets/img/login_2.jpg";

const initialValues = {
    email: '',
    pass: '',
};

const validationSchema = Yup.object({
    email: Yup.string().required('Requerido'),
    pass: Yup.string().required('Requerido'),
});

function Login(props) {
    // Chakra color mode
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.400", "white");

    const [companies, setCompanies] = useState([]);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_GATEWAY_DIRECTORY}/company`
        ).then((response) => {
            const result = response.data.body.companies;
            console.log('RESULT: ' + JSON.stringify(result));
            let arreglo = [];
            result.map((dato) => (
                arreglo.push({ id: dato.nit, name: dato.name })
            ));
            setCompanies(arreglo);
        });
    }, []);

    const onSubmit = async (values) => {
        try {
            console.log('email: ' + email);
            console.log('pass: ' + pass);
            console.log('company: ' + company);

            const serviceResult = await axios.post(`${process.env.REACT_APP_GATEWAY_DIRECTORY}/users`,
                {
                    user: email,
                    pass: pass,
                    nit: company,
                });

            const response = serviceResult.data.body;

            console.log('serviceResult: ' + response.state);
            console.log('serviceResult: ' + response.state);
            console.log('serviceResult2: ' + JSON.stringify({
                name: response.users[0].nameuser,
                lastname: response.users[0].lastname,
                email: response.users[0].email,
                pass: response.users[0].pass,
                rol: response.users[0].rol,
                nit_company: company
            }));
            
            if (response.state == true) {

                const consultUserResult = await axios.post(`${process.env.REACT_APP_GATEWAY_WORKI}/user`,
                    {
                        name: response.users[0].nameuser,
                        lastname: response.users[0].lastname,
                        email: response.users[0].email,
                        pass: response.users[0].pass,
                        rol: response.users[0].rol,
                        nit_company: company,
                    });

                const responseConsultUser = consultUserResult.data.body;

                if (responseConsultUser.state == true) {

                    const objUser = { 
                        id_user: responseConsultUser.userid, 
                        id_company: responseConsultUser.companyid,
                        state: true 
                    };
                    
                    console.log('USER: '+ JSON.stringify (responseConsultUser) +' - '+JSON.stringify(objUser));
                    localStorage.setItem('UserInfo', JSON.stringify(objUser))
                    if (responseConsultUser.newuser == true) {
                        ChangeUrl(props, '/admin/profile2')
                    } else {
                        ChangeUrl(props, '/admin/feed')
                    }
                } else {
                    alert('Usuario y/o constraseña incorrectas');
                }

            } else {
                alert('Usuario y/o constraseña incorrectas');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleCompany = (params) => {
        setCompany(params.target.value);
        formik.handleChange(params);
    };

    const handleEmail = (params) => {
        setEmail(params.target.value);
        formik.handleChange(params);
    };

    const handlePass = (params) => {
        setPass(params.target.value);
        formik.handleChange(params);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Flex position="relative" mb="40px">
            <Flex
                h={{ sm: "initial", md: "75vh", lg: "85vh" }}
                w="100%"
                maxW="1044px"
                mx="auto"
                justifyContent="space-between"
                mb="30px"
                pt={{ sm: "100px", md: "0px" }}
            >
                <Flex
                    alignItems="center"
                    justifyContent="start"
                    style={{ userSelect: "none" }}
                    w={{ base: "100%", md: "50%", lg: "42%" }}
                >
                    <Flex
                        direction="column"
                        w="100%"
                        background="transparent"
                        p="48px"
                        mt={{ md: "150px", lg: "80px" }}
                    >
                        <Heading color={titleColor} fontSize="32px" mb="10px">
                            Bienvenido
                        </Heading>
                        <Text
                            mb="36px"
                            ms="4px"
                            color={textColor}
                            fontWeight="bold"
                            fontSize="14px"
                        >
                            Selecciona tu empresa e ingresa tu correo y contraseña del active directory.
                        </Text>

                        <form onSubmit={() => { onSubmit() }}>
                            <FormControl >
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Compañia
                                </FormLabel>

                                <FormControl id="country">
                                    <Select
                                        borderRadius="15px"
                                        mb="24px"
                                        fontSize="sm"
                                        type="text"
                                        placeholder="Selecciona tu compañia"
                                        size="lg"
                                        onChange={handleCompany}
                                    >
                                        {companies.map((item, i) => (
                                            <option key={i} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Email
                                </FormLabel>
                                <Input
                                    borderRadius="15px"
                                    mb="24px"
                                    fontSize="sm"
                                    type="text"
                                    placeholder="Ingresa tu email"
                                    size="lg"
                                    onChange={handleEmail}
                                />

                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Password
                                </FormLabel>
                                <Input
                                    borderRadius="15px"
                                    mb="36px"
                                    fontSize="sm"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    size="lg"
                                    onChange={handlePass}
                                />
                                <Button
                                    fontSize="10px"
                                    type="submit"
                                    bg="teal.300"
                                    w="100%"
                                    h="45"
                                    mb="20px"
                                    color="white"
                                    mt="20px"
                                    _hover={{
                                        bg: "teal.200",
                                    }}
                                    _active={{
                                        bg: "teal.400",
                                    }}
                                    type="submit"
                                >
                                    INGRESAR
                                </Button>
                            </FormControl>
                        </form>
                    </Flex>
                </Flex>
                <Box
                    display={{ base: "none", md: "block" }}
                    overflowX="hidden"
                    h="100%"
                    w="40vw"
                    position="absolute"
                    right="0px"
                >
                    <Box
                        bgImage={login_1}
                        w="100%"
                        h="100%"
                        bgSize="cover"
                        bgPosition="50%"
                        position="absolute"
                        borderBottomLeftRadius="20px"
                    ></Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Login;
