"use client"
import React from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

const page = () => {
  const editor = useCreateBlockNote();
  return (
    <div className="w-1/2 mx-auto h-screen">
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default page;
