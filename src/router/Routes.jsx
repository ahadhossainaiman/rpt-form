import { createBrowserRouter } from "react-router-dom";
import IndividualInformationDotTest from "../pages/IndividualInformationDotTest";
import EmployerTestPanel from "../pages/EmployerTestPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndividualInformationDotTest />,
  },
  {
    path: "/a",
    element: <EmployerTestPanel/>,
  },
]);

export default router;
