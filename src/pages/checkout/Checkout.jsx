import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../../contexts/CartContext";
import { SuccessMessageModal } from "./components/SuccessMessageModal";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "./components/form/Label";
import { Input } from "./components/form/Input";
import { InputRadio } from "./components/form/InputRadio";
import { CashOnDeliveryMessage } from "./components/form/CashOnDeliveryMessage";
import { SummarySection } from "./components/SummarySection";

export function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  useEffect(
    function () {
      if (cartItems.length === 0) navigate("/");
    },
    [cartItems, navigate],
  );

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const [paymentMethod, setPaymentMethod] = useState("e-Money");

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <section className="px-6 sm:px-[39px] xl:px-[165px]">
      {isSubmitSuccessful && <SuccessMessageModal />}
      <Link
        to="/"
        className="mb-6 mt-4 inline-block text-base text-black/50 transition-colors hover:text-orange-700 sm:mt-12 xl:mb-10 xl:mt-20"
      >
        Go Back
      </Link>
      <div className="grid gap-8 xl:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white px-6 pb-8 pt-6 sm:px-7 sm:py-[30px] xl:col-span-2 xl:px-12 xl:pb-12 xl:pt-[54px]"
        >
          <h2 className="text-[1.75rem] font-bold uppercase tracking-[0.0625rem]">
            Checkout
          </h2>
          <div className="mt-8">
            <section>
              <h3 className="mb-4 text-xs uppercase tracking-[0.0625rem] text-orange-700">
                Billing Details
              </h3>
              <div className="wrapper grid gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <Label htmlFor="name" errors={errors} errorName="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Alexei Ward"
                    isInvalid={errors.name}
                    register={register("name", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("name");
                      },
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="email" errors={errors} errorName="email">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    placeholder="alexei@email.com"
                    isInvalid={errors.email}
                    register={register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Wrong format",
                      },
                      onChange: () => {
                        clearErrors("email");
                      },
                    })}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phoneNumber"
                    errors={errors}
                    errorName="phoneNumber"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="+1 202-555-0136"
                    isInvalid={errors.phoneNumber}
                    register={register("phoneNumber", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("phoneNumber");
                      },
                    })}
                  />
                </div>
              </div>
            </section>
            <section className="mt-8 sm:mt-[53px]">
              <h3 className="mb-4 text-xs uppercase tracking-[0.0625rem] text-orange-700">
                Shipping Info
              </h3>
              <div className="wrapper grid gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="address" errors={errors} errorName="address">
                    Your Adress
                  </Label>
                  <Input
                    id="address"
                    placeholder="1137 Williams Avenue"
                    isInvalid={errors.address}
                    register={register("address", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("address");
                      },
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode" errors={errors} errorName="zipCode">
                    Zip Code
                  </Label>
                  <Input
                    id="zipCode"
                    type="number"
                    placeholder="10001"
                    isInvalid={errors.zipCode}
                    register={register("zipCode", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("zipCode");
                      },
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="city" errors={errors} errorName="city">
                    City
                  </Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    isInvalid={errors.city}
                    register={register("city", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("city");
                      },
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="country" errors={errors} errorName="country">
                    Country
                  </Label>
                  <Input
                    id="country"
                    placeholder="United States"
                    isInvalid={errors.country}
                    register={register("country", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("country");
                      },
                    })}
                  />
                </div>
              </div>
            </section>
            <section>
              <h3 className="mb-4 mt-[61px] text-xs uppercase tracking-[0.0625rem] text-orange-700">
                Payment Details
              </h3>
              <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                <p className="text-[0.75rem] font-bold tracking-[-0.013125rem]">
                  Payment Method
                </p>
                <InputRadio
                  value="e-Money"
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                >
                  e-Money
                </InputRadio>
                <InputRadio
                  value="cash"
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                >
                  Cash on Delivery
                </InputRadio>
              </div>
              {paymentMethod === "e-Money" && (
                <div className="mt-8 grid w-full gap-6 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <Label
                      htmlFor="eMoneyNumber"
                      errors={errors}
                      errorName="eMoneyNumber"
                    >
                      e-Money Number
                    </Label>
                    <Input
                      id="eMoneyNumber"
                      type="number"
                      placeholder="238521993"
                      isInvalid={errors.eMoneyNumber}
                      register={register("eMoneyNumber", {
                        required: "This field is required",
                        onChange: () => {
                          clearErrors("eMoneyNumber");
                        },
                      })}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="eMoneyPin"
                      errors={errors}
                      errorName="eMoneyPin"
                    >
                      e-Money Pin
                    </Label>
                    <Input
                      id="eMoneyPin"
                      type="number"
                      placeholder="6891"
                      isInvalid={errors.eMoneyPin}
                      register={register("eMoneyPin", {
                        required: "This field is required",
                        onChange: () => {
                          clearErrors("eMoneyPin");
                        },
                      })}
                    />
                  </div>
                </div>
              )}
              {paymentMethod === "cash" && <CashOnDeliveryMessage />}
            </section>
          </div>
        </form>
        <SummarySection handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </section>
  );
}
