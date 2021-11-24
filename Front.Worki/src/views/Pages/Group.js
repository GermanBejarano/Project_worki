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
    Portal,
    Progress,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Th,
    Thead,
    Tr,
    useColorMode,
} from "@chakra-ui/react";

import { FaEllipsisV, FaRegComment } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { useDisclosure } from "react-use-disclosure";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";

// assets
import peopleImage from "assets/img/people-image.png";


import { ClockIcon, WalletIcon } from "components/Icons/Icons";
import logoChakra from "assets/svg/logo-white.svg";
import Caminata from "assets/img/caminata.jpg";
import Carnaval from "assets/img/carnaval.jpg";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Separator } from "components/Separator/Separator";
import IconBox from "components/Icons/IconBox";

// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import Comedia from "assets/img/Comedia.jpg";
import Moda from "assets/img/Moda.jpg";
import Anime from "assets/img/Anime.jpg";
import Musica from "assets/img/Musica.jpg";
import Juegos from "assets/img/Juegos.jpg";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";



function Group() {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    const iconBoxInside = useColorModeValue("white", "white");
    const iconTeal = useColorModeValue("teal.300", "teal.300");
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
    const navbarIcon = useColorModeValue("gray.500", "gray.200");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside")
    const btnRef = React.useRef()
    const overlayRef = React.useRef();

    const [openModal, setOpenModal] = React.useState(false);

    const howClose = () => {
        setOpenModal(false);
    };
    const howOpen = () => {
        setOpenModal(true);
    };


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

            <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(1, 1fr)" }}
                templateRows={{ md: "1fr auto", lg: "1fr" }}
                my="4px"
                gap="24px"
            >
                <GridItem colSpan={1}>
                    <Card p="0px 10px">
                        <CardHeader p="12px 5px" >
                            <Flex direction="column" w="100%">
                                <Flex justifyContent="space-between" >
                                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                                        Grupos en los que estas
                                    </Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>
                </GridItem>
            </Grid>

            <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(6, 1fr)" }}
                templateRows={{ md: "1fr auto", lg: "1fr" }}
                my="26px"
                gap="24px"
            >
                <GridItem colSpan={2}>
                    <Card p="1.2rem">
                        <CardBody w="100%" >
                            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{ lg: "48%" }}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Publico
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        Grupo de memes
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        En este grupo se comparten los mejores memes ...
                                    </Text>
                                    <Spacer />
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{ sm: "1.5rem", lg: "0px" }}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{ sm: "1.5rem", lg: "0px" }}
                                                _hover={{ me: "4px" }}
                                            >
                                                Ver mas
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{ transform: "translateX(20%)" }}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer />
                                <Flex
                                    // bg="teal.300"
                                    align="normal"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{ lg: "40%" }}
                                    minHeight={{ sm: "150px" }}
                                >
                                    <Image
                                        src={Comedia}
                                        alt="chakra image"
                                        minWidth={{ md: "300px", lg: "auto" }}
                                        borderRadius="15px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem colSpan={2}>
                    <Card p="1.2rem">
                        <CardBody w="100%" >
                            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{ lg: "48%" }}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Publico
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        Grupo de diseño de Moda
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        Comparte los mejores diseños de la actualidad...
                                    </Text>
                                    <Spacer />
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{ sm: "1.5rem", lg: "0px" }}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{ sm: "1.5rem", lg: "0px" }}
                                                _hover={{ me: "4px" }}
                                            >
                                                Ver mas
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{ transform: "translateX(20%)" }}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer />
                                <Flex
                                    // bg="teal.300"
                                    align="normal"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{ lg: "40%" }}
                                    minHeight={{ sm: "150px" }}
                                >
                                    <Image
                                        src={Moda}
                                        alt="chakra image"
                                        minWidth={{ md: "300px", lg: "auto" }}
                                        borderRadius="15px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>

            </Grid>

            <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(1, 1fr)" }}
                templateRows={{ md: "1fr auto", lg: "1fr" }}
                my="4px"
                gap="24px"
            >
                <GridItem colSpan={1}>
                    <Card p="0px 10px">
                        <CardHeader p="12px 5px" >
                            <Flex direction="column" w="100%">
                                <Flex justifyContent="space-between" >
                                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                                        Grupos mas destacados
                                    </Text>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>
                </GridItem>
            </Grid>

            <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(6, 1fr)" }}
                templateRows={{ md: "1fr auto", lg: "1fr" }}
                my="26px"
                gap="24px"
            >
                <GridItem colSpan={2}>
                    <Card p="1.2rem">
                        <CardBody w="100%" >
                            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{ lg: "48%" }}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Privado
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        Grupo de anime
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        Te interesa el anime, el manga y todo lo relacionado...
                                    </Text>
                                    <Spacer />
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{ sm: "1.5rem", lg: "0px" }}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{ sm: "1.5rem", lg: "0px" }}
                                                _hover={{ me: "4px" }}
                                            >
                                                Ver mas
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{ transform: "translateX(20%)" }}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer />
                                <Flex
                                    // bg="teal.300"
                                    align="normal"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{ lg: "40%" }}
                                    minHeight={{ sm: "150px" }}
                                >
                                    <Image
                                        src={Anime}
                                        alt="chakra image"
                                        minWidth={{ md: "300px", lg: "auto" }}
                                        borderRadius="15px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem colSpan={2}>
                    <Card p="1.2rem">
                        <CardBody w="100%" >
                            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{ lg: "48%" }}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Publico
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        Grupo de musica variada
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        Conoce la mejor musica del mundo de cualquier genero...
                                    </Text>
                                    <Spacer />
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{ sm: "1.5rem", lg: "0px" }}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{ sm: "1.5rem", lg: "0px" }}
                                                _hover={{ me: "4px" }}
                                            >
                                                Ver mas
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{ transform: "translateX(20%)" }}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer />
                                <Flex
                                    // bg="teal.300"
                                    align="normal"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{ lg: "40%" }}
                                    minHeight={{ sm: "150px" }}
                                >
                                    <Image
                                        src={Musica}
                                        alt="chakra image"
                                        minWidth={{ md: "300px", lg: "auto" }}
                                        borderRadius="15px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem colSpan={2}>
                    <Card p="1.2rem">
                        <CardBody w="100%" >
                            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
                                <Flex
                                    flexDirection="column"
                                    h="100%"
                                    lineHeight="1.6"
                                    width={{ lg: "48%" }}
                                >
                                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                                        Privado
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pb=".5rem"
                                    >
                                        Grupo de gamers
                                    </Text>
                                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                        Comparte tus mejores jugadas y tus puntajes en...
                                    </Text>
                                    <Spacer />
                                    <Flex align="center">
                                        <Button
                                            p="0px"
                                            variant="no-hover"
                                            bg="transparent"
                                            my={{ sm: "1.5rem", lg: "0px" }}
                                        >
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                                cursor="pointer"
                                                transition="all .5s ease"
                                                my={{ sm: "1.5rem", lg: "0px" }}
                                                _hover={{ me: "4px" }}
                                            >
                                                Ver mas
                                            </Text>
                                            <Icon
                                                as={BsArrowRight}
                                                w="20px"
                                                h="20px"
                                                fontSize="2xl"
                                                transition="all .5s ease"
                                                mx=".3rem"
                                                cursor="pointer"
                                                pt="4px"
                                                _hover={{ transform: "translateX(20%)" }}
                                            />
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Spacer />
                                <Flex
                                    // bg="teal.300"
                                    align="normal"
                                    justify="center"
                                    borderRadius="15px"
                                    width={{ lg: "40%" }}
                                    minHeight={{ sm: "150px" }}
                                >
                                    <Image
                                        src={Juegos}
                                        alt="chakra image"
                                        minWidth={{ md: "300px", lg: "auto" }}
                                        borderRadius="15px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>

            </Grid>
        </Flex >
    );
}

export default Group;
