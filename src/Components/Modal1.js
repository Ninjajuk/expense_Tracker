import { Fragment, useRef, useState } from "react";

export default function Modal1() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-overlay" onClick={() => setOpen(false)}></div>
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header flex items-center border-b border-gray-300 p-4">
                <div className="modal-icon bg-red-100 p-3 rounded-full flex-shrink-0">
                  {/* <ExclamationTriangleIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  /> */}
                </div>
                <h3 className="modal-title text-base font-semibold text-gray-900">
                  Deactivate account
                </h3>
              </div>
              <div className="modal-body p-4">
                <p className="modal-text text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
              <div className="modal-footer flex justify-end p-4">
                <button
                  type="button"
                  className="modal-button modal-button-danger bg-red-600 text-white hover:bg-red-500"
                  onClick={() => setOpen(false)}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="modal-button modal-button-default bg-gray-50 text-gray-900 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
