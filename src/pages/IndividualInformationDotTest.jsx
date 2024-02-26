import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import { useState } from "react";

const IndividualInformationDotTest = () => {
  const [individualInformation, setIndividualInformation] = useState("");
  const onFinish = (values) => {
    setIndividualInformation(values);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish2 = (values) => {
    setIndividualInformation(values);
    console.log("Success:", values);
  };
  const onFinishFailed2 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="mx-[150px]">
      <div className="shadow-lg rounded-lg">
        <h1 className="bg-[#3BA6F6] text-[24px] pl-[24px] text-white rounded-tl-lg rounded-tr-lg py-[15px]">
          Individual Information for a DOT Test
        </h1>
        <div className="p-[24px]">
          <Form
            name="basic"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 40 }}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex gap-5">
              <Form.Item
                label="First Name"
                name="fastName"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
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
                label="Last Name"
                name="lastName"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  placeholder="*Required Field"
                  className="p-4   bg-[#F4F1F1]
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
                label="Test Order Form Email"
                name="orderEmail"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
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
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  placeholder="*Required Field"
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
                label="Company Name"
                name="companyName"
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
                label="Company Contact Name"
                name="companyContactName"
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
                label="Company Phone Number"
                name="companyPhoneNumber"
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
                label="Company Address "
                name="individualCompanyAddress"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your information",
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
                label="DOT Agency"
                name="dotAgency"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
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
                label="SSN"
                name="ssn"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your information",
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
            <div className="">
              <Form.Item
                label="Date Of Birth"
                name="dateOfBirth"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <DatePicker
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
                label="Reason for Test"
                name="testReason"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
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
            <div className="">
              <Form.Item
                label="Send Test Results To"
                name="resultEmail"
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  placeholder="*Required Email"
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

      {individualInformation && (
        <div className="shadow-lg rounded-lg mt-[75px]">
          <h1 className="bg-[#3BA6F6] text-[24px] pl-[24px] text-white rounded-tl-lg rounded-tr-lg py-[15px]">
            Payment Information
          </h1>
          <div className="p-[24px]">
            <Form
              name="basic"
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 40 }}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
              autoComplete="off"
            >
              <div className="flex gap-5">
                <Form.Item
                  label="First Name"
                  name="fastName"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
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
                  label="Last Name"
                  name="lastName"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    placeholder="*Required Field"
                    className="p-4   bg-[#F4F1F1]
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
                  label="Email"
                  name="email"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
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
                  label="Phone Number"
                  name="phoneNumber"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
                    },
                  ]}
                >
                  <Input
                    placeholder="*Required Field"
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
                  label="Address"
                  name="address"
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
                  label="Credit Card"
                  name="creditCard"
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
                  label="City"
                  name="city"
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
                  label="Expiration Month "
                  name="expirationMonth"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
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
                  label="State"
                  name="state"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
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
                  label="Expiration Year "
                  name="expirationYear"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
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
              <div className="">
                <Form.Item
                  label="Zip "
                  name="zip"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
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
                <Form.Item
                  label="CVV2 "
                  name="cvv2"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
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
              <div className="">
                <Form.Item
                  label="  Notes/Comments"
                  name="testReason"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Type in any additional comments/notes here..."
                    className="p-4 flex-1 bg-[#F4F1F1]
              rounded w-[100%] 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  className="bg-[#3BA6F6]"
                  type="primary"
                  htmlType="submit"
                >
                  Submit Payment
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualInformationDotTest;
