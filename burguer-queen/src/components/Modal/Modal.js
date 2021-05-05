import { CustomDialog, useDialog } from 'react-st-modal';
import React, { useState } from "react";

// The element to be shown in the modal window
function CustomDialogContent() {
  // use this hook to control the dialog
  const dialog = useDialog();

  const [value, setValue] = useState();
  
  const [value2, setValue2] = useState();


  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setValue2(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value+value2);
        }}
      >
        Custom button
      </button>
    </div>
  );
}

const CustomExample = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await CustomDialog(
            <CustomDialogContent />,
            {
              title: 'Custom Dialog',
              showCloseIcon: true,
            }
          );
          console.log("result",result);
        }}
      >
        Custom
      </button>
    </div>
  );
}


export default CustomExample;
