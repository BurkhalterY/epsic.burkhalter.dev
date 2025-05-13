<style>
.btcpay-form {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btcpay-form--inline {
  flex-direction: row;
}
.btcpay-form--block {
  flex-direction: column;
}
.btcpay-form--inline .submit {
  margin-left: 15px;
}
.btcpay-form--block select {
  margin-bottom: 10px;
}
.btcpay-form .btcpay-custom-container {
  text-align: center;
}
.btcpay-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btcpay-form .plus-minus {
  cursor: pointer;
  font-size: 25px;
  line-height: 25px;
  background: #dfe0e1;
  height: 30px;
  width: 45px;
  border: none;
  border-radius: 60px;
  margin: auto 5px;
  display: inline-flex;
  justify-content: center;
}
.btcpay-form select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: currentColor;
  background: transparent;
  border: 1px solid transparent;
  display: block;
  padding: 1px;
  margin-left: auto;
  margin-right: auto;
  font-size: 11px;
  cursor: pointer;
}
.btcpay-form select:hover {
  border-color: #ccc;
}
.btcpay-form option {
  color: #000;
  background: rgba(0, 0, 0, 0.1);
}
.btcpay-input-price {
  -moz-appearance: textfield;
  border: none;
  box-shadow: none;
  text-align: center;
  font-size: 25px;
  margin: auto;
  border-radius: 5px;
  line-height: 35px;
  background: #fff;
}
.btcpay-input-price::-webkit-outer-spin-button,
.btcpay-input-price::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<template>
  <form
    method="POST"
    action="https://btcpayserver.burkhalter.dev/api/v1/invoices"
    class="btcpay-form btcpay-form--block"
    target="_blank"
  >
    <input
      type="hidden"
      name="storeId"
      value="3SVVi7o9AAWCFeeA39n7H8iw6K4BsG4hrQxJPW8CnNbj"
    />
    <input type="hidden" name="checkoutDesc" value="Tip" />
    <input
      type="hidden"
      name="browserRedirect"
      value="https://epsic.burkhalter.dev/"
    />
    <input type="hidden" name="currency" value="CHF" />
    <button
      type="submit"
      class="submit"
      name="submit"
      style="
        min-width: 168px;
        min-height: 46px;
        border-radius: 4px;
        border-style: none;
        background-color: #0f3b21;
        cursor: pointer;
      "
      title="Tip with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
    >
      <span style="color: #fff">Tip me with</span>
      <img
        alt="BTCPay Server"
        src="https://btcpayserver.burkhalter.dev/img/paybutton/logo.svg"
        style="
          height: 46px;
          display: inline-block;
          padding: 5% 0 5% 5px;
          margin: auto;
          vertical-align: middle;
        "
      />
    </button>
  </form>
</template>
