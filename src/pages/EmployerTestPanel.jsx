import { useState } from "react";
import MembershipCart from "../components/MembershipCart";
import CompanyInformation from "../components/CompanyInformation";
import UserInformation from "../components/UserInformation";
import CheckOut from "../components/CheckOut";

const testPackage = {
    title:"Set Up Your DOT Corporate Account for Drug and Alcohol Testing",
    description:"The Department of Transportation (DOT) has strict requirements regarding maintaining a drug-free workplace. Stay compliant by enrolling in a consortium and registering with the Clearinghouse."
}
const EmployerTestPanel = () => {
    const [isActive ,setIsActive] = useState(false);
    const [isCompanyInformation,setIsCompanyInformation] = useState(false);
    const [isUserInformation,setIsInformation] = useState(false);

   const handleSelectMembership = ()=>{
    setIsActive(!isActive)
   }
   const handleCompanyInformation = (values) =>{
    console.log(values);
    setIsCompanyInformation(!isCompanyInformation)

   }

   const handleCompanyInformationFailed = (errorInfo) =>{
    console.log(errorInfo);
   }

   const handleUserInformation = (values) =>{
    console.log(values);
    setIsInformation(!isUserInformation)
   }

   const handleCheckOut = (values) =>{
    console.log(values);
   }
    return (
        <div className="lg:mx-[150px] mx-[30px]">
            <div className="mt-[84px]">

            <h1 className="text-[38px] text-center">{testPackage.title}</h1>
            <p className="text-[16px] lg:w-[50%] mx-auto text-center">{testPackage.description}</p>
            </div>
            <div className="lg:flex gap-5 mt-[50px]">
                    <MembershipCart isActive={isActive} handleSelectMembership={handleSelectMembership} />
                    <MembershipCart isActive={isActive} handleSelectMembership={handleSelectMembership}/>
            </div>
            <div className="my-[100px]">
                <CompanyInformation handleCompanyInformation={handleCompanyInformation} handleCompanyInformationFailed={handleCompanyInformationFailed}/>

                {
                    isCompanyInformation && <UserInformation handleUserInformation={handleUserInformation}/>
                }
                {
                    isUserInformation &&  <CheckOut handleCheckOut={handleCheckOut}/>
                }
               
            </div>
        </div>
    );
}

export default EmployerTestPanel;
