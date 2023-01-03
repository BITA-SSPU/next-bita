import { Button, Label, Textarea, TextInput, Footer } from "flowbite-react";
import Link from "next/link";
import {
  BsClipboardData,
  BsFillArrowUpRightSquareFill,
  BsPatchQuestionFill,
} from "react-icons/bs";

import { RiNumbersLine } from "react-icons/ri";

import { TbNumbers } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <section
        className="bg-blue-100 text-white h-screen p-32 text-center object-contain"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-primary text-white opacity-95 rounded shadow bg-gradient-to-tr from-slate-50 to-emerald-100 ">
          <h1 className="text-5xl font-bold mb-2 pt-10">
            Welcome to BITA Data Analytics{" "}
            <BsClipboardData className="inline" />
          </h1>
          <p className=" text-lg mb-8 px-8 py-7 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            fugiat. Nam obcaecati modi inventore ipsa, consectetur assumenda
            voluptates maxime ab quisquam repellendus nulla. Nam quae pariatur
            dolores, molestiae sit voluptas?
          </p>
          <div className="space-x-2">
            <Link
              href="/learnmore"
              className="py-3 px-8 bg-gray-300 hover:bg-gray-200 text-gray-800 hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300"
            >
              Learn More <BsFillArrowUpRightSquareFill className="inline" />
            </Link>
            <Link
              href="/signup"
              className="py-3 px-8 bg-yellow-200 hover:bg-yellow-100 text-yellow-900 rounded-lg hover:shadow-xl transition duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
      <div
        id="why-bita"
        className="pt-32 text-white pb-32 bg-gradient-to-r from-primary to-teal-400 min-h-screen m-auto "
      >
        <h1 className="text-6xl text-center mb-8 ">
          Why Choose BITA <BsPatchQuestionFill className="inline" />
        </h1>
        <div className="grid grid-cols-2 gap-8 mx-auto w-[900px] justify-items-center">
          <p className="col-span-2">
            <RiNumbersLine className="inline w-10 h-10" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iure,
            ea possimus fugiat adipisci voluptate quia blanditiis molestias
            quis, dolore quaerat suscipit voluptas! Harum repudiandae facilis ab
            dicta temporibus! Laudantium ut ad corrupti harum id, suscipit eum
            laboriosam a quia ea maiores veniam velit voluptates ex recusandae
            similique illo qui.
            <Button className="mt-6">
              Learn More{" "}
              <BsFillArrowUpRightSquareFill className="inline ml-2" />
            </Button>
          </p>
          <p>
            <TbNumbers className="inline w-10 h-10" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iure,
            ea possimus fugiat adipisci voluptate quia blanditiis molestias
            quis, dolore quaerat suscipit voluptas! Harum repudiandae facilis ab
            dicta temporibus! Laudantium ut ad corrupti harum id, suscipit eum
            laboriosam a quia ea maiores veniam velit voluptates ex recusandae
            similique illo qui.
            <Button className="mt-6">
              Learn More{" "}
              <BsFillArrowUpRightSquareFill className="inline ml-2" />
            </Button>
          </p>

          <img
            className="w-[300px] h-[300px] object-cover rounded-xl hover:shadow-2xl shadow-xl"
            src="https://images.pexels.com/photos/12266915/pexels-photo-12266915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-gradient-to-bl from-secondary to-green-400 h-full py-32">
        <footer
          id="contact-us"
          className="flex flex-col gap-4 max-w-[800px] mx-auto  text-white bg-primary rounded-lg p-9 shadow-md"
        >
          <h1 className="text-6xl text-center">Any Queries?</h1>
          <form action="" className="">
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@bita.com"
                required={true}
                shadow={true}
              />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>
          </form>
        </footer>
      </div>
      {/* FOOTER */}
    </>
  );
}
