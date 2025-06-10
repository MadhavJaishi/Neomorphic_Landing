import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12
           rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">
              {" "}
          </span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80">
            {" "}
          </span>
        </div>
        <div className="relative flex flex-col items-center text-center lg:text-left 
        lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-heading-1 text-3xl sm:text-2xl md:text-3xl xl:text-3xl font-bold">
            {" "}
            Empower Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">with Our Cutting-Edge Solutions</span>
          </h1>
          <Paragraph className="mt-8">
            Our SaaS platform is designed to streamline your operations, boost efficiency, and drive growth. We provide a comprehensive suite of intuitive tools and powerful features, all accessible through a user-friendly interface. From automating routine tasks to delivering actionable insights, our solutions empower businesses of all sizes to achieve their goals and stay ahead in today's competitive landscape. Experience seamless integration, robust security, and dedicated support, allowing you to focus on what matters most: your success.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                <span className="min-w-max pr-2 border-r border-box-border">
                  <MdOutlineMarkEmailUnread width={20} height={20}/>
                </span>
                <input type="email" placeholder="baburao@gmail.com" className="w-full py-2 outline-none bg-transparent"/>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero