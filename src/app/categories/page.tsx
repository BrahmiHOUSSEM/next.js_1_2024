"use client";
import React, { useEffect, useState } from "react";
import AdminOptions from "../components/adminOptions";
import AdminCheck from "../components/adminCheck";
import { redirect } from "next/navigation";
import { Fascinate_Inline } from "next/font/google";
import { useProfile } from "../components/useProfile";
import { toast } from "react-toastify";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const { isAdmin, loading } = useProfile();
  const fetchCategories = () => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto mt-20 dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (!isAdmin) {
    redirect("/");
  }

  const handleCategories = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = { name: categoryName };
    if (editCategory) {
      //@ts-ignore
      data._id = editCategory._id;
    }
    const id = toast.loading("creating ...");
    const response = await fetch("/api/categories", {
      method: editCategory ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    fetchCategories();

    if (response.ok) {
      toast.update(id, {
        render: "Category created",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      toast.update(id, {
        render: "Error on creating",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <section className="mt-8 max-w-md mx-auto">
      <AdminOptions admin={isAdmin} page="Categories" />
      <form className="mt-8" onSubmit={handleCategories}>
        <div className="flex gap-2 items-end">
          <div className="grow">
            <label>
              {editCategory
                ? `Update category name : ${editCategory.name}`
                : "New category name"}
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(ev) => setCategoryName(ev.target.value)}
            />
          </div>
          <div className="pb-2 !border border-transparent	">
            <button type="submit">{editCategory ? "Update" : "Create"}</button>
          </div>
        </div>
      </form>
      <label>Edit category:</label>
      {categories.length > 0 &&
        categories.map((c, index) => (
          <button
            onClick={() => {
              setEditCategory(c);
              setCategoryName(c.name);
            }}
            key={index}
            className="bg-gray-200 border rounded-xl mx-auto flex cursor-pointer px-4 py-2 mb-1"
          >
            <span>{c.name}</span>
          </button>
        ))}
    </section>
  );
};

export default Categories;
