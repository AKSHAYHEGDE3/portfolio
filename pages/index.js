import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div
        className={`flex items-center flex-wrap gap-4 text-center mt-40 mr-3 ${styles.main_home}`}
      >
        <div className={`w-[55%] text-center ${styles.name_box}`}>
          <p className="text-xl sm:text-3xl text-white md:mt-20">
            Namaste <span className="text-2xl sm:text-4xl">🙏</span>, I am
          </p>
          <p
            style={{ fontFamily: "'Roboto', sans-serif !important" }}
            className="text-3xl sm:text-5xl text-[#f9826c] font-bold mt-4"
          >
            AKSHAY HEGDE
          </p>
          <p className={`${styles.bio} mx-auto mt-2`}>
            Aspiring Full Stack Developer
          </p>
        </div>
        <div
          className={`h-[200px] w-[200px] rounded-full ${styles.profile_img}`}
        >
          <img
            src="/akshay.jpeg"
            className={`h-[200px] w-[200px] rounded-full mx-auto`}
          />
        </div>
      </div>
    </div>
  );
}
