import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import FlippingCardRoute from "~/components/flipping-card";
import FlippingCard from "~/components/FlippingCard";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    {
      name: "Lutroo Health and Wellness",
      content:
        "Personalized Mental Health Support and Faith-Based Counseling—Accessible Anytime, Anywhere for Individuals, Families, and Couples.",
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
  },
];



export default function Index() {
  const services = [
    {
      label: "Individual counseling",
      image: "/individual.jpg",
      content: [
        "Adolescent and adults",
        "Mental health support",
        "Trauma counseling",
        "Bereavement counseling",
        "Anger management",
        "Employee Assistant Programs (EAP)",
        "Health and wellness coaching",
        "Referrals",
      ],
    },
    {
      label: "Relationships Therapy",
      image: "/relationship.jpg",
      content: [
        "Family counseling",
        "Pre-marital counseling",
        "Couple/Marriage counseling",
        "Parental guidance",
      ],
    },
    {
      label: "Consultations",
      image: "/consultations.webp",
      content: [
        "Contact For More info",
      ],
    },
    {
      label: "Educational seminars and webinars",
      image: "/seminars.webp",
      content: [
        "Contact For More info",
      ],
    },
  ];

  return (
    <div className="">
      <section className="">
        <div
          className="flex flex-col lg:flex-row justify-between lg:px-40 p-10 items-center "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className="w-full lg:w-[650px] flex flex-col gap-10 items-center lg:items-start">
            <div className="">
              <h1
                className="text-5xl lg:text-8xl text-primary-900 text-center lg:text-start"
                style={{ fontFamily: "lora", fontWeight: 600 }}
              >
                Your Path To Wholistic Wellness
              </h1>
            </div>
            <div className="w-full text-center lg:text-start mt-6 flex flex-col gap-4">
              <p className="text-primary-900">
                Personalized Mental Health Support and Faith-Based
                Counseling—Accessible Anytime, Anywhere for Individuals,
                Families, and Couples.
              </p>
            </div>

            <Button className="bg-secondary-900 text-primary-900 rounded-full p-6 pl-1 hover:bg-primary-900 hover:text-white hover:rounded-md">
              <div className="bg-primary-900 text-white rounded-full p-3">
                <ArrowLeft />
              </div>
              <div className="">Book a session</div>
            </Button>
          </div>

          <div className="my-10 lg:my-0">
            <img src={"/illustration.svg"} className="lg:w-[40vw]" />
          </div>
        </div>
      </section>
      <section className="bg-primary-900 text-white p-8 py-20 lg:p-20 lg:px-40 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="hidden lg:flex">
            <img
              src="/wellness.webp"
              className="w-[500px] h-[500px] rounded object-cover"
            />
          </div>
          <div className="flex flex-col gap-10 lg:w-[650px]">
            <h3
              className="text-secondary-900 text-5xl text-center lg:text-start"
              style={{ fontFamily: "lora", fontWeight: 600 }}
            >
              About Us
            </h3>
            <p className=" text-white text-center lg:text-start">
              Lutroo health and wellness, is an organization offering a range of
              services to carter to the mental health and wholistic health needs
              of our clients. With a focus of providing personalized support and
              guidance, we aim to help individuals achieve their mental health
              goals through a wholistic approach. Our wholistic approach focuses
              on healing body, mind, soul and restoring relationships. Lutroo
              provides faith based counseling, seminars, workshops, health and
              wellness coaching and Employee health and wellness services. Our
              services will be available online ensuring accessibility to all
              our clients. We carter for individuals, families and couples.
            </p>
            <p className=" text-white text-center lg:text-start">
              Our online distribution channels make our services easily
              accessible to our target market, increasing our reach and
              convenience for customers. Furthermore, we have a dedicated team
              of counselling professionals who are highly skilled and
              experienced in providing quality mental health support to our
              clients. In addition, we offer flexible pricing options to cater
              for unique needs of our clientele.
            </p>
            <Button className="bg-secondary-900 text-primary-900 rounded-full p-6 pl-1 hover:bg-primary-900 hover:text-white hover:rounded-md">
              <div className="">Read More</div>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 p-5">
        <div className="flex flex-col gap-10 lg:max-w-[90vw] lg:px-10 mx-auto">
          {/* <h2 className="text-4xl font-semibold gradientText">About Us</h2> */}
          <div className="flex flex-col gap-3 ">
            <h2
              className="text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
              style={{ fontFamily: "lora", fontWeight: 600 }}
            >
              Your Journey to wellness begins here.
            </h2>
          </div>
          <p className=" text-primary-900 text-center ">
            We have a dedicated team of counselling professionals who are highly
            skilled and experienced in providing quality mental health support
            to our clients
          </p>
          <div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-between mx-auto items-center">
            {services.map((service) => {
              return (
                <FlippingCard
                  frontContent={
                    <div className="w-full h-full p-5 flex flex-col justify-end">
                      <img
                        src={service.image}
                        className="w-full h-[300px] object-cover"
                      />
                      <p className="text-white text-lg h-[40px] my-1">
                        {service.label}
                      </p>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col gap-2 text-white">
                      <h4 className="text-lg font-semibold max-w-[280px]">
                        {service.label}
                      </h4>
                      <ul>
                        {service.content.map((item) => (
                          <div className="">{item}</div>
                        ))}
                      </ul>
                    </div>
                  }
                ></FlippingCard>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" py-10 lg:py-16 flex flex-col gap-10 p-10">
        <div className="max-w-[400px] mx-auto">
          <h2
            className="text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
            style={{ fontFamily: "lora", fontWeight: 600 }}
          >
            Get in touch
          </h2>
          <p className="text-primary-900 text-center">
            Leave us a message we'll get back to you.
          </p>
        </div>
        <form action="" className="grid max-w-[400px] mx-auto">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="" className="text-sm text-primary-900">
                    Name *
                  </label>
                  <input
                    placeholder="Enter name"
                    type="text"
                    className="border border-gray-200 p-2 bg-white"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-sm text-primary-900">
                    Email Address *
                  </label>
                  <input
                    placeholder="Enter email"
                    type="email"
                    className="border border-gray-200 p-2 bg-white"
                    name="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-primary-900">
                  Message
                </label>
                <textarea
                  placeholder="message"
                  className="border border-gray-200 p-2 bg-white"
                  name="message"
                />
              </div>
            </div>
            <button
              className="bg-secondary-900 text-primary-900 w-full items-center justify-center p-3 flex gap-2 mx-auto lg:mx-0 rounded-full"
              type="submit"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </section>
      <section className="bg-primary-900 text-white p-10">
        <p className="text-center">All copyright reserved © Lutroo 2024</p>
      </section>
    </div>
  );
}
