import Men from "./images/boy.jpg";
import Women from "./images/girl.jpg";
import uuid from "react-uuid";
import cardData from "./card.json";
const date = new Date().toLocaleDateString("en-in", {
  day: "numeric",
  year: "numeric",
  month: "numeric",
});
const newdate = date.replaceAll("/", ".");
const data = {
  taskList: [
    {
      groupName: "Drag",
      tasks: [],
    },
    {
      groupName: "Drop",
      tasks: [
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Expiring",
          category: "label",
        },
        {
          id: uuid(),
          subtype: "progressBarField",
          // options: {
          //   "Option 1": "Option 1",
          //   "Option 2": "Option 2",
          //   "Option 3": "Option 3",
          // },
          options: [
            {
              text: "Option 1",
              label: uuid(),
            },
            {
              text: "Option 2",
              label: uuid(),
            },
            {
              text: "Option 3",
              label: uuid(),
            },
          ],
          category: "progressBarEvent",
          steps: "1",
        },
        {
          id: uuid(),
          subtype: "circularBarField",
          category: "circularBarEvent",
          percent: "10",
        },
        {
          id: uuid(),
          subtype: "checkboxField",
          options: [
            {
              text: "appointmentTime",
              label: "00t1v4",
            },
            {
              text: "appointmentTime",
              label: "00t1v5",
            },
            {
              text: "appointmentTime",
              label: "00t1v6",
            },
          ],

          category: "groupInputEvent",
        },
        // {
        //   id: uuid(),
        //   text: { "Option 1": "Text Field", "Option 2": "Text Field" },
        //   subtype: "CustomImagelabelField",
        //   image: Men,
        //   subText: {
        //     "Option 1": "Title",
        //     "Option 2": "Title",
        //   },
        //   gender: "Male",
        //   category: "candidateFullBodyCustomcard",
        // },
        // {
        //   id: uuid(),
        //   text: { "Option 1": "Text Field", "Option 2": "Text Field" },
        //   subtype: "CustomImagelabelField",
        //   image: Women,
        //   subText: {
        //     "Option 1": "Title",
        //     "Option 2": "Title",
        //   },
        //   gender: "Female",
        //   category: "candidateFullBodyCustomcard",
        // },

        {
          id: uuid(),
          text: "Title",
          subtype: "EmoticonField",
          options: [
            {
              text: "Option 1",
              label: uuid(),
            },
            {
              text: "Option 2",
              label: uuid(),
            },
            {
              text: "Option 3",
              label: uuid(),
            },
          ],
          category: "groupInputEvent",
        },

        {
          id: uuid(),
          subtype: "datePickerField",
          text: newdate,
          category: "dateInput",
        },

        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Scheduled",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Published",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "LowRisk",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "MediumRisk",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Draft",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subText: "Body",
          subtype: "labelField",
          category: "titleBodyLabel",
        },
        {
          id: uuid(),
          text: "Title",
          subText: "Body",
          subtype: "labelField",
          editable: true,
          toggle: "true",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          subText: {
            "Option 1": "Body",
            "Option 2": "Body",
            "Option 3": "Body",
            "Option 4": "Body",
          },
          category: "groupTitleBodyLabel",
        },
        {
          id: uuid(),
          subtype: "labelField",
          subText: {
            "Option 1": "Body",
            "Option 2": "Body",
            "Option 3": "Body",
            "Option 4": "Body",
            "Option 5": "Body",
            "Option 6": "Body",
          },
          category: "groupBodyLabel",
        },
        {
          id: uuid(),
          text: "Title",
          subText: "Body",
          category: "phoneIconLabel",
          subtype: "labelField",
        },
        {
          id: uuid(),
          text: "Submit",
          subtype: "SubmitButtonField",
          category: "label",
        },

        {
          id: uuid(),
          subtype: "inputActionField",
          text: "100",
        },

        {
          id: uuid(),
          text: "Back",
          subtype: "BackButtonField",
          category: "label",
        },
        {
          subtype: "InputFieldType",
          id: uuid(),
          text: "Title",
          url: "",
          fileName: "",
          tileEvent: true,
        },
        {
          id: uuid(),
          subtype: "radioButtonField",
          options: [
            {
              text: "[A]",
              label: uuid(),
            },
            {
              text: "[B]",
              label: uuid(),
            },
            {
              text: "[C]",
              label: uuid(),
            },
          ],
          category: "groupInputEvent",
        },

        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Accepted",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Active",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Cancelled",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "High Risk",
          category: "label",
        },
        {
          id: uuid(),
          text: "Title",
          subtype: "labelField",
          content: "Rejected",
          category: "label",
        },
      ],
    },
  ],
  tileProperties: "",
  // CareCardData: cardData,
};
export default data;
