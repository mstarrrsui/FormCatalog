import React from "react";
import Form from "../models/Form";

// const DATA_URL =
//   "http://localhost:3230/formslibrary/api/catalogs/find/forms/table";

interface FormFetcherResult {
  isLoading: boolean;
  error: Error | null;
  forms: Form[];
}

const useFormFetcher = (dataUrl: string): FormFetcherResult => {
  const [forms, setForms] = React.useState<Array<Form>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(dataUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error...");
          throw Error("Error fetching the data!!!");
        }
      })
      .then(formData => {
        setForms(formData.Data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [dataUrl]);
  return { isLoading, error, forms };
};

export default useFormFetcher;
