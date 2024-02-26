import { useState } from "react";
import MembershipCart from "../components/MembershipCart";
import CompanyInformation from "../components/CompanyInformation";

const testPackage = {
    title:"Set Up Your DOT Corporate Account for Drug and Alcohol Testing",
    description:"The Department of Transportation (DOT) has strict requirements regarding maintaining a drug-free workplace. Stay compliant by enrolling in a consortium and registering with the Clearinghouse."
}
const EmployerTestPanel = () => {
    const [isActive ,setIsActive] = useState(false)

   const handleSelectMembership = ()=>{
    setIsActive(!isActive)
   }
   const handleCompanyInformation = (values) =>{
    console.log(values);

   }

   const handleCompanyInformationFailed = (errorInfo) =>{
    console.log(errorInfo);
   }
    return (
        <div className="lg:mx-[150px] mx-[10px]">
            <div>

            <h1 className="text-[38px] text-center">{testPackage.title}</h1>
            <p className="text-[16px] lg:w-[50%] mx-auto text-center">{testPackage.description}</p>
            </div>
            <div className="lg:flex gap-5 mt-[50px]">
                    <MembershipCart isActive={isActive} handleSelectMembership={handleSelectMembership} />
                    <MembershipCart isActive={isActive} handleSelectMembership={handleSelectMembership}/>
            </div>
            <div className="my-[100px]">
                <CompanyInformation handleCompanyInformation={handleCompanyInformation} handleCompanyInformationFailed={handleCompanyInformationFailed}/>
            </div>
        </div>
    );
}

export default EmployerTestPanel;
