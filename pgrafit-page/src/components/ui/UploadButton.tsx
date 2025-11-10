import React from "react";

interface UploadButtonProps {
  loading?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  accept?: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  loading = false,
  onChange,
  label = "Inserir arquivo",
  accept = ".json,.xml",
}) => {
  return (
    <div className="flex justify-center mt-6">
      <label
        htmlFor="file-upload"
        className={`px-6 py-2 rounded-md text-white font-medium 
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#31756f] hover:bg-[#265b55]"
          } 
          transition-all duration-300 cursor-pointer`}
      >
        {loading ? "Convertendo XML..." : label}
      </label>

      <input
        id="file-upload"
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadButton;
