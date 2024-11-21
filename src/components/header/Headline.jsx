const Headline = () => {
  return (
    <section className="main-section">
      <div className="containers">
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="logo-img" loading="lazy" />
          <a
            href="TeenPattiMaster.apk"
            download="TeenPattiMaster.apk"
            className="download-btn"
            title="download"
            aria-label="download"
          >
            <span className="z-10">
              <img src="/download-icon.png" alt="download" className="icon" />
            </span>
            <span className="z-10">downlaod</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Headline;
