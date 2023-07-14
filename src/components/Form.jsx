import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from "./utils/inputValidations";
import { useState } from "react";

export const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="space-y-6"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          {/* <Input {...num_validation} />
          <Input {...password_validation} /> */}
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <svg
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M168.8 224h-8.4c-35.3 0-64 28.7-64 64v56.3c0.9-2.2 1.8-4.5 2.8-6.7 17.5-41.4 40.9-79.4 69.6-113.6zM96.5 679.7V736c0 35.3 28.7 64 64 64h8.4c-28.8-34.2-52.1-72.3-69.6-113.7-1-2.1-1.9-4.4-2.8-6.6z"
                    fill="#b0a954"
                  ></path>
                  <path
                    d="M863.5 224H258.3C178.5 294.4 128 397.4 128 512s50.5 217.6 130.3 288h605.1c35.3 0 64-28.7 64-64V288c0.1-35.4-28.5-64-63.9-64z"
                    fill="#3e456a"
                  ></path>
                  <path
                    d="M125.1 289.7L512 673.6l382.6-385.5L512 543.9zM717.9 836.2c-14.9 9.5-19.3 29.3-9.8 44.2 6.1 9.6 16.4 14.8 27 14.8 5.9 0 11.8-1.6 17.2-5C791 865.6 825.7 835 855.1 800h-89c-15 13.2-31.1 25.3-48.2 36.2zM927.5 344.1v335.5c21.3-53 32.5-110 32.5-167.6 0-58.4-11.1-115.1-32.5-167.9z"
                    fill="#b0a954"
                  ></path>
                  <path
                    d="M774.3 148.8c-38-27.5-79.9-48.8-124.3-63.1C605.5 71.3 559.1 64 512 64c-60.5 0-119.1 11.8-174.4 35.2-53.4 22.6-101.3 54.9-142.4 96-9.2 9.2-18 18.8-26.4 28.7-28.8 34.2-52.1 72.3-69.6 113.7-0.9 2.2-1.9 4.4-2.8 6.7C74.9 397.6 64 454 64 512s10.9 114.4 32.5 167.7c0.9 2.2 1.8 4.5 2.8 6.7 17.5 41.4 40.8 79.5 69.6 113.7 8.3 9.9 17.1 19.5 26.4 28.7 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960c23.1 0 46.3-1.8 69-5.3 17.5-2.7 29.4-19 26.7-36.5s-19.1-29.4-36.5-26.7c-19.5 3-39.4 4.5-59.2 4.5-97.1 0-186-36.3-253.7-96C178.5 729.6 128 626.6 128 512s50.5-217.6 130.3-288c67.7-59.7 156.5-96 253.7-96 40.4 0 80.2 6.2 118.3 18.6 51.5 16.6 97.4 43.3 136.1 77.4h88.7c-23.7-28.3-50.8-53.5-80.8-75.2z"
                    fill="#b0a954"
                  ></path>
                  <path
                    d="M96.5 288v56.3c0.9-2.2 1.8-4.5 2.8-6.7 17.5-41.4 40.8-79.5 69.6-113.7h-8.4c-35.4 0.1-64 28.7-64 64.1zM160.5 800h8.4c-28.8-34.2-52.1-72.3-69.6-113.7-0.9-2.2-1.9-4.4-2.8-6.7V736c0 35.4 28.6 64 64 64zM177.3 324L512 543.9l182.9-122.3c-15.2-74.2-48.8-141.8-95.8-197.7H258.3c-32.3 28.5-59.7 62.3-81 100.1z"
                    fill="#636a8c"
                  ></path>
                  <path
                    d="M703 481.2L512 673.6 171.1 335.4C143.6 388.3 128 448.3 128 512c0 114.6 50.5 217.6 130.3 288h340.8C664.6 722.2 704 621.7 704 512c0-10.3-0.4-20.6-1-30.8z"
                    fill="#636a8c"
                  ></path>
                  <path
                    d="M177.3 324c-2.1 3.8-4.2 7.6-6.2 11.4L512 673.6l191-192.4c-1.4-20.3-4.1-40.2-8.1-59.6L512 543.9 177.3 324z"
                    fill="#a0a040"
                  ></path>
                  <path
                    d="M128 512c0-63.7 15.6-123.7 43.1-176.6 2-3.8 4-7.6 6.2-11.4 21.3-37.7 48.8-71.6 81.1-100 62.1-54.8 142-89.8 229.8-95.2a446.34 446.34 0 0 0-104.1-46.2c-15.7 4.7-31.2 10.2-46.4 16.7-53.4 22.6-101.3 54.9-142.4 96-9.2 9.2-18 18.8-26.4 28.7-28.8 34.2-52.1 72.3-69.6 113.7-0.9 2.2-1.9 4.4-2.8 6.7C74.9 397.6 64 454 64 512s10.9 114.4 32.5 167.7c0.9 2.2 1.8 4.5 2.8 6.7 17.5 41.4 40.8 79.5 69.6 113.7 8.3 9.9 17.1 19.5 26.4 28.7 41.1 41.1 89 73.4 142.4 96 15.2 6.4 30.7 12 46.4 16.7 36.9-11 71.9-26.6 104.1-46.2-87.8-5.4-167.7-40.4-229.8-95.2C178.5 729.6 128 626.6 128 512z"
                    fill="#a0a040"
                  ></path>
                </g>
              </svg>{" "}
              Message has been sent successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            class="w-full p-3 text-sm font-bold tracki uppercase rounded text-white bg-gray-400 dark:bg-gray-400 dark:text-gray-400">
            Send message
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
