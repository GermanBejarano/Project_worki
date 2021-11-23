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

import { FaEllipsisV, FaRegComment } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { useDisclosure } from "react-use-disclosure";


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

function Feed() {
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
            <Grid templateColumns={{ sm: "1fr", xl: "repeat(7, 1fr)" }} gap="22px">
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={5}>
                    <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
                        <CardHeader p="0px 5px" mb="2px">
                            <Flex direction="column" w="100%">
                                <Flex justifyContent="space-between" mb="21px">
                                    <Flex align="center">
                                        <Avatar
                                            src={avatar2}
                                            w="50px"
                                            h="50px"
                                            borderRadius="15px"
                                            me="10px"
                                        />
                                        <Flex direction="column">
                                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                                                Sophie B.{" "}
                                            </Text>
                                            <Flex alignItems="center">
                                                <ClockIcon color="gray.500" w="12px" h="12px" me="3px" />
                                                <Text fontSize="xs" lineHeight="100%" color="gray.500" fontWeight="400">
                                                    27 Jul.
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    <Button p="0px" bg="transparent">
                                        <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
                                    </Button>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody px="5px">
                            <Flex direction="column" w="100%" >
                                <Text fontSize="md" fontWeight="400" mb="30px">
                                    Esta es la prueba de la descripcion de un post..
                                </Text>
                                <Box mb="20px" position="relative" borderRadius="15px">
                                    <Image src={Caminata} borderRadius="15px" m="auto" />
                                    <Box
                                        w="100%"
                                        h="100%"
                                        position="absolute"
                                        top="0"
                                        borderRadius="15px"
                                    // bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                    ></Box>
                                </Box>
                                <FormControl>
                                    <div>
                                        <Flex
                                            direction="row"
                                            w="100%"
                                            background="transparent"
                                            borderRadius="15px"
                                            bg={bgColor}
                                            justifyContent="space-between"
                                        >
                                            <Flex
                                                direction="row"
                                                w="50%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                justifyContent="flex-start"
                                            >


                                                <Flex alignItems="center" mb="12px">
                                                    <Button p="0px" bg="transparent">
                                                        <IconBox
                                                            as="box"
                                                            h={"30px"}
                                                            w={"30px"}
                                                            color={iconTeal}
                                                        >
                                                            <AiOutlineLike h={"20px"} w={"20px"} color={iconTeal} style={{fontSize: '20px'}} />
                                                        </IconBox>
                                                        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                            1
                                                        </Text>
                                                    </Button>
                                                </Flex>
                                                <Flex alignItems="center" mb="12px">
                                                    <Button p="0px" bg="transparent">
                                                        <IconBox
                                                            as="box"
                                                            h={"30px"}
                                                            w={"30px"}
                                                            // me="6px"
                                                            color={iconTeal}
                                                        >
                                                            <MdFavoriteBorder h={"20px"} w={"20px"} color={iconTeal} style={{fontSize: '20px'}} />
                                                        </IconBox>
                                                        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                            5
                                                        </Text>
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                direction="row"
                                                w="50%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                justifyContent="flex-end"
                                            >
                                                <Flex alignItems="center" mb="12px" mr="20px">
                                                    <Button p="0px"
                                                        bg="transparent"
                                                        fontSize="sm"
                                                        color="gray.500"
                                                        fontWeight="semibold"
                                                        mt={3}
                                                        ref={btnRef}
                                                        onClick={howOpen}
                                                    >
                                                        Mas info.
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>

                                    <Separator />

                                    <div>
                                        <Flex
                                            direction="row"
                                            w="100%"
                                            background="transparent"
                                            borderRadius="15px"
                                            bg={bgColor}
                                            justifyContent="space-around"
                                        >
                                            <Flex alignItems="center" mt="12px">
                                                <Button p="0px" bg="transparent">
                                                    <IconBox
                                                        as="box"
                                                        h={"30px"}
                                                        w={"30px"}
                                                        me="6px"
                                                        color={iconTeal}
                                                    >
                                                        <FaRegComment h={"15px"} w={"15px"} color={iconTeal} style={{fontSize: '20px'}} />
                                                    </IconBox>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                        Comentar
                                                    </Text>
                                                </Button>
                                            </Flex>
                                            <Flex alignItems="center" mt="12px">
                                                <Button p="0px" bg="transparent">
                                                    <IconBox
                                                        as="box"
                                                        h={"30px"}
                                                        w={"30px"}
                                                        me="6px"
                                                        color={iconTeal}
                                                    >
                                                        <IoArrowRedoOutline h={"18px"} w={"18px"} color={iconTeal} style={{fontSize: '20px'}} />
                                                    </IconBox>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                        Compartir
                                                    </Text>
                                                </Button>
                                            </Flex>
                                        </Flex>
                                    </div>
                                </FormControl>
                            </Flex>

                        </CardBody>
                    </Card>

                    {/* CARD DOS */}
                    <Card p="16px" my={{ sm: "24px", xl: "20px" }} >
                        <CardHeader p="0px 5px" mb="2px">
                            <Flex direction="column" w="100%">
                                <Flex justifyContent="space-between" mb="21px">
                                    <Flex align="center">
                                        <Avatar
                                            src={avatar2}
                                            w="50px"
                                            h="50px"
                                            borderRadius="15px"
                                            me="10px"
                                        />
                                        <Flex direction="column">
                                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                                                Sophie B.{" "}
                                            </Text>
                                            <Flex alignItems="center">
                                                <ClockIcon color="gray.500" w="12px" h="12px" me="3px" />
                                                <Text fontSize="xs" lineHeight="100%" color="gray.500" fontWeight="400">
                                                    12 Ago.
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    <Button p="0px" bg="transparent">
                                        <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
                                    </Button>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody px="5px">
                            <Flex direction="column" w="100%" >
                                <Text fontSize="md" fontWeight="400" mb="30px">
                                    El carnaval de Barranquilla es un evento folclórico y cultural de Colombia. Cerca de 2 millones de personas, entre visitantes y locales, participan anualmente de la fiesta,5​ que comienza el sábado anterior al Miércoles de Ceniza y termina el martes inmediatamente posterior.
                                </Text>
                                <Box mb="20px" position="relative" borderRadius="15px">
                                    <Image src={Carnaval} borderRadius="15px" m="auto" />
                                    <Box
                                        w="100%"
                                        h="100%"
                                        position="absolute"
                                        top="0"
                                        borderRadius="15px"
                                    // bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                                    ></Box>
                                </Box>
                                <FormControl>
                                    <div>
                                        <Flex
                                            direction="row"
                                            w="100%"
                                            background="transparent"
                                            borderRadius="15px"
                                            bg={bgColor}
                                            justifyContent="space-between"
                                        >
                                            <Flex
                                                direction="row"
                                                w="50%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                justifyContent="flex-start"
                                            >


                                                <Flex alignItems="center" mb="12px">
                                                    <Button p="0px" bg="transparent">
                                                        <IconBox
                                                            as="box"
                                                            h={"30px"}
                                                            w={"30px"}
                                                            color={iconTeal}
                                                        >
                                                            <AiOutlineLike h={"20px"} w={"20px"} color={iconTeal} />
                                                        </IconBox>
                                                        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                            1
                                                        </Text>
                                                    </Button>
                                                </Flex>
                                                <Flex alignItems="center" mb="12px">
                                                    <Button p="0px" bg="transparent">
                                                        <IconBox
                                                            as="box"
                                                            h={"30px"}
                                                            w={"30px"}
                                                            // me="6px"
                                                            color={iconTeal}
                                                        >
                                                            <MdFavoriteBorder h={"20px"} w={"20px"} color={iconTeal} />
                                                        </IconBox>
                                                        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                            5
                                                        </Text>
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                direction="row"
                                                w="50%"
                                                background="transparent"
                                                borderRadius="15px"
                                                bg={bgColor}
                                                justifyContent="flex-end"
                                            >
                                                <Flex alignItems="center" mb="12px" mr="20px">
                                                    <Link fontSize="sm" color="gray.500" fontWeight="semibold" href="#/admin/post" >
                                                        Mas info.
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </div>

                                    <Separator />

                                    <div>
                                        <Flex
                                            direction="row"
                                            w="100%"
                                            background="transparent"
                                            borderRadius="15px"
                                            bg={bgColor}
                                            justifyContent="space-around"
                                        >
                                            <Flex alignItems="center" mt="12px">
                                                <Button p="0px" bg="transparent">
                                                    <IconBox
                                                        as="box"
                                                        h={"30px"}
                                                        w={"30px"}
                                                        me="6px"
                                                        color={iconTeal}
                                                    >
                                                        <FaRegComment h={"15px"} w={"15px"} color={iconTeal} />
                                                    </IconBox>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                        Comentar
                                                    </Text>
                                                </Button>
                                            </Flex>
                                            <Flex alignItems="center" mt="12px">
                                                <Button p="0px" bg="transparent">
                                                    <IconBox
                                                        as="box"
                                                        h={"30px"}
                                                        w={"30px"}
                                                        me="6px"
                                                        color={iconTeal}
                                                    >
                                                        <IoArrowRedoOutline h={"18px"} w={"18px"} color={iconTeal} />
                                                    </IconBox>
                                                    <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="8px">
                                                        Compartir
                                                    </Text>
                                                </Button>
                                            </Flex>
                                        </Flex>
                                    </div>
                                </FormControl>
                            </Flex>

                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>

                <>
                    <Modal
                        onClose={howClose}
                        finalFocusRef={btnRef}
                        isOpen={openModal}
                        scrollBehavior="inside"
                    >
                        <ModalOverlay />
                        <ModalContent  borderRadius="15px">
                            <ModalHeader>Les gusto este post</ModalHeader>
                            <ModalCloseButton />
                            <Separator />
                            <ModalBody>
                                <Flex
                                    direction="row"
                                    w="100%"
                                    background="transparent"
                                    borderRadius="15px"
                                    bg={bgColor}
                                    justifyContent="space-between"
                                >
                                    <Flex align="center" mt="10px">
                                        <Avatar
                                            src={avatar2}
                                            w="50px"
                                            h="50px"
                                            borderRadius="50%"
                                            me="10px"
                                        />
                                        <Flex direction="column">
                                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                                                Sophie B.{" "}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems="center">
                                        <IconBox
                                            as="box"
                                            h={"30px"}
                                            w={"30px"}
                                            me="6px"
                                            color={iconTeal}
                                        >
                                            <AiOutlineLike h={"15px"} w={"15px"} color={iconTeal} style={{fontSize: '20px'}} />
                                        </IconBox>
                                    </Flex>
                                </Flex>

                                <Flex
                                    direction="row"
                                    w="100%"
                                    background="transparent"
                                    borderRadius="15px"
                                    bg={bgColor}
                                    justifyContent="space-between"
                                >
                                    <Flex align="center" mt="10px">
                                        <Avatar
                                            src={avatar1}
                                            w="50px"
                                            h="50px"
                                            borderRadius="50%"
                                            me="10px"
                                        />
                                        <Flex direction="column">
                                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                                                Diana B.{" "}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems="center">
                                        <IconBox
                                            as="box"
                                            h={"30px"}
                                            w={"30px"}
                                            me="6px"
                                            color={iconTeal}
                                        >
                                            <MdFavoriteBorder h={"15px"} w={"15px"} color={iconTeal} style={{fontSize: '20px'}} />
                                        </IconBox>
                                    </Flex>
                                </Flex>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={howClose}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            </Grid>

        </Flex >
    );
}

export default Feed;
