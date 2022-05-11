const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-[#2f2d2e] w-full h-20">
      <div className="flex flex-col relative">
        <button className="shadow-xl shadow-yellow-500/20 bg-yellow-500 self-end w-12 h-12 rounded-full text-center absolute bottom-[-1.5rem] mr-12">
          <i class="fa-xl fa-solid fa-plus"></i>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
