import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddTwoToneIcon from "@mui/icons-material/PlaylistAddTwoTone";
import SyncAltTwoToneIcon from "@mui/icons-material/SyncAltTwoTone";
import PrivateLayOut from "./Layout/PrivateLayOut";
import { useNavigate } from "react-router-dom";
const DisplayTask = () => {
  const navigate = useNavigate();

  const taskData = useSelector((state) => state.task[0]) || [];
  const handleUpdate = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const requiredTask = taskData.find((task) => task.task_id == id);
    navigate("/tasks/update", { state: requiredTask });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const taskId = e.target.value;
    navigate("/tasks/delete", { state: taskId });
  };
  return (
    <div>
      <PrivateLayOut />

      <div className="addNew">
        <Button
          startIcon={<PlaylistAddTwoToneIcon />}
          onClick={() => navigate("/tasks/add")}
        >
          Add new Task
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          {taskData.length == 0 ? (
            <caption>No tasks</caption>
          ) : (
            <caption>This is the end of your tasks</caption>
          )}
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell align="center">Task Id</TableCell>
              <TableCell align="center">Task Deadline</TableCell>
              <TableCell align="center">Task Description</TableCell>

              <TableCell align="center">Task Status</TableCell>
              <TableCell align="center">Update Task</TableCell>
              <TableCell align="center"> Delete Task </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskData.map((row) => (
              <TableRow
                key={row.task_id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 1 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.task}
                </TableCell>
                <TableCell align="center">{row.task_id}</TableCell>
                <TableCell align="center">{row.deadline}</TableCell>
                <TableCell align="center">{row.description}</TableCell>

                <TableCell align="center">{row.select}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="text"
                    onClick={handleUpdate}
                    startIcon={<SyncAltTwoToneIcon />}
                    value={row.task_id}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    value={row.task_id}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayTask;
