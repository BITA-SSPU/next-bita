import { Button, Label, Textarea, TextInput, Footer } from "flowbite-react";
import Link from "next/link";

// ICONS
import {
  BsClipboardData,
  BsFillArrowUpRightSquareFill,
  BsPatchQuestionFill,
} from "react-icons/bs";
import { RiNumbersLine } from "react-icons/ri";
import { TbNumbers } from "react-icons/tb";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section
        className="bg-blue-100 p-16 flex justify-center text-white md:h-screen md:p-32 md:text-center object-contain"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "contain",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-primary h-fit w-screen md:w-fit text-white opacity-95 rounded shadow bg-gradient-to-tr from-slate-50 to-emerald-100 md:h-fit"
        >
          <h1 className="text-5xl font-bold mb-2 pt-10 px-7">
            Welcome to BITA Data Analytics
            <BsClipboardData className="inline text-center" />
          </h1>
          <p className=" text-lg mb-8 px-8 py-7 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            fugiat. Nam obcaecati modi inventore ipsa, consectetur assumenda
            voluptates maxime ab quisquam repellendus nulla. Nam quae pariatur
            dolores, molestiae sit voluptas?
          </p>
          <div className="md:space-x-4 flex flex-col md:justify-center md:flex-row">
            <motion.button
              whileHover={{ scale: 1.09 }}
              className="mb-8 md:mb-auto"
            >
              <Link
                href="/learnmore"
                className="py-3 px-8 bg-gray-300 hover:bg-gray-200 text-gray-800 hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300"
              >
                Learn More <BsFillArrowUpRightSquareFill className="inline" />
              </Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}>
              <Link
                href="/signup"
                className="py-3 px-8 bg-yellow-200 hover:bg-yellow-100 text-yellow-900 rounded-lg hover:shadow-xl transition duration-300"
              >
                Sign Up Now
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </section>
      <motion.div
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 2 }}
        id="why-bita"
        className="mt-16 md:m-auto md:pt-32 pt-8 w-screen md:px-32 px-16 text-white pb-32 bg-gradient-to-r from-primary to-teal-400 min-h-screen m-auto"
      >
        <h1 className="text-6xl text-center mb-8 ">
          Why Choose BITA <BsPatchQuestionFill className="inline" />
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mx-auto text-sm w-fit justify-items-center">
          <p className="col-span-1">
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
            className="w-[300px] h-[300px] col-span-1 object-cover rounded-xl shadow-xl"
            src="https://images.pexels.com/photos/12266915/pexels-photo-12266915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </motion.div>
      {/* CONTACT FORM */}
      <div className="bg-gradient-to-bl gradient-to-tr h-full py-32">
        <div
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
            <button>Submit</button>
          </form>
        </div>
      </div>
      {/* FOOTER */}
    </>
  );
}
