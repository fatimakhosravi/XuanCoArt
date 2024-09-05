"use client";

import { AttachCircle, Edit, Setting2 } from "iconsax-react";
import React, { FC, useState } from "react";

const FormComponent: FC = () => {
  const [comment, setComment] = useState<string>("");
  const [publishedComments, setPublishedComments] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePublish = () => {
    if (comment.trim()) {
      setPublishedComments([...publishedComments, comment]);
      setComment("");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/*publish comment  */}
      <div className="bg-[#16295e] p-4 rounded-xl">
        <p>{publishedComments}</p>
      </div>

      {/* form sec */}
      <form>
        <div className="w-full border border-gray-400 gray-400 gray-400 rounded-xl">
          {/* first sec */}
          <div className="flex justify-end px-3 py-2 gray-400b border-b border-gray-400">
            <div className="flex justify-end items-center sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-400">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button
                  type="button"
                  className="p-2 rounded cursor-pointer hover:bg-[#30302f]"
                >
                  <AttachCircle variant="Bold" size="32" color="#f3c46d" />
                </button>
              </div>
              <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                <button
                  type="button"
                  className="p-2 rounded cursor-pointer hover:bg-[#30302f]"
                >
                  <Setting2 variant="Bold" size="32" color="#f5bb4f" />
                </button>
              </div>
            </div>
          </div>

          {/* text textarea */}
          <div className="p-4">
            <label form="editor" className="sr-only">
              add a message
            </label>
            <textarea
              value={comment}
              onChange={handleInputChange}
              id="editor"
              rows={8}
              className="p-4 block w-full border border-gray-400 focus:ring-0 gray-400 white rounded-md text-sm dark:bg-[#0000] dark:text-white dark:placeholder-[#ffff]"
              placeholder="Write an article..."
              required
            />
          </div>

          {/* publish post btn */}
          <div className="flex justify-end pb-4 pr-4">
            <button
              onClick={handlePublish}
              type="submit"
              className="px-5 py-2.5 text-center font-bold text-black bg-[#f5bb4f] hover:bg-[#e9cc98]  rounded-lg focus:ring-4"
            >
              Publish Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
