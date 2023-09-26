import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Input } from "../Input";
import { Loader2 } from "lucide-react";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "react-query";
import { createCourse } from "@/services";
import { toast } from "react-toastify";

export default function CreateCourseModal() {
  let [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const createCourseSchema = object({
    courseName: string().required("Please enter course name"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(createCourseSchema), mode: "all" });
  const { mutate, isLoading } = useMutation(
    (data: object) => createCourse(data),
    {
      onSuccess: (res) => {
        toast.success("Course created successfully");
        queryClient.invalidateQueries(["get-courses"]);
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message ?? "Creation Error");
      },
    }
  );

  const create = handleSubmit((d) => {
    console.log(d);
    mutate(d);
  });
  return (
    <>
      <div className="h-full px-8 py-5 flex items-center justify-between lg:w-4/12 border-dashed border rounded-xl">
        <div className=" flex items-center">
          <span className="font-semibold">Create Course</span>
        </div>
        <div
          onClick={openModal}
          className="w-8 h-8 bg-[#CFE6FB] cursor-pointer flex items-center justify-center rounded-full"
        >
          <HiOutlinePlus className="font-bold text-2xl text-[#1183ED]" />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Course
                  </Dialog.Title>
                  <form
                    className="mt-4 max-w-[500px] w-full mx-auto space-y-5 flex flex-col justify-center"
                    onSubmit={create}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="font-semibold inline-block"
                      >
                        Course Name
                      </label>
                      <Input
                        id="email"
                        className="mt-2 focus:outline-0"
                        {...register("courseName")}
                        error={errors?.courseName?.message}
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        className="w-52 py-3 flex justify-center items-center text-white rounded-full bg-violet-600 hover:bg-violet-400 cursor-pointer"
                        disabled={!isValid || isLoading}
                      >
                        Create
                        {isLoading && (
                          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        )}
                      </button>
                    </div>
                  </form>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
