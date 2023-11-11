import { ListContentHeader } from "../../../components/layout/ListContentHeader";
import TodoList from "../../../components/pages/TodoList/index";

export const metadata = {
  title: "Today - Todo",
  description: "Your personal Todo list APP",
};

const DUMMY_DATA = [
  {
    id: 1,
    content: "2learn React.js",
    due: "2024-11-01",
    project: "learn",
    isChecked: false,
    priority: "P1",
  },
  {
    id: 2,
    content: "4learn React.js",
    due: "2021-01-01",
    project: "learn",
    projectId: 1000,
    isChecked: false,
    priority: "P1",
  },
  {
    id: 3,
    content: "2learn React.js",
    due: "2024-01-01",
    project: "learn",
    description: "THis is what",

    isChecked: false,
    priority: "P1",
    label: "Reading",
  },
  {
    id: 4,
    content: "6learn React.js",
    due: "2024-01-01",
    project: "learn",
    description: "THis is what",

    projectId: 1000,
    isChecked: true,
    priority: "P1",
    label: "Reading",
  },
  {
    id: 5,
    content: "8learn React.js",
    due: "2024-01-01",
    description: "THis is what",
    projectId: 1000,
    isChecked: false,
    priority: "P2",
    label: "Reading",
  },
  {
    id: 6,
    content: "learn React.js",
    due: "2024-01-01",
    project: "learn",
    projectId: 1000,
    isChecked: false,
    priority: "P1",
    label: "Reading",
  },
];


function Today() {
  return (
    <>
      <ListContentHeader title={"Today"} />
      <TodoList datas={DUMMY_DATA}/>
    </>
  );
}

export default Today;
