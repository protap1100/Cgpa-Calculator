import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../../Components/SectionTitle";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    // Basic email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("Resume-Service", "template_0avua0t", form, "vn2WJCE5ovXFUzwct")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
          form.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="mt-5 container mx-auto">
      <SectionTitle
        heading="Get in Touch"
        subHeading="Fill in the form below to start a conversation"
      />
      <section className="py-6 mt-5 bg-gray-200 dark:text-gray-900 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray-300 max-w-6xl mx-auto text-sm md:text-base">
          <div className="flex flex-col items-center justify-center p-6 md:p-12">
            <ToastContainer />
            <div className="w-full max-w-md">
              <form onSubmit={sendEmail}>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 w-full py-2 border border-orange-400 bg-orange-400 text-white rounded-lg hover:bg-orange-600 text-sm font-medium transition cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="p-6 md:p-12 flex flex-col justify-center">
            <div className="mb-6 px-4 sm:px-0">
              <h1 className="text-lg font-semibold mb-2">
                This website is currently under development.
              </h1>
              <p className="mb-2">
                We’d love to hear your feedback, suggestions, or any features
                you think would make this site better.
              </p>
              <p className="mb-2">
                Your input is valuable to us and helps improve the user
                experience.
              </p>
              <p>
                Please feel free to share your thoughts via the contact form —
                we’re eager to listen and respond!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
