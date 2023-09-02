import styles from "@/styles/SideNav.module.css";
import { logo, home, discover, envelope, book, setting, signout, user } from "../../lib/icons";
import Image from "next/image";

export default function SideNav() {

  return (
    <nav className={styles.nav}>
      <div>
        <Image src={logo} width={44} height={38} alt="logo" />
      </div>
      <div className={styles.nav_components}>
        <span className={styles.selected}><Image src={home} height={32} width={32} alt="home" /><p>Home</p></span>
        <span><Image src={discover} height={32} width={32} alt="home" /><p>Discover</p></span>
        <span><Image src={user} height={32} width={32} alt="home" /><p>Profile</p></span>
        <span><Image src={book} height={32} width={32} alt="home" /><p>Learning</p></span>
        <span><Image src={envelope} height={32} width={32} alt="home" /><p>Message</p></span>
        <span><Image src={setting} height={32} width={32} alt="home" /><p>Setting</p></span>
      </div>
      <div className={styles.nav_components}>
        <span><Image src={signout} height={32} width={32} alt="home" /><p>Log out</p></span>

      </div>
    </nav>
  )
}