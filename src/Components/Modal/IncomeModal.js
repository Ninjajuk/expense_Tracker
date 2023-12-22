import React from "react";
import AddIncomeForm from "../Form/AddincomeForm";

const IncomeModal = ({ isOpen, onClose, updateFormData }) => {
  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    display: isOpen ? "block" : "none",
    zIndex: 1000 // Adjust the z-index as needed
  };

  const modalContentStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    wididth: "350px"
  };

  return (
    <div style={modalStyles} className="overflow-y-auto">
      <div style={modalContentStyles} className="">
        {/* <h2 className="text-2xl font-semibold mb-4">Income Form</h2> */}
        <AddIncomeForm updateFormData={updateFormData} />
        <button
          className="bg-red-500 mt-2 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default IncomeModal;
