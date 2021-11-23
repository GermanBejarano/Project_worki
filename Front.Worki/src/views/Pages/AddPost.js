import React, { useState, useEffect, useRef } from "react";
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

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

function AddPost(props) {
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

    const editor = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');

    const [userSession, setUserSession] = useState(false);
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
            `${process.env.REACT_APP_GATEWAY_WORKI}/category`
        ).then((response) => {
            const result = response.data.body;
            console.log('RESULT: ' + JSON.stringify(result));
            let arreglo = [];
            result.map((dato) => (
                arreglo.push({ id: dato.id_category, name: dato.name })
            ));
            setCategories(arreglo);
        });
    }, [userSession == true]);


    const handleTitle = (params) => {
        setTitle(params.target.value);
        // formik.handleChange(params);
    };

    const handleCategory = (params) => {
        setCategory(params.target.value);
        // formik.handleChange(params);
    };

    const handleStatus = (params) => {
        setStatus(!status);
        // formik.handleChange(params);
    };

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);

        console.log('e.target1: ' + e.target.files[0]);
        console.log('e.target2: ' + e.target.files[0].name);
    };

    const handleFile = (e) => {
        e.target.files[0];
        setSelectedFile(e.target.files[0]);
        console.log('e.target: ' + e.target.files[0].name);
        // formik.handleChange(params);
    };

    const config = {
        readonly: false
    }

    const onSubmit = async (values) => {
        try {
            console.log('title: ' + title);
            console.log('description: ' + content);
            console.log('selectedFile: ' + selectedFile);
            console.log('status: ' + status);
            console.log('id_user: ' + infoUser.id_user);
            console.log('category: ' + category);

            console.log('e.target111: ' + file);
            console.log('e.target222: ' + fileName);

            const formData = new FormData();
            formData.append("file", file);
            formData.append("fileName", fileName);

            console.log('formData: ' + JSON.stringify(formData));


            const serviceResult = await axios.post(`${process.env.REACT_APP_GATEWAY_WORKI}/post`,
                {
                    title: title,
                    description: content,
                    status: status,
                    id_user: infoUser.id_user,
                    id_category: category
                });

            const response = serviceResult.data.body;
            console.log('response: ' + JSON.stringify(response));
            if (response.state == true) {
                const serviceFileResult = await axios.post(`${process.env.REACT_APP_GATEWAY_WORKI}/post/upload/${response.postid}`, formData);

                const responseFileResult = serviceFileResult.data.body;

                if (responseFileResult.state == true) {
                    ChangeUrl(props, '/admin/post')

                } else {
                    alert('Error al guardar o publicar el post');
                }
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
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
            <Grid templateColumns={{ sm: "1fr", xl: "repeat(7, 1fr)" }} gap="22px">
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={5}>
                    <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
                        <CardHeader p="12px 5px" mb="12px">
                            <Text fontSize="lg" color={textColor} fontWeight="bold">
                                Crear post
                            </Text>
                        </CardHeader>
                        <CardBody px="5px">
                            <Flex direction="column" w="100%" >
                                <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                                    Crea, comparte y diviertete creando contenido
                                </Text>
                                <form onSubmit={() => { onSubmit() }} enctype="multipart/form-data" >
                                    <FormControl>
                                        <div>
                                            <Flex
                                                direction={{ sm: "column", xl: "row" }}
                                                w="100%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                                                justifyContent="space-between"
                                            >
                                                <Flex
                                                    direction="column"
                                                    align="left"
                                                    mb="18px"
                                                    w={{ sm: "100%", xl: "47%" }}
                                                >
                                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                        Titulo
                                                    </FormLabel>
                                                    <Input
                                                        fontSize="sm"
                                                        ms="4px"
                                                        borderRadius="15px"
                                                        type="text"
                                                        placeholder="Ingresa un titulo para tu post"
                                                        mb={{ sm: "5px", xl: "10px" }}
                                                        size="lg"
                                                        onChange={handleTitle}
                                                    />
                                                </Flex>
                                                <Flex
                                                    direction="column"
                                                    align="left"
                                                    mb="18px"
                                                    w={{ sm: "100%", xl: "47%" }}
                                                >
                                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                        Categoria
                                                    </FormLabel>
                                                    <FormControl id="country">
                                                        <Select
                                                            borderRadius="15px"
                                                            mb={{ sm: "5px", xl: "24px" }}
                                                            fontSize="sm"
                                                            type="text"
                                                            placeholder="Selecciona tu cargo"
                                                            size="lg"
                                                            onChange={handleCategory}
                                                            color="#3C434D"
                                                        >
                                                            {categories.map((item, i) => (
                                                                <option key={i} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Flex>
                                            </Flex>
                                        </div>
                                        <div>
                                            <Flex
                                                direction={{ sm: "column", xl: "row" }}
                                                w="100%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                                                justifyContent="space-between"
                                            >
                                                <Flex
                                                    direction="column"
                                                    align="left"
                                                    mb={{ sm: "5px", xl: "5px" }}
                                                    w={{ sm: "100%", xl: "47%" }}
                                                >
                                                    <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                                        Archivo multimedia
                                                    </FormLabel>
                                                    <Input
                                                        fontSize="sm"
                                                        ms="4px"
                                                        // borderRadius="15px"
                                                        type="file"
                                                        mb={{ sm: "5px", xl: "24px" }}
                                                        size="lg"
                                                        // onChange={handleFile}
                                                        onChange={saveFile}
                                                        style={{ border: '0px', paddingLeft: '0px' }}
                                                    />
                                                </Flex>
                                                <Flex
                                                    direction="column"
                                                    align="left"
                                                    w={{ sm: "100%", xl: "47%" }}
                                                    mb={{ sm: "24px", xl: "5px" }}
                                                >
                                                    <FormControl display="flex" alignItems="center" mt={{ sm: "5px", xl: "20px" }}>
                                                        <Switch
                                                            id="remember-login"
                                                            colorScheme="teal"
                                                            me="10px"
                                                            onChange={handleStatus}
                                                        />
                                                        <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                                                            No molestar
                                                        </FormLabel>
                                                    </FormControl>
                                                </Flex>

                                            </Flex>
                                        </div>

                                        {/* <div>
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
                                                Descripcion
                                            </FormLabel>
                                            <Textarea placeholder="Escriba sus gustos profesionales" />
                                        </Flex>
                                    </div> */}

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
                                                    Descripcion
                                                </FormLabel>

                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    config={config}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    onChange={newContent => { }}
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
                                            mt="24px"
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
                </GridItem>
            </Grid>
        </Flex >
    );
}

export default AddPost;
