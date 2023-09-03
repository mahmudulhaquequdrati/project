import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import Preview from "./Preview";

export default function Signature() {
  const location = useLocation();
  const navigate = useNavigate();
  const codeContainerRef = useRef(null);

  useEffect(() => {
    if (
      location.state === null ||
      location.state?.name === "" ||
      location.state?.name === undefined
    ) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const { name, phone, email, title, imageUrl } = location.state || {};

  const [isCopyied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    // Combine the data you want to copy into a single string
    const combinedText = `${name} | Better Tax Releif\n${title}\n${phone} (866) 309-7718\n${email}@bettertaxrelief.com\nwww.bettertaxrelief.com\n2525 Main Street, Suite 550, Irvine, CA 92614`;

    // Create a text area element to temporarily hold the combined text
    const textArea = document.createElement("textarea");
    textArea.value = combinedText;

    // Append the text area to the DOM (not visible to the user)
    document.body.appendChild(textArea);

    // Select the text in the text area
    textArea.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the text area from the DOM
    document.body.removeChild(textArea);
  };

  const handleDownload = () => {
    const data = {
      name,
      phone,
      email,
      title,
      imageUrl,
    };

    localStorage.setItem("info", JSON.stringify(data));

    const Mock = () => {
      return (
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Your Signature</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>
            <Preview dynamicData={data} />
          </body>
        </html>
      );
    };

    const componentCode = ReactDOMServer.renderToString(<Mock />);
    const blob = new Blob([componentCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";
    a.click();
    URL.revokeObjectURL(url);

    navigate("/signature/preview", {
      state: {
        name,
        phone,
        email,
        title,
        imageUrl,
      },
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto border border-dashed border-[#273762] rounded-lg p-4 ">
        <div className="" ref={codeContainerRef}>
          <div className=" flex gap-6 items-center">
            <div className="">
              {imageUrl ? (
                <img className="w-32 " src={imageUrl} />
              ) : (
                <img className="w-32 " src="./avatar.png" />
              )}
              {/* </div> */}
              <div className="flex mt-4 gap-[0.15rem] justify-center">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "#273762",
                    }}
                    width="28"
                    height="28"
                  >
                    <path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "#273762",
                    }}
                    width="28"
                    height="28"
                  >
                    <path d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "#273762",
                    }}
                    width="28"
                    height="28"
                  >
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-gray-700">
              <h2 className="text-blue-700 font-medium">
                {name} | Better Tax Releif
              </h2>
              <h3 className="py-1 text-sm font-medium">{title}</h3>
              <div className="flex gap-2  pt-1">
                <p className="flex items-center gap-1 cursor-pointer text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                  >
                    <path
                      d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                      fill="rgba(39,55,98,1)"
                    ></path>
                  </svg>
                  {phone}
                </p>
                <p className="flex gap-1 text-sm mt-0.5">
                  <img
                    src="https://i.postimg.cc/SNvgCcbs/old-typical-phone.png"
                    className="w-3.5
                     h-4"
                    alt=""
                  />
                  (866) 309-7718
                </p>
              </div>
              <p className="flex gap-1 text-[15px] mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                >
                  <path
                    d="M2.24283 6.85419L11.4895 1.30843C11.8062 1.11848 12.2019 1.11855 12.5185 1.30862L21.7573 6.85416C21.9079 6.94453 22 7.10726 22 7.28286V19.9998C22 20.5521 21.5523 20.9998 21 20.9998H3C2.44772 20.9998 2 20.5521 2 19.9998V7.28298C2 7.10732 2.09218 6.94454 2.24283 6.85419ZM18.3456 8.24367L12.0606 13.6827L5.64722 8.23752L4.35278 9.76213L12.0731 16.3169L19.6544 9.75599L18.3456 8.24367Z"
                    fill="rgba(39,55,98,1)"
                  ></path>
                </svg>
                {email}@bettertaxrelief.com
              </p>
              <p className="flex gap-1 text-[15px] mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"
                    fill="rgba(39,55,98,1)"
                  ></path>
                </svg>
                www.bettertaxrelief.com
              </p>
              <p className="flex gap-1 text-[15px] mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                >
                  <path
                    d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                    fill="rgba(39,55,98,1)"
                  ></path>
                </svg>
                2525 Main Street, Suite 550, Irvine, CA 92614
              </p>
            </div>
          </div>
          <img src="./ba-6.png" className="w-[80%] mt-6" alt="" />
        </div>
        <div className="my-6 flex gap-4 justify-center font-medium">
          <button
            className="bg-[#273762] px-6 py-2 rounded-lg hover:bg-transparent text-white border-2 border-[#273762] hover:text-[#273762] "
            onClick={handleCopyClick}
          >
            {!isCopyied
              ? "Copy Signature to clipboard"
              : "Copied Signature to clipboard"}
          </button>
          <button
            className="bg-[#273762] px-6 py-2 rounded-lg hover:bg-transparent text-white border-2 border-[#273762] hover:text-[#273762] "
            onClick={handleDownload}
          >
            Downlaod Source Code
          </button>
        </div>
      </div>
    </div>
  );
}
