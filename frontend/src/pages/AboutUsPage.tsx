import LeftSideBar from "src/components/LeftSideBar";
import MenuBar from "src/components/MenuBar";
import RightSideBar from "src/components/RightSideBar";
// import bisho from "../images/bisho.jpg"

function AboutUsPage() {
  return (
    <>
      <MenuBar />
      <div className="grid grid-cols-4" style={{ height: "100vh" }}>
        <LeftSideBar />
        <div className="grid col-span-2 px-5 py-5 overflow-y-scroll h-fit">
          <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col items-center">
                <img
                  src={require("../images/bisho.png")}
                  alt="Student Picture"
                  className="w-24 h-24 rounded-full mb-4"
                />

                <h2 className="text-2xl font-semibold mb-4">
                  Student Information
                </h2>
              </div>
              <p>
                <strong>Name:</strong> Bisho Silwal
              </p>
              <p>
                <strong>ID:</strong> 617557
              </p>
              <p>
                <strong>Phone:</strong> 123-456-789
              </p>
              <p>
                <strong>Address:</strong> Fairfield, Iowa
              </p>
              <p>
                <strong>University:</strong> MIU
              </p>
              <p>
                <strong>Course:</strong> Master in Computer Science
              </p>
              <p className="mt-4">
                Bisho Silwal is a dedicated student pursuing a Master's degree
                in Computer Science at MIU. With a passion for technology and a
                commitment to academic excellence, Bisho aims to contribute
                significantly to the field of computer science.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <img
                  src={require("../images/prof-asaad.jpeg")}
                  alt="Professor Picture"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold mb-4">
                  Professor Information
                </h2>
              </div>
              <p>
                <strong>Name:</strong> Assad Saad
              </p>
              <p>
                <strong>Course Teaching:</strong> Web Application Programming
                (WAP)
              </p>
              <p className="mt-4">
                Professor Assad Saad is an experienced educator in the field of
                web technologies. With a wealth of knowledge and practical
                experience, he is dedicated to providing students with the
                skills they need to excel in web application programming.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-5">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
