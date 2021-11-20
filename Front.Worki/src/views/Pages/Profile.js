import React from "react";
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

function Profile() {
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
                                                    Password
                                                </FormLabel>
                                                <Input
                                                    fontSize="sm"
                                                    ms="4px"
                                                    borderRadius="15px"
                                                    type="password"
                                                    placeholder="Your password"
                                                    mb="24px"
                                                    size="lg"
                                                />
                                            </div>
                                            <div style={{ width: '47%' }}>

                                            </div>
                                        </Flex>
                                    </div>
                                    <div>
                                        <FormControl display="flex" alignItems="center" mb="24px">
                                            <Switch id="remember-login" colorScheme="teal" me="10px" />
                                            <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                                                No molestar
                                            </FormLabel>
                                        </FormControl>
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
                                        Sophie B.{" "}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500" fontWeight="400">
                                        sophie12@gmail.com
                                    </Text>
                                </Flex>
                                <Flex justifyContent="space-between" mb="21px">
                                    <Flex align="center" alignItems="flex-start">
                                        <Flex direction="column">
                                            <Text fontSize="sm" color="gray.500" fontWeight="bold" mb="10px">
                                                Estado{" "}
                                            </Text>
                                            <Text fontSize="sm" color="gray.500" fontWeight="400">
                                                Este es mi estado actual, estoy en horas laborales, por favor contactarme al celular si es de suma urgencia.{" "}
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
    );
}

export default Profile;
