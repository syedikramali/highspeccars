import * as Yup from "yup";

const carValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  summary: Yup.string().required("Summary is required"),
  price: Yup.number()
    .required("Price is required")
    .min(1, "Price must be at least 1"),
  finance: Yup.number()
    .required("Finance is required")
    .min(1, "Finance must be at least 1"),
  year: Yup.number()
    .required("Year is required")
    .positive("Year must be a positive number")
    .integer("Year must be an integer"),
  mileage: Yup.number()
    .required("Mileage is required")
    .positive("Mileage must be a positive number")
    .integer("Mileage must be an integer"),
  make: Yup.string().required("Make is required"),
  model: Yup.string().required("Model is required"),
  bodyStyle: Yup.string().required("Body Style is required"),
  doors: Yup.string().required("Doors is required"),
  color: Yup.string().required("Color is required"),
  transmission: Yup.string().required("Transmission is required"),
  fuelType: Yup.string().required("Fuel Type is required"),
});

export default carValidationSchema;
