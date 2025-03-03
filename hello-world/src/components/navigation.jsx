const Navigation  = () => {

    return(
        <nav>
        <div className="logo">
          <img
            src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png"
            alt="brand" width="90"
          />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>
            Login
        </button>
      </nav>
    );


};

export default Navigation