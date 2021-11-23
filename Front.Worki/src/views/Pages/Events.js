import React from "react";
// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Link,
    Switch,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import Carnaval from "assets/img/carnaval.jpg";
import Copas from "assets/img/copas.jpg";
import Caminata from "assets/img/caminata.jpg";

import {
    FaCube,
    FaFacebook,
    FaInstagram,
    FaPenFancy,
    FaPlus,
    FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Events() {
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

            <Card p="16px" my="24px">
                <CardHeader p="12px 5px" mb="12px">
                    <Flex direction="column">
                        <Text fontSize="lg" color={textColor} fontWeight="bold">
                            Eventos
                        </Text>
                        <Text fontSize="sm" color="gray.500" fontWeight="400">
                            Estos son los eventos proximos
                        </Text>
                    </Flex>
                </CardHeader>
                <CardBody px="5px">
                    <Grid
                        templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
                        templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
                        gap="24px"
                    >
                        <Flex direction="column">
                            <Box mb="20px" position="relative" borderRadius="15px">
                                <Image src={Copas} borderRadius="15px" />
                                <Box
                                    w="100%"
                                    h="100%"
                                    position="absolute"
                                    top="0"
                                    borderRadius="15px"
                                    bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                ></Box>
                            </Box>
                            <Flex direction="column">
                                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                                    Evento #1
                                </Text>
                                <Text
                                    fontSize="xl"
                                    color={textColor}
                                    fontWeight="bold"
                                    mb="10px"
                                >
                                    Copas y musica
                                </Text>
                                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                                    Disfruta de una noche con amigos llena de alegria, musica y sobretodo buena energia ...
                                </Text>
                                <Flex justifyContent="space-between">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        minW="110px"
                                        h="36px"
                                        fontSize="xs"
                                        px="1.5rem"
                                    >
                                        Ver evento
                                    </Button>
                                    <AvatarGroup size="xs">
                                        <Avatar name="Ryan Florence" src={avatar6} />
                                        <Avatar name="Segun Adebayo" src={avatar2} />
                                        <Avatar name="Kent Dodds" src={avatar3} />
                                        <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                                    </AvatarGroup>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column">
                            <Box mb="20px" position="relative" borderRadius="15px">
                                <Image src={Carnaval} borderRadius="15px" />
                                <Box
                                    w="100%"
                                    h="100%"
                                    position="absolute"
                                    top="0"
                                    borderRadius="15px"
                                    bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                ></Box>
                            </Box>
                            <Flex direction="column">
                                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                                    Evento #2
                                </Text>
                                <Text
                                    fontSize="xl"
                                    color={textColor}
                                    fontWeight="bold"
                                    mb="10px"
                                >
                                    Carnaval
                                </Text>
                                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                                    Ven a disfrutar del carnaval de Barranquilla, maravillate de todo el folclor ...
                                </Text>
                                <Flex justifyContent="space-between">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        minW="110px"
                                        h="36px"
                                        fontSize="xs"
                                        px="1.5rem"
                                    >
                                        Ver evento
                                    </Button>
                                    <AvatarGroup size="xs">
                                        <Avatar name="Ryan Florence" src={avatar6} />
                                        <Avatar name="Segun Adebayo" src={avatar2} />
                                        <Avatar name="Kent Dodds" src={avatar3} />
                                        <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                                    </AvatarGroup>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column">
                            <Box mb="20px" position="relative" borderRadius="15px">
                                <Image src={Caminata} borderRadius="15px" />
                                <Box
                                    w="100%"
                                    h="100%"
                                    position="absolute"
                                    top="0"
                                    borderRadius="15px"
                                    bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                ></Box>
                            </Box>
                            <Flex direction="column">
                                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                                    Evento #3
                                </Text>
                                <Text
                                    fontSize="xl"
                                    color={textColor}
                                    fontWeight="bold"
                                    mb="10px"
                                >
                                    Caminata
                                </Text>
                                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                                    Disfruta de una caminata por la zona mas natural y tranquila de la ciudad de ....
                                </Text>
                                <Flex justifyContent="space-between">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        minW="110px"
                                        h="36px"
                                        fontSize="xs"
                                        px="1.5rem"
                                    >
                                        Ver evento
                                    </Button>
                                    <AvatarGroup size="xs">
                                        <Avatar name="Ryan Florence" src={avatar6} />
                                        <Avatar name="Segun Adebayo" src={avatar2} />
                                        <Avatar name="Kent Dodds" src={avatar3} />
                                        <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                                    </AvatarGroup>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Button
                            p="0px"
                            bg="transparent"
                            color="gray.500"
                            border="1px solid lightgray"
                            borderRadius="15px"
                            minHeight={{ sm: "200px", md: "100%" }}
                        >
                            <Flex
                                direction="column"
                                justifyContent="center"
                                align="center"
                            >
                                <Icon as={FaPlus} fontSize="lg" mb="12px" />
                                <Text fontSize="lg" fontWeight="bold">
                                    Crear Evento
                                </Text>
                            </Flex>
                        </Button>
                    </Grid>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default Events;
