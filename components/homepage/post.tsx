import React from "react";
import UserConfig from "../../configs/UserConfig.json";
import TypeConfig from "../../configs/TypeConfig.json";
import { FaRegCommentDots } from "react-icons/fa";

const Post = ({ id, title, content, user, type, setComments }: any) => {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg p-5 mt-1">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-[14px] font-medium text-[#939494]">
            {UserConfig[user]}
          </p>
        </div>
      </div>
      <div className="px-[8px] py-[4px] bg-[#F3F3F3] rounded-2xl w-fit">
        <p className="text-xs text-[#4A4A4A]">{TypeConfig[type]}</p>
      </div>

      {/* Content */}
      <div className="mb-4 mt-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>

      {/* Footer */}
      <div className="border-t pt-3 flex items-center gap-2">
        <FaRegCommentDots
          onClick={() => {
            setComments(id);
          }}
        />
        <span className="text-sm text-gray-500">32 Comments</span>
      </div>
    </div>
  );
};

export default Post;
