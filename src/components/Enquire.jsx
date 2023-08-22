import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, FormikProvider, useFormik } from "formik";
import HTextField from "./HTextField";
import * as yup from "yup";
import axios from "axios";
import { getMedia } from "@/firebase";
import { toast } from "react-hot-toast";

export default function EnquireDialog({ open, setOpen, data }) {
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      enquiry: "",
      subject: "New Enquiry",
      car: data.name,
      link: window.location.href,
      image: getMedia(data.id, data?.media?.[0]),
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Please enter your name"),
      phone: yup.string().required("Please enter your phone number"),
      email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Please enter your email address"),
      enquiry: yup.string().required("Please enter your enquiry"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_EMAIL_URL,
        headers: {},
        data: JSON.stringify(values),
      };

      axios
        .request(config)
        .then((response) => {
          resetForm();
          handleClose();
          toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request a call back</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form below and a member of our sales team will be in
            touch shortly.
          </DialogContentText>
          <FormikProvider value={formik}>
            <Form>
              <Stack spacing={4} mt={4}>
                <HTextField
                  name="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                />
                <HTextField
                  name="phone"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  type="number"
                />
                <HTextField
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                />
                <HTextField
                  name="enquiry"
                  label="Your Enquiry"
                  placeholder="Enter your enquiry"
                  multiline
                  minRows={4}
                />
              </Stack>
            </Form>
          </FormikProvider>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} disabled={formik.isSubmitting}>
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
