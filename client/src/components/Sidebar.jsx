import React from "react";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="w-1/4 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Dashboard</h2>
      <button className="block w-full mb-2 p-2 bg-gray-700" onClick={() => setActiveComponent("statistics")}>
        Statistics
      </button>
      <button className="block w-full mb-2 p-2 bg-gray-700" onClick={() => setActiveComponent("category")}>
        Category
      </button>
      <button className="block w-full mb-2 p-2 bg-gray-700" onClick={() => setActiveComponent("subcategory")}>
        Sub Category
      </button>
      <button className="block w-full mb-2 p-2 bg-gray-700" onClick={() => setActiveComponent("all")}>
        All Posts
      </button>
      <button className="block w-full mb-2 p-2 bg-gray-700" onClick={() => setActiveComponent("create")}>
        Create Post
      </button>
      <button className="block w-full p-2 bg-gray-700" onClick={() => setActiveComponent("update")}>
        Update/Delete Post
      </button>
      <button className="mt-4 block w-full p-2 bg-gray-700" onClick={() => setActiveComponent("CategoryList")}>
         Category List
      </button>
    </div>
  );
};

export default Sidebar;
