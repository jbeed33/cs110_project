import React, { useState } from "react";
import "./Filter.css";
import { FunnelIcon } from "@heroicons/react/24/outline";

/* Source: https://dev.to/taiwobello/how-to-create-a-react-tree-view-component-3ch2 */

const formData = [
  {
    key: "0",
    label: "Mode of Instruction",
    children: [
      {
        key: "0-0",
        label: "Online",
      },
      {
        key: "0-1",
        label: "In Person",
      },
    ],
  },
  {
    key: "1",
    label: "Subjects",
    children: [
      {
        key: "1-0",
        label: "Math",
      },
      {
        key: "1-1",
        label: "Physics",
      },
      {
        key: "1-2",
        label: "History",
      },
    ],
  },
  {
    key: "2",
    label: "Qualifications",
    children: [
      {
        key: "2-0",
        label: "High School Diploma",
      },
      {
        key: "2-1",
        label: "Bachelor's Degree",
      },
      {
        key: "2-3",
        label: "Master's Degree",
      },
      {
        key: "2-4",
        label: "PhD",
      },
    ],
  },
  {
    key: "3",
    label: "UC Campus",
    children: [
      {
        key: "3-0",
        label: "Riverside",
      },
      {
        key: "3-1",
        label: "Berkeley",
      },
      {
        key: "3-3",
        label: "Los Angeles",
      },
      {
        key: "3-5",
        label: "San Diego",
      },
      {
        key: "3-6",
        label: "Irvine",
      },
      {
        key: "3-7",
        label: "Davis",
      },
      {
        key: "3-8",
        label: "Merced",
      },
      {
        key: "3-9",
        label: "Santa Barbara",
      },
      {
        key: "3-10",
        label: "Santa Cruz",
      },
      {
        key: "3-11",
        label: "Davis",
      },
    ],
  },
];

function FormNode(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {props.node.key.length == 1 ? (
        <h2
          class="filter-form-group"
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          {props.node.label}
        </h2>
      ) : null}
      <ul>
        {props.node.children !== undefined
          ? props.node.children.map((node, i) => {
              return (
                isOpen && (
                  <div className="filter-form-group-options">
                    <input
                      id={node.label + i}
                      type="checkbox"
                      name={node.label}
                      value={node.label}
                    />
                    <label for={node.label + i}>{node.label}</label>

                    <FormNode node={node} key={node.key} />
                  </div>
                )
              );
            })
          : null}
      </ul>
    </>
  );
}

function Form(props) {
  return (
    <form>
      {props.formData.map((node) => {
        return (
          <>
            <FormNode node={node} key={node.key} />
          </>
        );
      })}
    </form>
  );
}

function Filter() {
  return (
    <div id="filter-container">
      <div id="filter-header">
        <FunnelIcon id="filter-header-icon" />
        <h2 id="filter-header-title">Filter</h2>
      </div>
      <Form formData={formData} />
    </div>
  );
}

export default Filter;
