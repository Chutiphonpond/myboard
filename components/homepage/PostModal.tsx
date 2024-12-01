import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const PostModal = ({ isOpen, setIsOpen, setIsUpdating }: any) => {
  const [type, setType] = React.useState<number | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const handlePost = async () => {
    if (!type || !title.trim() || !content.trim()) {
      setError("All fields are required.");
      return;
    }
    setError("");

    // Retrieve the token from localStorage
    const token = localStorage.getItem("access_token");

    if (!token) {
      setError("Authorization token is missing. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3333/posts/",
        {
          title,
          content,
          typeId: type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Post Successful:", response.data);
      setIsUpdating(true);
      setIsOpen(false);
    } catch (error) {
      console.error("Post Error:", error);
      setError("Failed to create the post. Please try again.");
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="text-lg font-semibold flex justify-between items-center">
              <p>Create Post</p>
              <RxCross2
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-4">
              <div className="mb-4">
                <select
                  name="type"
                  id="type"
                  className="w-full text-left text-gray-700 border rounded p-2 focus:outline-none"
                  onChange={(e) => setType(Number(e.target.value))}
                >
                  <option value="">Select Type</option>
                  <option value={1}>Food</option>
                  <option value={3}>History</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full mb-4 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder="What's on your mind..."
                  className="w-full h-32 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                className="rounded-lg border border-[#49A569] px-4 py-2 text-[#49A569] text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-lg bg-[#49A569] px-4 py-2 text-white font-semibold text-sm"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PostModal;
