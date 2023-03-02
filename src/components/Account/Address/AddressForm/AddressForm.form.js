import * as Yup from "yup";

export function initialValues(address) {
  return {
    title: address?.title || "",
    name: address?.name || "",
    address: address?.address || "",
    city: address?.city || "",
    state: address?.state || "",
    postal_code: address?.postal_code || "",
    phone: address?.phone || "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    phone: Yup.number().required(true),
  });
}
