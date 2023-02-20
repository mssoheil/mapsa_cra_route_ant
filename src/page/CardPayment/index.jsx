import React from "react";
// UI frameworks
import { Row, Col, Form, Input, Button } from "antd";
// Hooks
import { usePayment } from "./index.hook";
// Styles
import { StyledWrapper } from "./index.styles";

const CardPayment = () => {
  const {
    cardValidator,
    cvv2Validator,
    yearValidator,
    monthValidator,
    pin2Validator,
    cvv2Ref,
    yearRef,
    monthRef,
    pin2Ref,
    handleChangeCard,
    handleChangeCvv2,
    handleChangeMonth,
    handleChangeYear,
  } = usePayment();

  return (
    <StyledWrapper>
      <Col span={12} offset={6}>
        <Form name="card-payment">
          <Form.Item
            label="شماره کارت"
            name="cardNumber"
            rules={[
              {
                validator: cardValidator,
              },
            ]}
          >
            <Input
              placeholder="شماره کارت"
              maxLength={16}
              onChange={handleChangeCard}
            />
          </Form.Item>

          <Form.Item
            label="CVV2"
            name="cvv2"
            rules={[
              {
                validator: cvv2Validator,
              },
            ]}
          >
            <Input.Password
              ref={cvv2Ref}
              onChange={handleChangeCvv2}
              placeholder="cvv2"
              maxLength={5}
            />
          </Form.Item>

          <Form.Item label="تاریخ انقضا">
            <Row>
              <Col span={10}>
                <Form.Item
                  name="month"
                  rules={[
                    {
                      validator: monthValidator,
                    },
                  ]}
                >
                  <Input
                    ref={monthRef}
                    onChange={handleChangeMonth}
                    placeholder="ماه"
                    maxLength={2}
                  />
                </Form.Item>
              </Col>
              <Col span={2} offset={1}>
                {" "}
                /{" "}
              </Col>
              <Col span={10}>
                <Form.Item
                  name="year"
                  rules={[
                    {
                      validator: yearValidator,
                    },
                  ]}
                >
                  <Input
                    onChange={handleChangeYear}
                    ref={yearRef}
                    placeholder="سال"
                    maxLength={2}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item
                label="رمز دوم"
                name="pin2"
                rules={[
                  {
                    validator: pin2Validator,
                  },
                ]}
              >
                <Input.Password ref={pin2Ref} placeholder="رمز دوم" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button type="primary">درخواست رمز</Button>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8}>
              <Button htmlType="submit" type="primary">
                پرداخت
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </StyledWrapper>
  );
};

export default CardPayment;
