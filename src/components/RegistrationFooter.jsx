import Typography from "./Typography";

const RegistrationFooter = () => {
  return (
    <div className="flex flex-col mt-4">
      <Typography cs={"text-sm"}>Get the app.</Typography>
      <div className="flex mt-4 space-x-2">
        <img
          alt="Download on the App Store"
          className="h-[40px]"
          src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
        />
        <img
          alt="Get it on Google Play"
          className="h-[40px]"
          src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
        />
      </div>
    </div>
  );
};

export default RegistrationFooter;
