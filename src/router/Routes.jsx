import { createBrowserRouter } from "react-router-dom";
import IndividualInformationDotTest from "../pages/IndividualInformationDotTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndividualInformationDotTest />,
  },
]);

export default router;
