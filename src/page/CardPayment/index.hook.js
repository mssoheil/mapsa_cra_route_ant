import React from "react";

export function usePayment() {
  const cvv2Ref = React.useRef(null);
  const yearRef = React.useRef(null);
  const monthRef = React.useRef(null);
  const pin2Ref = React.useRef(null);

  const [cardNumber, setCardNumber] = React.useState("");
  const [cvv2, setCvv2] = React.useState("");
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  function handleChangeCard(event) {
    const { value } = event.target;
    setCardNumber(value);
  }

  function handleChangeCvv2(event) {
    const { value } = event.target;
    setCvv2(value);
  }

  function handleChangeYear(event) {
    const { value } = event.target;
    setYear(value);
  }

  function handleChangeMonth(event) {
    const { value } = event.target;
    setMonth(value);
  }

  React.useEffect(() => {
    if (cardNumber.length === 16) {
      cvv2Ref.current.focus();
    }
  }, [cardNumber]);

  React.useEffect(() => {
    if (cvv2.length === 5) {
      monthRef.current.focus();
    }
  }, [cvv2]);

  React.useEffect(() => {
    if (year.length === 2) {
      pin2Ref.current.focus();
    }
  }, [year]);

  React.useEffect(() => {
    if (month.length === 2) {
      yearRef.current.focus();
    }
  }, [month]);

  function cardValidator(_, value) {
    if (!value) {
      return Promise.reject("شماره کارت را وارد کنید");
    }
    if (isNaN(value) || value.length !== 16) {
      return Promise.reject("مقدار نامعتبر است");
    }
    return Promise.resolve();
  }

  function cvv2Validator(_, value) {
    if (!value) {
      return Promise.reject("cvv2 را وارد کنید");
    }

    if (isNaN(value) || value.length < 3) {
      return Promise.reject("مقدار نامعتبر است");
    }

    return Promise.resolve();
  }

  function yearValidator(_, value) {
    if (!value) {
      return Promise.reject("سال را وارد کنید");
    }

    if (isNaN(value) || value.length !== 2) {
      return Promise.reject("مقدار نامعتبر است");
    }

    return Promise.resolve();
  }

  function monthValidator(_, value) {
    if (!value) {
      return Promise.reject("ماه را وارد کنید");
    }

    if (isNaN(value) || value.length !== 2) {
      return Promise.reject("مقدار نامعتبر است");
    }

    return Promise.resolve();
  }

  function pin2Validator(_, value) {
    if (!value) {
      return Promise.reject("سال را وارد کنید");
    }

    if (isNaN(value)) {
      return Promise.reject("مقدار نامعتبر است");
    }

    return Promise.resolve();
  }

  return {
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
  };
}
