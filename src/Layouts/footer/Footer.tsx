function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='fixed-bottom p-10 bg-secondary-subtle text-center text-secondary-emphasis'>
      <div>CopyRight &copy; {footerYear} Github App</div>
    </footer>
  );
}

export default Footer;
