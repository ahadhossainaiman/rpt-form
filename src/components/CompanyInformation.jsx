import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";

const CompanyInformation = ({ handleCompanyInformation, handleCompanyInformationFailed }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <h1 className="bg-[#3BA6F6] text-[24px] pl-[24px] text-white rounded-tl-lg rounded-tr-lg py-[15px]">
        Company Information
      </h1>
      <div className="p-[24px]">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleCompanyInformation}
          onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex gap-5">
            <Form.Item
              label="Company Name"
              name="companyName"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Name!",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded  
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>

            {/* <Form.Item
              label="Company Address"
              name="company-address"
              className="flex-1"
              // rules={[
              //   {
              //     required: true,
                
              //     message: "Please input your Company Address!",
              //   },
              // ]}
            >
              <Input
              type="text"
                placeholder="*Required Field"
                className="p-4 bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
              <span className="text-[#661C17] text-[12px]">Note: **Physical address required - P.O. boxes not accepted**</span>
            </Form.Item> */}

<Form.Item
              label="Company Address"
              name="company-address"
              className="flex-1 w-[100%]"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Email ",
                },
              ]}
            >
              <div className="flex flex-col">
                
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
              <span className="text-[#661C17] text-[12px]">Note: Your certificate will be sent this email</span>
              </div>
            
            </Form.Item>
          </div>

          <div className="flex gap-5">
            {/* <Form.Item
              label="Agency"
              name="agency"
              className="flex-1"
              rules={[
                {
                  required: true,
                 
                  message: "Please input your Agency!",
                },
              ]}
            >
              <Select
                className="p-7 bg-[#F4F1F1]
              rounded 
              mt-[12px]
            "
                placeholder="Select your Agency"
              >
                <Option value="usa">USA</Option>
                <Option value="canada">Canada</Option>
                <Option value="uk">UK</Option>
              </Select>
              <span  className="text-[#661C17] text-[12px]">Note: **The Clearinghouse is a federal mandate of the Federal Motor Carrier Safety Administration (FMCSA). The Clearinghouse is not regulated by any DOT agency besides FMCSA**</span>
            </Form.Item> */}

<Form.Item
              label="Agency"
              name="c-agency"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Information!",
                },
              ]}
            >
              <Select
                className="p-7 bg-[#F4F1F1]
              rounded 
              mt-[12px]
            "
                placeholder="Select your Agency"
              >
                <Option value="usa">USA</Option>
                <Option value="canada">Canada</Option>
                <Option value="uk">UK</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Company City"
              name="companyCity"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Company City",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                type="text"
                className="p-4 bg-[#F4F1F1]

              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>
          </div>

          <div className="flex gap-5">
            <Form.Item
              label="Contact First Name "
              name="contactFirstName "
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Information!",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>

            <Form.Item
              label="Company State"
              name="companyState"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Information!",
                },
              ]}
            >
              <Select
                className="p-7 bg-[#F4F1F1]
              rounded 
              mt-[12px]
            "
                placeholder="Select your Agency"
              >
                <Option value="usa">USA</Option>
                <Option value="canada">Canada</Option>
                <Option value="uk">UK</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex gap-5">
            <Form.Item
              label="Contact Last Name"
              name="contactLastName"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Contact Last Name",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>

            <Form.Item
              label="Company Zip "
              name="CompanyZip"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Zip",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                className="p-4  bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>
          </div>
          <div className="flex gap-5">
          <Form.Item
              label="Primary Cell Phone #"
              name="primaryPhone"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Primary Phone!",
                },
              ]}
            >
              <Input
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>

            <Form.Item
              label="Apprx. # of Drug Tests to be Completed Each Year"
              name="TestsCompletedEachYear"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your information",
                },
              ]}
            >
               <Select
                className="p-7 bg-[#F4F1F1]
              rounded 
              mt-[12px]
            "
                placeholder="Select your Agency"
              >
                <Option value="usa">USA</Option>
                <Option value="canada">Canada</Option>
                <Option value="uk">UK</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="">
            <Form.Item
              label="Secondary Phone #"
              name="secondaryPhone"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Secondary Phone!",
                },
              ]}
            >
              <Input
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded w-[49%] 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>
          </div>
          <div className="">
            <Form.Item
              label="Company Email "
              name="companyEmail "
              className="flex-1 w-[100%]"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Email ",
                },
              ]}
            >
              <div className="flex flex-col">
                
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded w-[49%] 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
              <span className="text-[#661C17] text-[12px]">Note: Your certificate will be sent this email</span>
              </div>
            
            </Form.Item>
            
                
          </div>
          <div className="">
            <Form.Item
              label="Number of Employees"
              name="numberOfEmployees"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Number of Employees!",
                },
              ]}
            >
              <Input
                placeholder="*Required Field"
                className="p-4 flex-1 bg-[#F4F1F1]
              rounded w-[49%] 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button className="bg-[#3BA6F6]" type="primary" htmlType="submit">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CompanyInformation;
