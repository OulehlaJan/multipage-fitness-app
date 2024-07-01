import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et tiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">Tempus metus mattis risus volutpat egestas</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
