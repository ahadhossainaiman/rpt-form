import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

const UserInformation = ({
    handleUserInformation
}) => {
  return (
    <div className="shadow-lg rounded-lg mt-[75px]">
      <h1 className="bg-[#3BA6F6] text-[24px] pl-[24px] text-white rounded-tl-lg rounded-tr-lg py-[15px]">
        User Information
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
          onFinish={handleUserInformation}
        //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex gap-5">
            <Form.Item
              label="First Name"
              name="firstName"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
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
              label="Phone"
              name="phone"
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
                <span className="text-[#661C17] text-[12px]">
                  Note: Your certificate will be sent this email
                </span>
              </div>
            </Form.Item>
          </div>

          <div className="flex gap-5">
            <Form.Item
              label="Last Name"
              name="lastName"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
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
              label="Email"
              name="email"
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
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

          <div className="">
            <Form.Item
              label="Permission Level"
              name="permissionLevel"
              className="flex-1 w-[49%]"
              rules={[
                {
                  required: true,
                  message: "Please input your Information!",
                },
              ]}
            >
              <Select
                className="p-7 bg-[#F4F1F1]
              rounded w-[49%]
              mt-[12px]
            "
                placeholder="Select your Agency"
              >
                <Option value="admin">admin</Option>
                <Option value="user">user</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item>
          <Button className="bg-[#3BA6F6] px-[30px] py-[20px] text-[18px] flex items-center gap-3 justify-center" type="primary" htmlType="submit" >
              Continue <FaArrowRightLong />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserInformation;
