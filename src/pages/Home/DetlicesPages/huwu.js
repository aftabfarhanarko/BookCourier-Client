// import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link, useParams } from "react-router";
import useAxiosSchore from "../../../hooks/useAxiosSchore";
import { motion } from "framer-motion";
import { GoDuplicate } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import LoadingSpinner from "../../../shared/LoadingSpinner ";
import TextType from "../../../utils/TextType";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "sonner";

const DetlicesPages = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axioscehore = useAxiosSchore();
  const refene = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Load Single Book
  const { data: book = {}, isLoading: newLoding } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axioscehore.get(`/oneBooks/${id}`);
      return res.data;
    },
  });

  // Load Related Books
  const { data: relatedBooks = [], isLoading } = useQuery({
    queryKey: ["related", book?.category],
    enabled: !!book?.category,
    queryFn: async () => {
      const res = await axioscehore.get(
        `catogryfinde?category=${book?.category}`
      );
      return res.data;
    },
  });
  //   console.log(relatedBooks);

  const habdelModalOpen = () => {
    refene.current.showModal();
  };

  const handelSeawdg = (customerInfo) => {
    console.log(customerInfo);
    const orderInfo = {
      name: customerInfo.name,
      email: customerInfo.email,
      address: customerInfo.address,
      phoneNumber: customerInfo.phoneNumber,
      book,
    };

    axioscehore.post("ordernow", orderInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Order Successfully ");
        // Close the dialog
        if (refene.current) {
          refene.current.close(); // <-- use close(), not closeModal()
        }
      }
    });
  };
 
 
//  ------------------------------------------------------------------------------------------
