import {
  Box,
  Button,
  Flex,
  Container,
  Alert,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
import TicketCard from "./TicketCard";

export default function Tickets() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [err, setErr] = useState(false);
  const [sortOrdervalue,setSortOrderValue]=useState("")
  const [filterValue,setFiltervalue]=useState("")
  async function fetchAndUpdateData(sortOrdervalue,filterValue) {
    setLoading(true);
    try {
      let queryParams={};
      if(filterValue){
        queryParams.status=filterValue
      }
      if(sortOrdervalue){
        queryParams.sort="priority";
        queryParams.order=sortOrdervalue
      }
      let res = await axios({
        method: "get",
        url: ` http://localhost:3000/tickets`,
        params:queryParams,
      });
      let data = res?.data;
      setLoading(false);
      setTickets(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }
  useEffect(() => {
    fetchAndUpdateData(sortOrdervalue,filterValue);
  }, [sortOrdervalue,filterValue]);
  if (loading) {
    return <LoadingIndicator />;
  }
  if (err) {
    return <ErrorIndicator />;
  }
  return (
    <Container maxW="container.xl">
      <Flex direction="row-reverse" align="center">
        <Button
          variant="outline"
          colorScheme="red" 
          onClick={() => {
            navigate(`/ticket/create`);
          }}
          marginY={8}
        >
          Create Tickets
        </Button>
      </Flex>
      <Flex>
      <Select placeholder="Sort by priority" value={sortOrdervalue}
      onChange={(e)=>{setSortOrderValue(e.target.value)}}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
        
      </Select>
      <Select placeholder="Filter by Status" value={filterValue} 
      onChange={(e)=>{setFiltervalue(e.target.value)}}>
        <option value="progress">progress</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </Select>
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        {tickets?.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
