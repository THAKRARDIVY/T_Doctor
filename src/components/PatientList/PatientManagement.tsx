import { useState } from "react";
import PatientFormModal from "./PatientFormModal";
import PatientList from "./PatientList";
import { Button, Dialog, DialogContent, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PatientManagement() {
  // State to manage the list of patients
  const [patients, setPatients] = useState<{ id: number; name: string }[]>([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // State to manage the form inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // Handle form submission to add a new patient
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new patient object
    const newPatient = {
      id: patients.length + 1,
      name: name,
    };

    // Add the new patient to the patients list
    setPatients([...patients, newPatient]);

    // Reset form fields
    setName("");
    setAge("");
    setGender("");
  };

  return (
    <div>
      {/* <h1>Manage Patients</h1> */}
      <header className="text-white p-4 flex flex-row">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-black">Patients</h1>
        </div>
        <Tooltip  title="Add Patient">
          <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon />
          </Button>
        </Tooltip>
      </header>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "600px", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <PatientFormModal
            setPatients={setPatients}
            patients={patients}
            setName={setName}
            setGender={setGender}
            setAge={setAge}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>

      <PatientList patients={patients} />
    </div>
  );
}
