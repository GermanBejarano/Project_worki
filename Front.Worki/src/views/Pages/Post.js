import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ChangeUrl from '../../variables/ChangeUrl';

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Post(props) {
  const textColor = useColorModeValue("gray.700", "white");

  const handleAddPost = () => {
    ChangeUrl(props, '/admin/addpost')
  };


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} style={{ marginTop: '20px' }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">

          <Flex direction="column" w="100%">
            <Flex justifyContent="space-between" mb="21px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Posts
              </Text>
              <Button p="0px" bg="transparent" onClick={handleAddPost} >
                <Icon as={AiOutlinePlusCircle} color="gray.400" cursor="pointer" size="large"  style={{fontSize: '35px'}} />
              </Button>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">Multimedia</Th>
                <Th color="gray.400">Titulo</Th>
                <Th color="gray.400">Estado</Th>
                <Th color="gray.400">Descripcion</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Post;
