const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 ${process.env.NEXT_PUBLIC_STORE_NAME}, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
