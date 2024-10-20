import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "./components/form/Input";
import { SummarySection } from "./components/SummarySection";

export function Checkout() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
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
      <Link
        to="/"
        className="mb-6 mt-4 inline-block text-base text-black/50 xl:mb-14"
      >
        Go Back
      </Link>
      <div className="grid gap-8 xl:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white px-6 py-8 xl:col-span-2"
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="name"
                      className={`${errors.name ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Name
                    </label>
                    {errors.name && (
                      <p className="text-red">{errors.name?.message}</p>
                    )}
                  </div>
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="email"
                      className={`${errors.email ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Email Address
                    </label>
                    {errors.email && (
                      <p className="text-red">{errors.email?.message}</p>
                    )}
                  </div>
                  <Input
                    id="email"
                    placeholder="alexei@email.com"
                    isInvalid={errors.email}
                    register={register("email", {
                      required: "This field is required",
                      onChange: () => {
                        clearErrors("email");
                      },
                    })}
                  />
                </div>
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="phoneNumber"
                      className={`${errors.phoneNumber ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Phone Number
                    </label>
                    {errors.phoneNumber && (
                      <p className="text-red">{errors.phoneNumber?.message}</p>
                    )}
                  </div>
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
                <div className="area sm:col-span-2">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="address"
                      className={`${errors.address ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Your Adress
                    </label>
                    {errors.address && (
                      <p className="text-red">{errors.address?.message}</p>
                    )}
                  </div>
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="zipCode"
                      className={`${errors.zipCode ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Zip Code
                    </label>
                    {errors.zipCode && (
                      <p className="text-red">{errors.zipCode?.message}</p>
                    )}
                  </div>
                  <Input
                    id="zipCode"
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="city"
                      className={`${errors.city ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      City
                    </label>
                    {errors.city && (
                      <p className="text-red">{errors.city?.message}</p>
                    )}
                  </div>
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="country"
                      className={`${errors.country ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      Country
                    </label>
                    {errors.country && (
                      <p className="text-red">{errors.country?.message}</p>
                    )}
                  </div>
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
                <div
                  className={`${paymentMethod === "e-Money" ? "border-orange-700" : "border-black/40"} flex w-full cursor-pointer items-center gap-4 rounded-lg border px-6 py-[19px] text-[0.8750rem] font-bold tracking-[-0.015625rem] placeholder:text-black/40 focus:outline-none sm:col-start-2`}
                  onClick={() => setPaymentMethod("e-Money")}
                >
                  <span
                    className={`${paymentMethod === "e-Money" ? "after:bg-orange-700" : ""} relative inline-block h-[20px] w-[20px] rounded-full border border-black/40 after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full`}
                  ></span>
                  <span>e-Money</span>
                </div>
                <div
                  className={`${paymentMethod === "cash" ? "border-orange-700" : "border-black/40"} flex w-full cursor-pointer items-center gap-4 rounded-lg border px-6 py-[19px] text-[0.8750rem] font-bold tracking-[-0.015625rem] placeholder:text-black/40 focus:outline-none sm:col-start-2`}
                  onClick={() => setPaymentMethod("cash")}
                >
                  <span
                    className={`${paymentMethod === "cash" ? "after:bg-orange-700" : ""} relative inline-block h-[20px] w-[20px] rounded-full border border-black/40 after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full`}
                  ></span>
                  <span>Cash on Delivery</span>
                </div>
              </div>
              <div className="mt-8 grid w-full gap-6 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="eMoneyNumber"
                      className={`${errors.eMoneyNumber ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      e-Money Number
                    </label>
                    {errors.eMoneyNumber && (
                      <p className="text-red">{errors.eMoneyNumber?.message}</p>
                    )}
                  </div>
                  <Input
                    id="eMoneyNumber"
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
                <div className="area">
                  <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
                    <label
                      htmlFor="eMoneyPin"
                      className={`${errors.eMoneyPin ? "text-red" : ""} cursor-pointer font-bold`}
                    >
                      e-Money PIN
                    </label>
                    {errors.eMoneyPin && (
                      <p className="text-red">{errors.eMoneyPin?.message}</p>
                    )}
                  </div>
                  <Input
                    id="eMoneyPin"
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
            </section>
          </div>
        </form>
        <SummarySection handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </section>
  );
}
