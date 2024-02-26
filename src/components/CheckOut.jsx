import { Button, DatePicker, Form, Input } from 'antd';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const CheckOut = ({handleCheckOut}) => {
    return (
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
              onFinish={handleCheckOut}
            //   onFinishFailed={onFinishFailed2}
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
                  label="Credit Card #"
                  name="creditCard"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Credit Card!",
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
                    className="p-4   bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
                  />
                </Form.Item>

                <Form.Item
                  label="Expiration Month"
                  name="month"
                  className="flex-1 w-[49%]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information",
                    },
                  ]}
                >
                  <DatePicker.MonthPicker
                    // placeholder="*Required Field"
                    className="p-4 bg-[#F4F1F1]
              rounded
              justify-start 
              border-none
              mt-[12px] w-[100%]
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
                  label="Expiration Year"
                  name="creditCard"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Information!",
                    },
                  ]}
                >
                  <DatePicker.YearPicker
                    placeholder="*Required Field"
                    className="p-4 bg-[#F4F1F1]
              rounded w-[100%]
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
                  label="State"
                  name="state"
                  className="flex-1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your state!",
                    },
                  ]}
                >
                  <Input
                    placeholder="*Required Field"
                    className="p-4 flex-1 bg-[#F4F1F1]
              rounded 
              justify-start 
              border-none w-[49%]
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
                      message: "Please input your Zip",
                    },
                  ]}
                >
                  <Input
                    placeholder="*Required Field"
                    className="p-4  bg-[#F4F1F1]
              rounded 
              justify-start 
              border-none
              mt-[12px] w-[49%]
              items-center 
              gap-4 inline-flex outline-none focus:border-none focus:bg-[#F4F1F1] hover:bg-[#F4F1F1]"
                  />
                </Form.Item>
             
              </div>
             

              <Form.Item>
                <div className='flex justify-center
                '>
                <Button className="bg-[#3BA6F6]  px-[100px] py-[20px] text-[18px] flex items-center gap-3 justify-center" type="primary" htmlType="submit" >
              Submit Payment <FaArrowRightLong />
            </Button>
                </div>
              
              </Form.Item>
            </Form>
          </div>
        </div>
    );
}

export default CheckOut;
