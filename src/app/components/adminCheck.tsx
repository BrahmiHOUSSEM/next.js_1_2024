"use client";
import React, { useEffect, useState } from "react";

const AdminCheck = () => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch("api/profile")
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, []);

  return admin;
};

export default AdminCheck;
